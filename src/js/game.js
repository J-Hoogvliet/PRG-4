import "../css/style.css";
import {
  Actor,
  Color,
  DisplayMode,
  Engine,
  Timer,
  Scene,
  Vector,
} from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Label, FontUnit, Font } from "excalibur";
import { Plane } from "./player.js";
import { Background } from "./background.js";
import { Enemy } from "./opponent.js";
import { Bullet } from "./Bullet.js";
import { UI } from "./UI.js";
import { EndGame } from "./endOfGame.js";
import { StartScreen } from "./startScreen.js";
import { Level } from "./level.js";

export class Game extends Engine {
  score = 0;
  ui;
  endgame;
  level;

  constructor() {
    super({ width: 1440, height: 900, displayMode: DisplayMode.FitScreen });
    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {
    const startScene = new StartScreen();
    this.add("startScene", startScene);
    this.goToScene("startScene");

    const level = new Level();
    this.add("level", level);

    const endgame = new EndGame();
    this.add("endgame", endgame);
  }
}
new Game();
