import { Actor, Color, Engine, Sprite, Vector } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";

export class Background extends Actor {
  sprite;

  onInitialize(engine) {
    this.sprite = new Sprite({
      image: Resources.Background,
      sourceView: {
        x: 0,
        y: 0,
        width: engine.drawWidth,
        height: engine.drawHeight,
      },
    });
    this.anchor = Vector.Zero;
    this.graphics.use(this.sprite);
    this.scale = new Vector(1440 / 900, 900 / 440);
  }

  onPostUpdate(engine, delta) {
    this.sprite.sourceView.y += -0.2 * delta;
  }
}
