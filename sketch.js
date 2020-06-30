function preload() {
  soundFormats('mp3', 'ogg');
  scene.preLoad();

  setGameAudio();
  setGameSprites();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  getAudioContext().suspend();

  scene.setup();

  if (hasSound)
    bgSound.loop();
}

function keyPressed() {
  userStartAudio();
  scene.sceneInputs();
}

function draw() {

  scene.draw();

  //if (character.isColliding(theEnemy)) {
    //gameManager.gameOver(theEnemy, character, gameOverSound, gameOverImage);
  //}


}

function setGameAudio() {
  
  bgSound = loadSound(definitions.map.bgMusic);  
  gameOverSound = loadSound(definitions.gameOverSound);
}

function setGameSprites() {  
  gameOverImage = loadImage(definitions.gameOver);
}