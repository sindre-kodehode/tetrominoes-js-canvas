const FPS   = 60;
const MILLI = 1000 / FPS;

const BLOCKSIZE = 16;
const HEIGHT    = 320;
const WIDTH     = 160;
const COLUMNS   = 10;
const ROWS      = 20;

const SCORES = [ 0, 40, 100, 300, 1200 ];

const LEVELS = [
   10,  20,  30,  40,  50,
   60,  70,  80,  90, 100,
  100, 100, 100, 100, 100,
  100, 110, 120, 130, 140,
  150, 160, 170, 180, 190,
  200, 200, 200, 200,
];

const SPEEDS = [
  798, 715, 632, 549, 465,
  382, 299, 216, 133,  99,
   83,  83,  83,  66,  66,
   66,  49,  49,  49,  33,
   33,  33,  33,  33,  33,
   33,  33,  33,  16,
];

const COLORS = [
  "",
  "purple",
  "red",
  "green",
  "blue",
  "orange",
  "yellow",
  "cyan",
];

const SHAPES = [
  [
    [ 0, 1, 0 ],
    [ 1, 1, 1 ],
    [ 0, 0, 0 ],
  ],
  [
    [ 2, 2, 0 ],
    [ 0, 2, 2 ],
    [ 0, 0, 0 ],
  ],
  [
    [ 0, 3, 3 ],
    [ 3, 3, 0 ],
    [ 0, 0, 0 ],
  ],
  [
    [ 4, 0, 0 ],
    [ 4, 4, 4 ],
    [ 0, 0, 0 ],
  ],
  [
    [ 0, 0, 5 ],
    [ 5, 5, 5 ],
    [ 0, 0, 0 ],
  ],
  [
    [ 6, 6 ],
    [ 6, 6 ],
  ],
  [
    [ 0, 0, 0, 0 ],
    [ 7, 7, 7, 7 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
  ],
]

export {
  BLOCKSIZE,
  COLORS,
  COLUMNS,
  HEIGHT,
  LEVELS,
  MILLI,
  ROWS,
  SCORES,
  SHAPES,
  SPEEDS,
  WIDTH,
};
