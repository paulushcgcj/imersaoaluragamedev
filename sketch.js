let definitions = {
  character: {
    sheet: 'images/character/run.png',
    height: 4,
    width: 4,
    proportion: 2
  },
  enemy: {
    sheet: 'images/enemies/droplet.png',
    height: 7,
    width: 4,
    proportion: 2
  },
  map: {
    sheet: 'images/scenes/forest.png',
    bgMusic: 'sounds/gamesound',
    jumpSound: 'sounds/rakewoosh',
    gameOverSound: 'sounds/ahhhh'
  }
};

let sceneImage;
let characterSpriteSheet;
let enemySpriteSheet;
let scene;
let character;
let enemy;
let bgSound;
let jumpSound;
let gameOverSound;

function preload() {
  soundFormats('mp3', 'ogg');
  bgSound = loadSound(definitions.map.bgMusic);
  jumpSound = loadSound(definitions.map.jumpSound);
  gameOverSound = loadSound(definitions.map.gameOverSound);
  sceneImage = loadImage(definitions.map.sheet);
  characterSpriteSheet = loadImage(definitions.character.sheet);
  enemySpriteSheet = loadImage(definitions.enemy.sheet);
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
    0,
    1
  );

  enemy = new Enemy(
    enemySpriteSheet,
    definitions.enemy.height,
    definitions.enemy.width,
    definitions.enemy.proportion,
    width,
    1
  );

  //frameRate(40);
  //bgSound.loop();
}

function keyPressed(){
  if(key == 'ArrowUp'){
    character.jump();
    jumpSound.play();
  }
}

function draw() {
  scene.paralax();
  character.draw();
  enemy.draw();


  enemy.move();
  character.applyGravity();

  if(character.isColliding(enemy)){
    console.log('BANG IS OVA');
    gameOverSound.play();
    noLoop();
  }
}
