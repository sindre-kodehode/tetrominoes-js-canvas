import { COLUMNS, ROWS, } from "./consts.js";

export default class {
  constructor( game ) {
    this.game = game;
    this.blocks = [];
    this.grid = 
      new Array( ROWS    ).fill( null ).map( () =>
      new Array( COLUMNS ).fill( null )
    );
  }

  add( shape ) {
    shape.forEach( block => {
      this.blocks.push( block );
      this.grid[ block.row ][ block.column ] = block;
    });

    if ( this.grid[0].some( block => block ) ) {
      this.game.isPaused   = true;
      this.game.isGameOver = true;
    }
  }

  collision( shape ) {
    let collision = false;

    shape.forEach( block => {
      if ( block.row > 0 && this.grid[ block.row ][ block.column ] )
        collision = true;
    });

    return collision;
  }

  draw( context ) {
    this.blocks.forEach( block => block.draw( context ) );
  }
}
