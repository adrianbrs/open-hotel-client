import * as PIXI from 'pixi.js-legacy';
import { Game } from "../../Game"

export class FloorSelection extends PIXI.Sprite {
  constructor(texture?: PIXI.Texture) {
    super(texture || Game.current.imager.room.generateFloorSelectionTexture())
  }
}