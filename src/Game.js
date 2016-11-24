/// <reference path="Phaser.d.ts" />
import GameState from './GameState'
import Scene from './Scene'

/** @private {!Phaser.State} _gameState */
export default class Game extends Phaser.Game {
  constructor() {
    // todo: use Phaser.AUTO (remove explicit renderer) when dev bugs are fixed
    super({transparent: false, antialias: false, renderer: Phaser.CANVAS})
    this._gameState = new GameState(this, new Scene())
  }

  /** @return {void} */
  init() {
    this.state.add('GameState', this._gameState, true)
  }
}