/// <reference path="Phaser.d.ts" />
import GameState from './GameState'
import Scene from './Scene'
// eslint-disable-next-line node/no-missing-import,node/no-unpublished-import
import WebFont from 'webfontloader'

/** @private {!Phaser.State} _gameState */
export default class Game extends Phaser.Game {
  constructor() {
    super({transparent: false, antialias: false, renderer: Phaser.AUTO})
    this._gameState = new GameState(this, new Scene())
  }

  /** @return {void} */
  init() {
    this.state.add('GameState', this._gameState, true)
    WebFont.load({
      // eslint-disable-next-line no-console
      loading: () => console.log('loading fonts'),
      // eslint-disable-next-line no-console
      fontloading: (family, fvd) => console.log(`loading ${family} ${fvd}`),
      // eslint-disable-next-line no-console
      fontactive: (family, fvd) => console.log(`${family} ${fvd} active`),
      // eslint-disable-next-line no-console
      fontinactive: (family, fvd) => console.log(`${family} ${fvd} inactive`),
      custom: {families: ['mem mono'], urls: ['/src/font.css']},
      active: () => this._gameState.fontsLoaded(),
      inactive: () => this._gameState.fontsUnloaded()
    })
  }
}