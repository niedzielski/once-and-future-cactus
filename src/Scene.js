// eslint-disable-line max-lines
/// <reference path="Phaser.d.ts" />
import Kbd from './Kbd'

const TILEMAP_KEY = 'lvl'
const TILEMAP_FILENAME = 'static/lvl.json'
const TILESET16_KEY = 'tileset16'
const TILESET16_FILENAME = 'static/tileset.png'
const TILESET16_SIZE = 16
const INCREMENT_X = 80
const INCREMENT_Y = 120
const GRAVITY_Y = 600

/** @private {?Phaser.Tilemap} _map
    @private {!Array.<Phaser.TilemapLayer>} _tileLayers
    @private {!Kbd} _kbd */
export default class Scene {
  constructor() {
    this._map = null
    this._tileLayers = []
    this._kbd = new Kbd()
  }

  /** @return {?number} */
  width() {
    return this._map && this._map.widthInPixels
  }

  /** @return {?number} */
  height() {
    return this._map && this._map.heightInPixels
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  preload(game) { // eslint-disable-line class-methods-use-this
    game.load.tilemap(TILEMAP_KEY, TILEMAP_FILENAME, null,
      Phaser.Tilemap.TILED_JSON)
    game.load.spritesheet(TILESET16_KEY, TILESET16_FILENAME, TILESET16_SIZE,
      TILESET16_SIZE)
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  create(game) {
    game.physics.startSystem(Phaser.Physics.P2JS)
    game.physics.p2.gravity.y = GRAVITY_Y

    this._map = game.add.tilemap(TILEMAP_KEY)
    this._map.addTilesetImage(TILESET16_KEY)

    for (const obj of this._map.layers) {
      const layer = this._map.createLayer(obj.name)
      this._tileLayers.push(layer)
      layer.resizeWorld()
    }

    for (const key of Object.keys(this._map.objects)) {
      const layer = this._map.objects[key]
      for (const obj of layer) {
        this._map.createFromObjects(key, obj.name, TILESET16_KEY, obj.gid - 1)
      }
    }

    this._loadCollisionBodies(game)

    game.camera.follow(this._player, Phaser.Camera.FOLLOW_PLATFORMER)
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  update(game) {
    const velocity = this._player.body.velocity
    velocity.x = 0

    if (this._kbd.up(game)) {
      // consider just equals since that's snappier
      // if (this._player.body.touching.down)
      velocity.y -= INCREMENT_Y
    }
    if (this._kbd.right(game)) {
      this._translatePlayerX(game, false)
    }
    if (this._kbd.down(game)) {
      // if (!this._player.body.touching.down)
      velocity.y += INCREMENT_Y
    }
    if (this._kbd.left(game)) {
      this._translatePlayerX(game, true)
    }
  }

  /** @param {!Phaser.Game} _game
      @return {void} */
  render(_game) { // eslint-disable-line class-methods-use-this
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  resize(game) {
    // todo: is this still needed?
    this._tileLayers.forEach(layer => layer.resize(this.width(), this.height()))
    game.camera.follow(this._player, Phaser.Camera.FOLLOW_PLATFORMER)
  }

  /** @param {!Phaser.Game} game
      @return {void} */
  _loadCollisionBodies(game) {
    for (const child of game.world.children) {
      if (child.name !== 'player') continue // eslint-disable-line no-continue
      this._player = child

      // todo: how to go from name to gid?
      const playerGid = 51
      const collisions = this._findCollisionData(game, playerGid)
      if (!collisions) continue // eslint-disable-line no-continue

      game.physics.p2.enable(child)
      child.body.clearShapes() // clear initial tile collision shape
      child.body.debug = true

      for (const collision of collisions) {
        const polyline = this._polylineToArray(collision, collision.polyline)

        // must be clockwise, must be symmetrical or never flip
        child.body.loadPolygon(null, [{shape: polyline}])
      }
      // child.body.fixedRotation = true
    }
  }

  /** @param {!Phaser.Point} origin
    * @param {!Array.<Object>} polyline
    * @return {!Array.<number>} */
  // eslint-disable-next-line class-methods-use-this
  _polylineToArray(origin, polyline) {
    const arr = []
    for (let p = 0; p < polyline.length; p++) {
      arr.push(polyline[p].x + origin.x)
      arr.push(polyline[p].y + origin.y)
    }
    return arr
  }

  /** @param {!Phaser.Game} game
      @param {!number} gid
      @return {?Object} */
  _findCollisionData(game, gid) { // eslint-disable-line class-methods-use-this
    const lvl = game.cache.getTilemapData(TILEMAP_KEY)
    for (const tileset of lvl.data.tilesets) {
      for (const tileGid of Object.keys(tileset.tiles)) {
        if (tileGid === `${gid}`) {
          const tile = tileset.tiles[gid]
          return tile.objectgroup.objects
        }
      }
    }
    return null
  }

  /** @param {!Phaser.Game} game
      @param {?boolean} left
      @return {void} */
  _translatePlayerX(game, left) {
    const duration = 200
    const sign = left ? -1 : 1
    this._player.body.velocity.x = sign * INCREMENT_X
    game.add.tween(this._player.scale)
      .to({x: sign}, duration, Phaser.Easing.Bounce.Out, true)
  }
}