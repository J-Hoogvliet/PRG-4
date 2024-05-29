import { Actor, Color, Engine, Keys, Random, Timer, Vector } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Bullet } from "./Bullet.js";

export class Enemy extends Actor {
  constructor() {
    super({
      width: Resources.Opponent.width * 0.5,
      height: Resources.Opponent.height * 0.5,
    });
  }
  onInitialize(engine) {
    const xSpawn = Math.random() * 1400;
    const sprite = Resources.Opponent.toSprite();
    this.graphics.use(sprite);
    this.pos = new Vector(xSpawn, 50);
    this.vel = new Vector(0, 100);
    this.scale = new Vector(0.15, 0.15);
    const timer = new Timer({
      fcn: () => this.createBullet(this.pos.x, this.pos.y, engine),
      repeats: true,
      interval: 800,
    });
    engine.add(timer);
    timer.start();
  }

  createBullet(posX, posY, engine) {
    const bulletEnemy = new Bullet(0.05, 0.05, 1500);
    bulletEnemy.rotation = 3.16;
    bulletEnemy.pos = new Vector(posX, posY + 50);
    bulletEnemy.color = Color.Green;
    this.scene?.engine.add(bulletEnemy);
  }
}
