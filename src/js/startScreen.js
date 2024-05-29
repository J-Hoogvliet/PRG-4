import "../css/style.css";
import {
  Actor,
  Color,
  DisplayMode,
  Engine,
  Timer,
  Scene,
  Vector,
  Keys,
  CollisionType,
} from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Game } from "./game.js";
import { EndGame } from "./endOfGame.js";
import { StartBackground } from "./startBackground.js";
import { Level } from "./level.js";

export class StartScreen extends Scene {
  constructor() {
    super();
  }

  onInitialize(engine) {
    // Initialize start screen-specific assets or actors here

    const land = new StartBackground();
    this.add(land);

    const starScene = new Level();
    this.engine.add("starScene", starScene);
  }
  onPreUpdate(engine) {
    if (engine.input.keyboard.wasPressed(Keys.Enter)) {
      this.engine.goToScene("level");
    }
  }
}
