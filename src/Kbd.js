class Key {
  /** @param {!Array.<number>} keys */
  constructor(...keys) {
    this._keys = keys
  }

  /** @param {!Phaser.Game} game
      @return {!boolean} */
  pressed(game) {
    for (const key of this._keys) {
      if (game.input.keyboard.isDown(key)) {
        return true
      }
    }
    return false
  }
}

/** @private {!Key} _up
    @private {!Key} _right
    @private {!Key} _down
    @private {!Key} _left */
export default class Kbd {
  constructor() {
    this._up = new Key(Phaser.Keyboard.UP, Phaser.Keyboard.W)
    this._right = new Key(Phaser.Keyboard.RIGHT, Phaser.Keyboard.D)
    this._down = new Key(Phaser.Keyboard.DOWN, Phaser.Keyboard.S)
    this._left = new Key(Phaser.Keyboard.LEFT, Phaser.Keyboard.A)
  }

  /** @param {!Phaser.Game} game
      @return {boolean} */
  up(game) {
    return this._up.pressed(game)
  }

  /** @param {!Phaser.Game} game
      @return {boolean} */
  right(game) {
    return this._right.pressed(game)
  }

  /** @param {!Phaser.Game} game
      @return {boolean} */
  down(game) {
    return this._down.pressed(game)
  }

  /** @param {!Phaser.Game} game
      @return {boolean} */
  left(game) {
    return this._left.pressed(game)
  }
}