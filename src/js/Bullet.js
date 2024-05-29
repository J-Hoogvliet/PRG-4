import { Actor, Color, Engine, Keys, Vector } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Enemy } from "./opponent.js";
import { Game } from "./game.js";
import { Plane } from "./player.js";

export class Bullet extends Actor {
  constructor(scaleX, scaleY, speed) {
    super({
      vel: new Vector(0, speed),
      scale: new Vector(scaleX, scaleY),
      width: Resources.Bullet.width * 0.05,
      height: Resources.Bullet.height * 0.8,
    });
  }
  onInitialize() {
    const sprite = Resources.Bullet.toSprite();
    this.graphics.use(sprite);
    sprite.rotation = 4.7;
    this.on("collisionstart", (event) => this.hitOpponent(event));
    this.on("collisionstart", (event) => this.hitPlayer(event));
  }
  hitOpponent(event) {
    if (event.other instanceof Enemy) {
      event.other.kill();
      // @ts-ignore
      this.scene?.engine.addPoints(100);
    }
  }
  hitPlayer(event) {
    if (event.other instanceof Plane) {
      this.kill();
    }
  }
}
