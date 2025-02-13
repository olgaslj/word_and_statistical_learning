const IMAGE_INDICES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const TRIPLETS = [
    [ 0,  1,  2],
    [ 1,  0,  3],
    [ 3,  2,  0],
    [ 2,  3,  1],
    [ 4,  5,  6],
    [ 7,  8,  9],
    [10, 11, 12],
    [13, 14, 15],
];

const PATTERN_RECOGNITION_TRIALS = [
    {
        "item_no_target": 1,
        "triplet_pair": "triplet",
        "chance": 2,
        "target": [0, 1, 2],
        "foils": [
            [1, 12, 7],
        ]
    },
    {   "item_no_target": 2,
        "triplet_pair": "triplet",
        "chance": 2,
        "target": [1, 0, 3],
        "foils": [
            [0, 1, 3],
        ]
    },
    {   "item_no_target": 3,
        "triplet_pair": "triplet",
        "chance": 2,
        "target": [3, 2, 0],
        "foils": [
            [3, 2, 8],
        ]
    },
    {   "item_no_target": 4,
        "triplet_pair": "triplet",
        "chance": 2,
        "target": [2, 3, 1],
        "foils": [
            [6, 0, 2],
        ]
    },
    {"item_no_target": 5,
    "triplet_pair": "triplet",
    "chance": 2,
        "target": [4, 5, 6],
        "foils": [
            [8, 4, 10],
        ]
    },
    {"item_no_target": 6,
    "triplet_pair": "triplet",
    "chance": 2,
        "target": [7, 8, 9],
        "foils": [
            [15, 10, 5],
        ]
    },
    {"item_no_target": 7,
    "triplet_pair": "triplet",
    "chance": 2,
        "target": [10, 11, 12],
        "foils": [
            [13, 5, 9],
        ]
    },
    {"item_no_target": 8,
    "triplet_pair": "triplet",
    "chance": 2,
        "target": [13, 14, 15],
        "foils": [
            [2, 0, 14],
        ]
    },
    {"item_no_target": 9,
    "triplet_pair": "triplet",
    "chance": 2,
        "target": [0, 1, 2],
        "foils": [
            [14, 0, 3],
        ]
    },
    {"item_no_target": 10,
    "triplet_pair": "triplet",
    "chance": 2,
        "target": [1, 0, 3],
        "foils": [
            [13, 5, 9],
        ]
    },
    {"item_no_target": 11,
    "triplet_pair": "triplet",
    "chance": 2,
        "target": [3, 2, 0],
        "foils": [
            [1, 7, 3],
        ]
    },
    {"item_no_target": 12,
    "triplet_pair": "triplet",
    "chance": 2,
        "target": [2, 3, 1],
        "foils": [
            [15, 10, 5],
        ]
    },
    {"item_no_target": 13,
    "triplet_pair": "triplet",
    "chance": 2,
        "target": [4, 5, 6],
        "foils": [
            [13, 2, 1],
        ]
    },
    {"item_no_target": 14,
    "triplet_pair": "triplet",
    "chance": 2,
        "target": [7, 8, 9],
        "foils": [
            [4, 11, 12],
        ]
    },
    {"item_no_target": 15,
    "triplet_pair": "triplet",
    "chance": 2,
        "target": [10, 11, 12],
        "foils": [
            [0, 1, 3],
        ]
    },
    {"item_no_target": 16,
    "triplet_pair": "triplet",
    "chance": 2,
        "target": [13, 14, 15],
        "foils": [
            [15, 6, 9],
        ]
    },
    {"item_no_target": 17,
    "triplet_pair": "triplet",
    "chance": 4,
        "target": [0, 1, 2],
        "foils": [
            [8, 4, 10],
            [1, 7, 3],
            [13, 2, 1],
        ]
    },
    {"item_no_target": 18,
    "triplet_pair": "triplet",
    "chance": 4,
        "target": [1, 0, 3],
        "foils": [
            [8, 4, 10],
            [15, 10, 5],
            [0, 1, 3],
        ]
    },
    {"item_no_target": 19,
    "triplet_pair": "triplet",
    "chance": 4,
        "target": [3, 2, 0],
        "foils": [
            [15, 6, 9],
            [1, 12, 7],
            [1, 7, 3],
        ]
    },
    {"item_no_target": 20,
    "triplet_pair": "triplet",
    "chance": 4,
        "target": [2, 3, 1],
        "foils": [
            [4, 11, 12],
            [14, 0, 3],
            [2, 0, 14],
        ]
    },
    {"item_no_target": 21,
    "triplet_pair": "triplet",
    "chance": 4,
        "target": [4, 5, 6],
        "foils": [
            [15, 6, 9],
            [13, 5, 9],
            [1, 12, 7],
        ]
    },
    {"item_no_target": 22,
    "triplet_pair": "triplet",
    "chance": 4,
        "target": [7, 8, 9],
        "foils": [
            [0, 1, 3],
            [3, 2, 8],
            [14, 0, 3],
        ]
    },
    {"item_no_target": 23,
    "triplet_pair": "triplet",
    "chance": 4,
        "target": [10, 11, 12],
        "foils": [
            [13, 2, 1],
            [6, 0, 2],
            [2, 0, 14],
        ]
    },
    {"item_no_target": 24,
    "triplet_pair": "triplet",
    "chance": 4,
        "target": [13, 14, 15],
        "foils": [
            [4, 11, 12],
            [3, 2, 8],
            [6, 0, 2],
        ]
    },
    {"item_no_target": 25,
    "triplet_pair": "pair",
    "chance": 2,
        "target": [1, 2],
        "foils": [
            [0, 15],
        ]
    },
    {"item_no_target": 26,
    "triplet_pair": "pair",
    "chance": 2,
        "target": [0, 3],
        "foils": [
            [1, 3],
        ]
    },
    {"item_no_target": 27,
    "triplet_pair": "pair",
    "chance": 2,
        "target": [2, 0],
        "foils": [
            [5, 2],
        ]
    },
    {"item_no_target": 28,
    "triplet_pair": "pair",
    "chance": 2,
        "target": [3, 1],
        "foils": [
            [12, 1],
        ]
    },
    {"item_no_target": 29,
    "triplet_pair": "pair",
    "chance": 2,
        "target": [5, 6],
        "foils": [
            [4, 10],
        ]
    },
    {"item_no_target": 30,
    "triplet_pair": "pair",
    "chance": 2,
        "target": [7, 8],
        "foils": [
            [2, 13],
        ]
    },
    {"item_no_target": 31,
    "triplet_pair": "pair",
    "chance": 4,
        "target": [11, 12],
        "foils": [
            [5, 10],
            [11, 14],
            [8, 3],
        ]
    },
    {"item_no_target": 32,
    "triplet_pair": "pair",
    "chance": 4,
        "target": [13, 14],
        "foils": [
            [7, 9],
            [0, 7],
            [14, 6],
        ]
    },
    {"item_no_target": 33,
    "triplet_pair": "pair",
    "chance": 4,
        "target": [0, 1],
        "foils": [
            [6, 0],
            [2, 13],
            [12, 4],
        ]
    },
    {"item_no_target": 34,
        "triplet_pair": "pair",
        "chance": 4,
        "target": [3, 2],
        "foils": [
            [8, 1],
            [9, 3],
            [15, 11],
        ]
    },
];

