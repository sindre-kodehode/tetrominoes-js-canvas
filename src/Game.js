import InputHandler from "./InputHandler.js";
import Piece        from "./Piece.js";
import Playfield    from "./Playfield.js";

export default class {
  constructor( width, height ) {
    this.width      = width;
    this.height     = height;
    this.isPaused   = false;
    this.isGameOver = false;

    this.inputHandler;
    this.playfield;
    this.piece;

    this.reset();
  }

  reset() {
    this.inputHandler = new InputHandler( this );
    this.playfield    = new Playfield( this );
    this.piece        = new Piece( this.inputHandler, this.playfield );

    this.assignKeys();
  }

  assignKeys() {
    this.inputHandler.assignKey( "p", () => this.pauseGame() );
    this.inputHandler.assignKey( "r", () => this.reset()     );
  }

  pauseGame() { 
    this.isPaused = !this.isPaused;
    this.inputHandler.unassignAll();
    this.assignKeys();
    if ( !this.isPaused ) this.piece.assingKeys();
  }
   
  draw( context ) {
    context.clearRect( 0, 0, this.width, this.height );
    this.piece.draw( context );
    this.playfield.draw( context );
  }

  update( deltaTime ) {
    this.inputHandler.update( deltaTime );
    if ( !this.isPaused ) this.piece.update( deltaTime );
  }
}
