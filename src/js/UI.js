import {
  Line,
  Circle,
  Rectangle,
  Polygon,
  Color,
  Actor,
  ScreenElement,
  Vector,
  Label,
} from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Game } from "./game.js";
import { EndGame } from "./endOfGame.js";

export class UI extends ScreenElement {
  healthbar;
  maxAmmount = 1;
  scoreText;
  score = 0;

  onInitialize(engine) {
    let barbackground = new Actor({
      x: 1200,
      y: 40,
      color: Color.fromRGB(255, 255, 255, 0.4),
      width: 200,
      height: 20,
      anchor: Vector.Zero,
    });
    this.addChild(barbackground);

    this.healthbar = new Actor({
      x: 1200,
      y: 40,
      color: Color.Green,
      width: 200,
      height: 20,
      anchor: Vector.Zero,
    });
    this.addChild(this.healthbar);

    this.scoreText = new Label({
      text: `Score: ${this.score} `,
      pos: new Vector(1280, 10),
      font: Resources.NewFont.toFont({
        size: 20,
        color: Color.White,
      }),
    });
    this.addChild(this.scoreText);

    const newScene = new EndGame();
    // @ts-ignore
    this.currentscene?.add("endgame", newScene);
  }

  reduceHealth(hp, playerHp) {
    this.healthbar.scale = new Vector(hp / playerHp, 1);
  }

  updateScore(score) {
    this.score += score;
    this.scoreText.text = `Score: ${this.score}`;
    console.log(this.score);
    if (this.score >= 1000) {
      this._engine.goToScene("endgame");
    }
  }
}
