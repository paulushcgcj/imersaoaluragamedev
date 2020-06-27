let definitions = {
  character: {
    sheet: 'images/character/player-run.png',
    spriteFramesHeight: 1,
    spriteFramesWidth: 6,
    spriteFramesProportion: 5,
    frameSkip: 3,
    name: 'Hipsta'
  },
  enemy: {
    sheet: 'images/enemies/oposum.png',
    spriteFramesHeight: 1,
    spriteFramesWidth: 6,
    spriteFramesProportion: 3,
    moveSpeed: 5,
    frameSkip: 7,
    name: 'Jr'
  },
  enemy2: {
    sheet: 'images/enemies/droplet.png',
    spriteFramesHeight: 7,
    spriteFramesWidth: 4,
    spriteFramesProportion: 1,
    moveSpeed: 2.5,
    frameSkip: 1,
    name: 'Poppa'
  },
  eagle: {
    sheet: 'images/enemies/eagle-attack.png',
    spriteFramesHeight: 1,
    spriteFramesWidth: 4,
    spriteFramesProportion: 3,
    moveSpeed: 7,
    frameSkip: 4,
    name: 'Frank'
  },
  map: {
    sheet: 'images/scenes/forest.png',
    bgMusic: 'sounds/gamesound',
    groundHeight: 30
  },
  jumpSound: 'sounds/rakewoosh',
  gameOverSound: 'sounds/ahhhh',
  gameOver: 'images/assets/game-over.png'
};

let sceneImage;
let gameOverImage;
let scene;
let gameManager;

let character;
let characterSpriteSheet;

let enemySpriteSheet;
let enemy2SpriteSheet;
let eagleSpriteSheet;

let bgSound;
let jumpSound;
let gameOverSound;

const enemies = [];

const hasSound = false;

function preload() {
  setGameAudio();
  setGameSprites();
}

function mousePressed() {
  userStartAudio();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  getAudioContext().suspend();

  gameManager = new GameManager();

  //Create the stage
  scene = new Scene(sceneImage, 3);

  character = new Character(characterSpriteSheet, definitions.character, 0, definitions.map.groundHeight);

  enemies.push(new Enemy(enemySpriteSheet, definitions.enemy, width, definitions.map.groundHeight));
  enemies.push(new Enemy(enemy2SpriteSheet, definitions.enemy2, width - 155, definitions.map.groundHeight));
  enemies.push(new Enemy(eagleSpriteSheet, definitions.eagle, width, 175));

  console.log(enemies.length, enemies);
  if (hasSound)
    bgSound.loop();
}

function keyPressed() {
  userStartAudio();
  if (key == 'ArrowUp') {
    character.jump();
    if (hasSound)
      jumpSound.play();
  }
}

function draw() {

  scene.paralax();
  gameManager.draw();
  gameManager.addPoints();

  character.debug();  
  character.draw();

  enemies.forEach(theEnemy => {

    theEnemy.debug();
    theEnemy.draw();
    theEnemy.move();
    
    if (theEnemy.isColliding(character)) {

      console.log(theEnemy.spriteDefinition.name,'collided with',character.spriteDefinition.name);

      image(gameOverImage,width/2-200,height/2);
      if (hasSound)
        gameOverSound.play();
      noLoop();
    }
  }
  );

}


function setGameAudio() {
  soundFormats('mp3', 'ogg');
  bgSound = loadSound(definitions.map.bgMusic);
  jumpSound = loadSound(definitions.jumpSound);
  gameOverSound = loadSound(definitions.gameOverSound);
}

function setGameSprites() {

  sceneImage = loadImage(definitions.map.sheet);
  gameOverImage = loadImage(definitions.gameOver);
  
  characterSpriteSheet = loadImage(definitions.character.sheet);
  
  enemySpriteSheet = loadImage(definitions.enemy.sheet);
  enemy2SpriteSheet = loadImage(definitions.enemy2.sheet);
  eagleSpriteSheet = loadImage(definitions.eagle.sheet);
}