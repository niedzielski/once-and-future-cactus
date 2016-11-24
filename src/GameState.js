/// <reference path="Phaser.d.ts" />
import Scene from './Scene' // eslint-disable-line no-unused-vars

/** @private {!Scene} _scene */
export default class GameState extends Phaser.State {
  /** @param {!Phaser.Game} game
      @param {!Scene} scene */
  constructor(game, scene) {
    super(game)
    this._scene = scene
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  preload(game) {
    super.preload(game)
    game.time.advancedTiming = true

    game.renderer.renderSession.roundPixels = true
    game.camera.roundPx = false // this should be true but creates jitter

    Phaser.Canvas.setImageRenderingCrisp(game.canvas, false)

    window.addEventListener('resize', () => this.resize())

    this._scene.preload(game)
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  create(game) {
    super.create(game)
    this._scene.create(game)
    this.resize()
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  update(game) {
    super.update(game)
    this._scene.update(game)
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  render(game) {
    super.render(game)
    this._scene.render(game)

    const minFps = 50, millisPerSec = 1000, millisPerFrame = 17
    if (game.time.fps < minFps
    && game.time.now % millisPerSec < millisPerFrame) {
      console.log(`${game.time.fps} fps`) // eslint-disable-line no-console
    }
  }

  /** @return {void} */
  resize() {
    const scale = window.innerHeight / this._scene.height()
    const nativeWidth = Math.ceil(window.innerWidth / scale)
    const nativeHeight = Math.ceil(this._scene.height())

    // eslint-disable-next-line no-console
    console.log(`resize scale=${scale} `
      + `native=${nativeWidth}x${nativeHeight} `
      + `scene=${this._scene.width()}x${this._scene.height()} `
      + `window=${window.innerWidth}x${window.innerHeight} `
      + `ratio=${window.innerWidth / window.innerHeight}`)

    this.game.scale.setGameSize(nativeWidth, nativeHeight)
    this.game.camera.bounds = new Phaser.Rectangle(0, 0, this._scene.width(),
      this._scene.height())
    this._scene.resize(this.game)
  }
}