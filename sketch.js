function preload() {
  soundFormats('mp3','ogg');
  scene.preLoad();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  getAudioContext().suspend();

  scene.setup();
}

function keyPressed() {
  userStartAudio();
  scene.sceneInputs();
}

function draw() {
  scene.draw();
}
