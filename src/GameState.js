import Phaser from './Phaser'
import Scene from './Scene' // eslint-disable-line no-unused-vars

/** @private {!Phaser.Game} _game
    @private {!Scene} _scene */
export default class GameState extends Phaser.State {
  /** @param {!Phaser.Game} game
      @param {!Scene} scene */
  constructor(game, scene) {
    super(game)
    this._game = game
    this._scene = scene
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  preload(game) {
    super.preload(game)
    game.time.advancedTiming = true

    this._scene.preload(game)

    this.resize()

    // avoid infinite resize loop
    // https://github.com/photonstorm/phaser/issues/2663
    window.addEventListener('resize', () => this.resize())
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  create(game) {
    super.create(game)
    this._scene.create(game)

    // eslint-disable-next-line no-console
    console.log(`scene: ${this._scene.width()}x${this._scene.height()}`)
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
    const x = 0, y = 15
    game.debug.text(game.time.fps, x, y, '#0f0')
    this._scene.render(game)
  }

  /** @return {void} */
  resize() {
    console.log('resize') // eslint-disable-line no-console
    this._scaleCameraToSceneHeight()
    this._game.scale.setGameSize(window.innerWidth, window.innerHeight)
    this._resizeCameraBounds()
  }

  /** @return {void} */
  _scaleCameraToSceneHeight() {
    const scale = window.innerHeight / this._scene.height()
    this._game.camera.scale.set(scale, scale)
  }

  /** @return {void} */
  _resizeCameraBounds() {
    this._game.camera.bounds = new Phaser.Rectangle(0, 0, this._scene.width(),
      this._scene.height())
  }
}