import Piece        from "./Piece.js";
import InputHandler from "./InputHandler.js";

export default class {
  constructor( width, height ) {
    this.width  = width;
    this.height = height;

    this.smooth = false;
    this.paused = false;

    this.keys   = [];

    this.inputHandler = new InputHandler( this );
    this.piece        = new Piece( this );
  }

  pauseGame() {
    this.paused = !this.paused;
  }

  draw( context ) {
    context.clearRect( 0, 0, this.width, this.height );
    this.piece.draw( context );
  }

  update( deltaTime ) {
    if ( this.keys.includes( "p" ) ) {
      this.keys = this.keys.filter( k => k !== "p" );
      this.paused = !this.paused;
    }

    if ( this.keys.includes( "s" ) ) {
      this.keys = this.keys.filter( k => k !== "s" );
      this.smooth = !this.smooth;
    }

    this.piece.update( deltaTime );
  }
}
