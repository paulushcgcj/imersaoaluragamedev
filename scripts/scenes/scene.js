class Scene {
  constructor(sceneDefinitions) {
    this.image = null;
    this.bgSound = null;

    this.xPosition = 0;

    this.sceneSpriteSheet = sceneDefinitions.sheet;
    this.sceneSound = sceneDefinitions.bgMusic;
  }

  setup() {
    if (this.bgSound){
      this.bgSound.setVolume(.3);
      this.bgSound.loop();
    }
  }

  preLoad() {
    if (this.sceneSpriteSheet)
      this.image = loadImage(this.sceneSpriteSheet);
    if (this.sceneSound)
      this.bgSound = loadSound(this.sceneSound);
  }

  draw() {
    if (this.image)
      image(this.image, this.xPosition, 0, width, height);
  }

  sceneInputs() {

  }

}