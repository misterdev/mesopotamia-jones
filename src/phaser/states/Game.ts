/* globals __DEV__ */
declare const __DEV__: boolean
import * as Phaser from 'phaser'
// import Mushroom from '../sprites/Mushroom'
import Dude from '../sprites/Dude'

export default class Game extends Phaser.State {

  // mushroom: Mushroom
  player: Phaser.Sprite

  init () {}
  preload () {}

  create () {
    // const bannerText = 'Phaser + ES6 + Webpack + Typescript'
    // let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, '')
    // banner.font = 'Bangers'
    // banner.padding.set(10, 16)
    // banner.fontSize = 40
    // banner.fill = '#77BFA3'
    // banner.smoothed = false
    // banner.anchor.setTo(0.5)

    this.player = this.game.add.existing(new Dude({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      key: 'dude'
    }))

  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.player, 32, 32)
    }
  }
}