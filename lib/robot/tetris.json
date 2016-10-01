{
    "package": "tetris",
    "messages": [
        {
            "name": "Handshake",
            "fields": [
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "channel",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "streamKey",
                    "id": 2
                }
            ]
        },
        {
            "name": "HandshakeACK",
            "fields": []
        },
        {
            "name": "Report",
            "fields": [
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "time",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "Users",
                    "name": "users",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "JoystickInfo",
                    "name": "joystick",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "TactileInfo",
                    "name": "tactile",
                    "id": 4
                },
                {
                    "rule": "repeated",
                    "type": "ScreenInfo",
                    "name": "screen",
                    "id": 5
                }
            ],
            "messages": [
                {
                    "name": "Users",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "connected",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "quorum",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "active",
                            "id": 3
                        },
                        {
                            "rule": "repeated",
                            "type": "HistogramUint1D",
                            "name": "qgram",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "JoystickInfo",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "id",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "Coordinate",
                            "name": "coordMean",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "Coordinate",
                            "name": "coordStddev",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "TactileInfo",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "id",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "holding",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "pressFrequency",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "releaseFrequency",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "ScreenInfo",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "id",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "clicks",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "Coordinate",
                            "name": "coordMean",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "Coordinate",
                            "name": "coordStddev",
                            "id": 4
                        }
                    ]
                }
            ]
        },
        {
            "name": "Error",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "message",
                    "id": 1
                }
            ]
        },
        {
            "name": "ProgressUpdate",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "state",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "JoystickUpdate",
                    "name": "joystick",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "TactileUpdate",
                    "name": "tactile",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "ScreenUpdate",
                    "name": "screen",
                    "id": 4
                }
            ],
            "messages": [
                {
                    "name": "JoystickUpdate",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "id",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "angle",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "intensity",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "disabled",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "TactileUpdate",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "id",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "cooldown",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "fired",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "progress",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "disabled",
                            "id": 5
                        }
                    ]
                },
                {
                    "name": "ScreenUpdate",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "uint32",
                            "name": "id",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "Click",
                            "name": "clicks",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "disabled",
                            "id": 3
                        }
                    ],
                    "messages": [
                        {
                            "name": "Click",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "Coordinate",
                                    "name": "coordinate",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "double",
                                    "name": "intensity",
                                    "id": 2
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "HistogramUint1D",
            "fields": [
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "x",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "uint32",
                    "name": "y",
                    "id": 2
                }
            ]
        },
        {
            "name": "Coordinate",
            "fields": [
                {
                    "rule": "required",
                    "type": "double",
                    "name": "x",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "double",
                    "name": "y",
                    "id": 2
                }
            ]
        }
    ]
}