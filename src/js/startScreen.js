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
import { startUI } from "./startUI.js";

export class StartScreen extends Scene {
  constructor() {
    super();
  }

  onInitialize(engine) {
    const land = new StartBackground();
    this.add(land);

    const starUI = new startUI();
    this.add(starUI);

    const starScene = new Level();
    this.engine.add("starScene", starScene);
  }
  onPreUpdate(engine) {
    if (engine.input.keyboard.wasPressed(Keys.Enter)) {
      this.engine.goToScene("level");
    }
  }
}
