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
import { StartScreen } from "./startScreen.js";

export class startUI extends ScreenElement {
  startText;
  onInitialize(engine) {
    this.startText = new Label({
      text: "Press Enter",
      pos: new Vector(540, 760),
      font: Resources.NewFont.toFont({
        size: 50,
        color: Color.White,
      }),
    });
    this.addChild(this.startText);
  }
}
