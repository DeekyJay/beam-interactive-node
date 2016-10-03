import { FatalCodingError, UnknownPacketError } from '../errors';
import varint from 'varint';
// eslint-disable-next-line import/no-unresolved
import { tetris as Packets } from './tetris';

const idMap = {
    Handshake: 0,
    HandshakeACK: 1,
    Report: 2,
    Error: 3,
    ProgressUpdate: 4,
};

Object.keys(idMap).forEach(key => {
    const Packet = Packets[key];
    const id = idMap[key];

    Packet.id = id;

    Packet.prototype.encodeOriginal = Packet.prototype.encode;
    Packet.prototype.encode = function () {
        return Buffer.concat([
            new Buffer(varint.encode(id)),
            this.encodeOriginal().toBuffer(),
        ]);
    };

    /**
     * Attempts to decode the packet.
     * @param  {Buffer} buf
     * @return {[type]}     [description]
     */
    Packet.decodeOriginal = Packet.decode;
    Packet.decode = function (buf) {
        varint.decode(buf, 0);
        const offset = varint.decode.bytes;

        let decoded;
        try {
            decoded = Packet.decodeOriginal(buf.slice(offset));
        } catch (e) {
            throw new FatalCodingError(e);
        }

        return decoded;
    };
});

/**
 * Decodes a packet from a buffer.
 * @param  {Buffer} buf
 * @return {Packet}
 * @throws {CodingError}
 */
Object.defineProperty(Packets, 'decode', {
    value(buf) {
        const id = varint.decode(buf);
        if (id === undefined) {
            throw new FatalCodingError('Incomplete protobuf packet.');
        }

        const keys = Object.keys(idMap);
        for (let i = 0; i < keys.length; i++) {
            const p = Packets[keys[i]];
            if (p.id === id) {
                return p.decode(buf);
            }
        }

        throw new UnknownPacketError(id, buf);
    },
});

export default Packets;
