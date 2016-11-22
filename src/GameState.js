import Scene from './Scene' // eslint-disable-line no-unused-vars

/** @private {!Scene} _scene
    @private {?HTMLCanvasElement} _canvas front canvas */
export default class GameState extends Phaser.State {
  /** @param {!Phaser.Game} game
      @param {!Scene} scene */
  constructor(game, scene) {
    super(game)
    this._scene = scene
    this._canvas = null
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  preload(game) {
    super.preload(game)

    game.canvas.style.display = 'none'
    this._canvas = Phaser.Canvas.create()
    Phaser.Canvas.addToDOM(this._canvas)

    this._scene.preload(game)

    this.resize()
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
    this._scene.render(game)

    this._canvas.getContext('2d').drawImage(game.canvas, 0, 0, game.width,
      game.height, 0, 0, window.innerWidth, window.innerHeight)
  }

  /** @return {void} */
  resize() {
    const scale = window.innerHeight / this._scene.height()
    console.log(`resize scale=${scale}`) // eslint-disable-line no-console

    this.game.scale.setGameSize(Math.ceil(window.innerWidth / scale),
      Math.ceil(this._scene.height()))
    this.game.camera.bounds = new Phaser.Rectangle(0, 0, this._scene.width(),
      this._scene.height())

    this._canvas.width = window.innerWidth
    this._canvas.height = window.innerHeight

    Phaser.Canvas.setSmoothingEnabled(this._canvas.getContext('2d'), false)
  }
}