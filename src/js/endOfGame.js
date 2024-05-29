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
  onActivate(engine) {
    const land = new EndBackground();
    this.add(land);
  }
}
