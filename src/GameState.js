/// <reference path="Phaser.d.ts" />
import Scene from './Scene' // eslint-disable-line no-unused-vars

/** @private {!Scene} _scene
 *  @private {?Phaser.Text} _fpsText */
export default class GameState extends Phaser.State {
  /** @param {!Phaser.Game} game
      @param {!Scene} scene */
  constructor(game, scene) {
    console.log('GameState: constructor') // eslint-disable-line no-console
    super(game)
    this._scene = scene
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  preload(game) {
    super.preload(game)
    console.log('GameState: preload') // eslint-disable-line no-console
    game.time.advancedTiming = true

    game.renderer.renderSession.roundPixels = true
    game.camera.roundPx = false // this should be true but creates jitter

    Phaser.Canvas.setImageRenderingCrisp(game.canvas)

    window.addEventListener('resize', () => this.resize())

    this._scene.preload(game)
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  create(game) {
    super.create(game)
    console.log('GameState: create') // eslint-disable-line no-console
    this._scene.create(game)
    this.resize()
  }

  fontsLoaded() {
    console.log('GameState: fontsLoaded') // eslint-disable-line no-console

    this._fpsText = this.game.add.text(1, 1)
    this._fpsText.font = 'mem mono'
    this._fpsText.fontSize = 4
    this._fpsText.smoothed = false
    this._fpsText.autoRound = true
    this._fpsText.fixedToCamera = true
  }

  fontsUnloaded() {
    console.log('GameState: fontsUnloaded') // eslint-disable-line no-console
    this._fpsText = null
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

    if (this._fpsText) {
      const fps = String(game.time.fps)
      this._fpsText.text = fps.length < 2 ? `0${fps}` : fps
    }
  }

  /** @return {void} */
  resize() {
    const scale = window.innerHeight / this._scene.height()
    const nativeWidth = Math.ceil(window.innerWidth / scale)
    const nativeHeight = Math.ceil(this._scene.height())

    // eslint-disable-next-line no-console
    console.log(`GameState: resize scale=${scale} `
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