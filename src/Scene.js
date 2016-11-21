import Phaser from './Phaser'

/** @private {!number} _width px
    @private {!number} _height px */
export default class Scene {
  constructor() {
    this._width = 128
    this._height = 32
  }

  /** @return {!number} */
  height() {
    return this._height
  }

  /** @return {!number} */
  width() {
    return this._width
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  preload(game) { // eslint-disable-line class-methods-use-this
    game.stage.backgroundColor = '#0f0'
    game.load.image('bg', '/asset/bg.png')
    game.load.image('player', '/asset/player.png')
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  create(game) {
    this._bg = game.add.sprite(0, 0, 'bg')
    this._player = game.add.sprite(this.width() / 2, this.height() / 2,
      'player')
    game.physics.arcade.enable(this._player)
    const lerp = .1
    game.camera.follow(this._player, Phaser.Camera.FOLLOW_PLATFORMER, lerp,
      lerp)

    const maxVelocityPxPerSec = 50
    this._player.body.maxVelocity.set(maxVelocityPxPerSec)
    const dragPxPerSec = 300
    this._player.body.drag.set(dragPxPerSec)
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  update(game) {
    const
      kbd = game.input.keyboard,
      velocity = this._player.body.velocity,
      increment = 10
    if (kbd.isDown(Phaser.Keyboard.LEFT)) {
      velocity.x -= increment
    }
    if (kbd.isDown(Phaser.Keyboard.RIGHT)) {
      velocity.x += increment
    }
    if (kbd.isDown(Phaser.Keyboard.UP)) {
      velocity.y -= increment
    }
    if (kbd.isDown(Phaser.Keyboard.DOWN)) {
      velocity.y += increment
    }
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  render(game) {
    const x = 32, y = 32
    game.debug.bodyInfo(this._player, x, y)
    game.debug.body(this._player)
  }
}