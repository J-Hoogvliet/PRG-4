import "../css/style.css";
import {
  Actor,
  Color,
  DisplayMode,
  Engine,
  Scene,
  Timer,
  Vector,
} from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { EndBackground } from "./endGameBackground.js";

export class EndGame extends Scene {
  constructor() {
    super();
  }
  onInitialize(engine) {
    const land = new EndBackground();
    this.add(land);

    const text = new engine.Text({
      text: "Press Enter",
      font: new engine.Font({
        family: "Arial",
        size: 24,
        color: Color.White,
      }),
    });
    this.add(text);
  }
}
