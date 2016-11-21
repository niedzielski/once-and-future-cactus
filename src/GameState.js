import Phaser from './Phaser'

export default class GameState extends Phaser.State {
  /** @param {Phaser.Game} game
      @param {Scene} scene */
  constructor(game, scene) {
    super(game)
    this._game = game
    this._scene = scene
  }

  /** @param {Phaser.Game} game
      @return {void} */
  preload(game) {
    super.preload(game)
    game.time.advancedTiming = true
    this._scene.preload(game)

    // don't antialias canvas primitives
    Phaser.Canvas.setImageRenderingCrisp(game.canvas)

    // avoid infinite resize loop
    // https://github.com/photonstorm/phaser/issues/2663
    window.addEventListener('resize', () => this.onWindowResize())

    this.onWindowResize()
  }

  /** @param {Phaser.Game} game
      @return {void} */
  create(game) {
    super.create(game)
    this._scene.create(game)
  }

  /** @param {Phaser.Game} game
      @return {void} */
  update(game) {
    super.update(game)
    this._scene.update(game)
  }

  /** @param {Phaser.Game} game
      @return {void} */
  render(game) {
    super.render(game)
    const x = 0, y = 15
    game.debug.text(game.time.fps, x, y, '#00ff00')
  }

  /** @return {void} */
  onWindowResize() {
    console.log('onWindowResize') // eslint-disable-line no-console
    this._scaleWorldToSceneHeight()
    this._game.scale.setGameSize(window.innerWidth, window.innerHeight)
    this._resizeCameraBounds()
  }

  /** @return {void} */
  _scaleWorldToSceneHeight() {
    const scale = window.innerHeight / this._scene.height()

    // there is no camera zoom
    // http://www.html5gamedevs.com/topic/7150-how-to-zoom-out-from-center-of-gameworld/
    this._game.world.scale.set(scale)
  }

  _resizeCameraBounds() {
    this._game.camera.bounds = new Phaser.Rectangle(0, 0, this._scene.width(),
      this._scene.height())
  }
}