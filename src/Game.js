import GameState from './GameState'
import Scene from './Scene'

export default class Game extends Phaser.Game {
  constructor() {
    // todo: use Phaser.AUTO (remove explicit renderer) when dev bugs are fixed
    super({width: '100%', height: '100%', transparent: false, antialias: false,
      renderer: Phaser.CANVAS})
    this._gameState = new GameState(this, new Scene())
  }

  /** @return {void} */
  init() {
    this.state.add('GameState', this._gameState, true)
  }
}