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

export class EndGame extends Scene {
  onActivate(engine) {
    console.log("kutSpel");
  }
}
