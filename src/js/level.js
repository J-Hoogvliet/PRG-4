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

export class Level extends Scene {
  constructor() {
    super();
  }
  score = 0;
  ui;
  endgame;

  addPoints(points) {
    this.ui.updateScore(points);
  }
  healthCare(hp) {
    this.ui.reduceHealth(hp, 5);
    if (hp === 0) {
      this.engine.goToScene("endgame");
    }
  }
  onInitialize(engine) {
    console.log("start de game!");
    const land = new Background();
    this.add(land);
    this.createPlayer();

    const timer = new Timer({
      fcn: () => this.createEnemy(),
      repeats: true,
      interval: 4000,
    });
    this.add(timer);
    timer.start();

    this.ui = new UI();
    this.add(this.ui);

    const newScene = new EndGame();
    this.engine.add("endgame", newScene);
  }

  createPlayer() {
    const plane = new Plane(720, 675);
    this.add(plane);
  }
  createEnemy() {
    const enemy = new Enemy();
    this.add(enemy);
  }
}
