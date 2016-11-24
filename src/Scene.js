/// <reference path="Phaser.d.ts" />
import Kbd from './Kbd'

/** @private {?Phaser.Tilemap} _map
    @private {!Array.<Phaser.TilemapLayer>} _layers
    @private {!Kbd} _kbd */
export default class Scene {
  constructor() {
    this._map = null
    this._layers = []
    this._kbd = new Kbd()
  }

  /** @return {?number} */
  width() { // eslint-disable-line class-methods-use-this
    return 128 // eslint-disable-line no-magic-numbers
    // todo: return this._map && this._map.widthInPixels
  }

  /** @return {?number} */
  height() { // eslint-disable-line class-methods-use-this
    return 32 // eslint-disable-line no-magic-numbers
    // todo: return this._map && this._map.heightInPixels
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  preload(game) { // eslint-disable-line class-methods-use-this
    game.stage.backgroundColor = '#f4f4ed'

    const tileSize = 16
    game.load.tilemap('lvl', '/asset/lvl.json', null, Phaser.Tilemap.TILED_JSON)
    game.load.spritesheet('tileset', '/asset/tileset.png', tileSize, tileSize)
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  create(game) {
    this._map = game.add.tilemap('lvl')
    this._map.addTilesetImage('tileset')

    for (const layer of this._map.layers) {
      const made = this._map.createLayer(layer.name)
      made.resizeWorld()
      this._layers.push(made)
    }

    const chars = game.add.group()
    // for (const key of Object.keys(this._map.objects)) {
    //   console.log(`key=${key}`)
    // }
    const tileIndex = 16
    this._map.createFromObjects('char', 'player', 'tileset', tileIndex, true,
      false, chars)

    chars.enableBody = true
    this._player = chars.getChildAt(0)

    const center = .5
    this._player.anchor.setTo(center, 0)
    game.physics.arcade.enable(this._player)
    this._player.body.collideWorldBounds = true
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

  /** @return {void} */
  resize() {
    this._layers.forEach(layer => layer.resize(this.width(), this.height()))
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  render(game) {
    game.debug.body(this._player)
  }
}