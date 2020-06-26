let definitions = {
  character: {
    sheet: 'images/character/run.png',
    height: 270,
    width: 220,
    proportion: 2
  },
  map: {
    sheet: 'images/scenes/forest.png',
    bgMusic: 'sounds/gamesound'
  }
};

let sceneImage;
let characterSpriteSheet;
let scene;
let character;
let bgSound;

function preload() {
  soundFormats('mp3', 'ogg');
  bgSound = loadSound(definitions.map.bgMusic);
  sceneImage = loadImage(definitions.map.sheet);
  characterSpriteSheet = loadImage(definitions.character.sheet);
}

function mousePressed() {
  userStartAudio();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  getAudioContext().suspend();

  scene = new Scene(sceneImage, 3);

  character = new Character(
    characterSpriteSheet,
    definitions.character.height,
    definitions.character.width,
    definitions.character.proportion,
    0
  );

  //bgSound.loop();
}

function draw() {
  scene.paralax();
  character.draw();

  character.move();
}
