export default class Scene {
  constructor() {
    this._width = 128
    this._height = 32
  }

  /** @return {number} */
  height() {
    return this._height
  }

  /** @return {number} */
  width() {
    return this._width
  }

  /** @arg {Phaser.Game} game
      @return {void} */
  preload(game) { // eslint-disable-line class-methods-use-this
    game.load.image('bg', 'bg.png')
    game.load.image('player', 'player.png')
  }

  /** @arg {Phaser.Game} game
      @return {void} */
  create(game) {
    this._bg = game.add.sprite(0, 0, 'bg')
    this._player = game.add.sprite(this.width() / 2, this.height() / 2,
      'player')
    game.physics.arcade.enable(this._player)
    game.camera.follow(this._player)
  }

  /** @arg {Phaser.Game} game
      @return {void} */
  update(game) {
    this._player.body.velocity.x = 0
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this._player.body.velocity.x -= 75
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this._player.body.velocity.x += 75
    }
  }
}