import Kbd from './Kbd'

/** @private {!number} _width px
    @private {!number} _height px */
export default class Scene {
  constructor() {
    this._width = 128
    this._height = 32
    this._kbd = new Kbd()
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
    const center = .5
    this._player.anchor.setTo(center, 0)
    game.physics.arcade.enable(this._player)
    game.camera.follow(this._player, Phaser.Camera.FOLLOW_PLATFORMER)

    const maxVelocityPxPerSec = 50
    this._player.body.maxVelocity.set(maxVelocityPxPerSec)
    const dragPxPerSec = 300
    this._player.body.drag.set(dragPxPerSec)
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  update(game) {
    const
      velocity = this._player.body.velocity,
      increment = 10
    if (this._kbd.up(game)) {
      velocity.y -= increment
    }
    if (this._kbd.right(game)) {
      velocity.x += increment
    }
    if (this._kbd.down(game)) {
      velocity.y += increment
    }
    if (this._kbd.left(game)) {
      velocity.x -= increment
    }
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  render(game) {
    game.debug.body(this._player)
  }
}