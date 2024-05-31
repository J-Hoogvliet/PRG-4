import {
  ImageSource,
  Sound,
  Resource,
  Loader,
  ImageWrapping,
  FontSource,
} from "excalibur";
const Resources = {
  Plane: new ImageSource(
    "images/8_bit_snowspeeder__basic_clean__by_xerostartg_de4zgvr.png"
  ),
  Background: new ImageSource("images/star-wars-seo.png", {
    wrapping: ImageWrapping.Repeat,
  }),
  StartBackground: new ImageSource("images/star-wars-seo.png"),
  PlaneBroken: new ImageSource(
    "images/8_bit_snowspeeder__battle_scuffed__by_xerostartg_de4zh42.png"
  ),
  Bullet: new ImageSource(
    "images/footagecrate-looping-blaster-bolt-basic-prev-full.png"
  ),
  Opponent: new ImageSource("images/pixel-art-1671176784.png"),
  JetStream: new ImageSource("images/pixil-frame-0.png"),
  JetBackStream: new ImageSource("images/Backwards-burner.png"),
  NewFont: new FontSource("fonts/Starjedi.ttf", "Starjedi"),
  EndBackground: new ImageSource("images/Endbackground.png"),
};
const ResourceLoader = new Loader([
  Resources.Plane,
  Resources.Background,
  Resources.StartBackground,
  Resources.PlaneBroken,
  Resources.Bullet,
  Resources.Opponent,
  Resources.JetStream,
  Resources.JetBackStream,
  Resources.NewFont,
  Resources.EndBackground,
]);

export { Resources, ResourceLoader };
