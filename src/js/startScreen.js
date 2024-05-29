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

export class StartScreen extends Scene {
  constructor() {
    super();
  }

  onInitialize(engine) {
    // Initialize start screen-specific assets or actors here

    const land = new StartBackground();
    this.add(land);
    // Add a button to start the game
  }
  onPreUpdate(engine) {
    const startButton = new Actor({
      pos: new Vector(200, 400),
      width: 200,
      height: 50,
      color: Color.Red,
      // @ts-ignore
      text: "Start Button",
      collisionType: CollisionType.Active,
    });

    // Add a click event listener to the button
    if (
      engine.input.keyboard.isHeld(Keys.S) ||
      engine.input.keyboard.isHeld(Keys.Down)
    ) {
      console.log("kaas");
    }
    startButton.on("click", () => {
      this.clickedButton();
    });

    // Add the button to the scene
    this.add(startButton);
  }
  clickedButton() {
    console.log("kut ding");
  }
}