const PATTERN_COMPLETION_TRIALS = [
    {"item_no_target": 35,
    "triplet_pair": "triplet",
    "chance": 3,
        'probe': [0, null, 2],
        'target': 1,
        'foils': [12, 8],
    },
    {"item_no_target": 36,
    "triplet_pair": "triplet",
    "chance": 3,
        'probe': [1, 0, null],
        'target': 3,
        'foils': [5, 15],
    },
    {"item_no_target": 37,
    "triplet_pair": "triplet",
    "chance": 3,
        'probe': [null, 5, 6],
        'target': 4,
        'foils': [13, 2],
    },
    {"item_no_target": 38,
    "triplet_pair": "triplet",
    "chance": 3,
        'probe': [7, null, 9],
        'target': 8,
        'foils': [14, 3],
    },
    {"item_no_target": 39,
    "triplet_pair": "pair",
    "chance": 3,
        'probe': [10, null],
        'target': 11,
        'foils': [6, 0],
    },
    {"item_no_target": 40,
    "triplet_pair": "pair",
    "chance": 3,
        'probe': [null, 14],
        'target': 13,
        'foils': [7, 11],
    },
    {"item_no_target": 41,
    "triplet_pair": "pair",
    "chance": 3,
        'probe': [2, null],
        'target': 0,
        'foils': [1, 4],
    },
    {"item_no_target": 42,
    "triplet_pair": "pair",
    "chance": 3,
        'probe': [null, 3],
        'target': 2,
        'foils': [10, 9],
    },
]