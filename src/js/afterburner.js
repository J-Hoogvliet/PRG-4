import { Actor, Color, Engine, Keys, Vector } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Plane } from "./player.js";

export class Afterburner extends Actor {
  onInitialize(engine) {
    this.graphics.use(Resources.JetStream.toSprite());
    this.pos = new Vector(10, 430);
    this.scale = new Vector(10, 20);
  }
}
