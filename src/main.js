import { HEIGHT, WIDTH } from "./consts.js";

import Game from "./Game.js";

const display = document.getElementById( "display" );
const context = display.getContext( "2d" );
const game    = new Game( WIDTH, HEIGHT );

display.height = HEIGHT;
display.width  = WIDTH;

let prevTime = 0;

const loop = curTime => {
  requestAnimationFrame( loop );

  const deltaTime = curTime - prevTime;
  prevTime = curTime;

  game.update( deltaTime );
  game.draw( context );
}

loop( 0 );
