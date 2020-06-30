class Scene {
  constructor(sceneSpriteSheet) {
    this.image = null;
    this.sceneSpriteSheet = sceneSpriteSheet;
    this.xPosition = 0;
  }

  preLoad() {
    
    this.image = loadImage(this.sceneSpriteSheet);
  }

  draw() { 
    image(this.image, this.xPosition, 0, width, height);
  }

  sceneInputs(){

  }

}