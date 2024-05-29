import { Actor, CollisionType, Color, Engine, Keys, Vector } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Bullet } from "./Bullet.js";
import { Enemy } from "./opponent.js";

export class Plane extends Actor {
  constructor(x, y) {
    super({
      pos: new Vector(x, y),
      width: Resources.Plane.width * 0.5,
      height: Resources.Plane.height * 0.5,
      collisionType: CollisionType.Active,
    });
    this.afterburner;
    this.hp = 5;
    this.isImune = false;
  }
  onInitialize() {
    const sprite = Resources.Plane.toSprite();
    this.graphics.use(sprite);

    this.vel = new Vector(0, 0);
    this.scale = new Vector(0.15, 0.15);
    this.on("collisionstart", (event) => this.hitSomething(event));

    this.afterburner = new Actor();
    this.afterburner.graphics.use(Resources.JetStream.toSprite());
    this.afterburner.pos = new Vector(10, 430);
    this.afterburner.scale = new Vector(10, 20);
    this.addChild(this.afterburner);
  }

  hitSomething(event) {
    if (event.other instanceof Enemy && !this.isImune) {
      this.getDamage(1);
    }
  }

  getDamage(amount) {
    if (!this.isImune) {
      this.hp -= amount;
      console.log(this.hp);
      // @ts-ignore
      this.scene?.healthCare(this.hp);
      this.isImune = true;
      this.afterburner?.actions.blink(40, 40, 25);
      this.actions.blink(40, 40, 25).callMethod(() => {
        this.isImune = false;
      });
    }
    if (this.hp <= 0) {
      this.kill();
    }
  }

  logSpeed() {
    console.log(`Mijn snelheid is ${this.vel.x}`);
  }

  logPosition() {
    console.log(`Mijn positie is ${this.pos.x}, ${this.pos.y}`);
  }

  onPostUpdate(engine) {
    this.rotation = 0;
    let xspeed = 0;
    let yspeed = 0;
    this.afterburner?.graphics.use(Resources.JetStream.toSprite());

    if (
      engine.input.keyboard.isHeld(Keys.W) ||
      engine.input.keyboard.isHeld(Keys.Up)
    ) {
      yspeed = -500;
    }

    if (
      engine.input.keyboard.isHeld(Keys.S) ||
      engine.input.keyboard.isHeld(Keys.Down)
    ) {
      yspeed = 500;
      this.afterburner?.graphics.use(Resources.JetBackStream.toSprite());
    }

    if (
      engine.input.keyboard.isHeld(Keys.D) ||
      engine.input.keyboard.isHeld(Keys.Right)
    ) {
      xspeed = 500;
      this.rotation = 6.8;
    }

    if (
      engine.input.keyboard.isHeld(Keys.A) ||
      engine.input.keyboard.isHeld(Keys.Left)
    ) {
      xspeed = -500;
      this.rotation = 6;
    }

    this.vel = new Vector(xspeed, yspeed);

    if (engine.input.keyboard.wasPressed(Keys.Space)) {
      console.log("shoot!");
      const bullet = new Bullet(0.1, 0.1, -2000);
      bullet.pos = new Vector(this.pos.x, this.pos.y - 100);
      engine.add(bullet);
    }

    const leftBoundary = this.width / 2;
    const rightBoundary = engine.drawWidth - this.width / 2;
    const topBoundary = this.height / 2;
    const bottomBoundary = engine.drawHeight - this.height / 2;

    if (this.pos.x < leftBoundary) {
      this.pos.x = leftBoundary;
    }

    if (this.pos.x > rightBoundary) {
      this.pos.x = rightBoundary;
    }

    if (this.pos.y < topBoundary) {
      this.pos.y = topBoundary;
    }

    if (this.pos.y > bottomBoundary) {
      this.pos.y = bottomBoundary;
    }
  }
}
