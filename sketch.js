let imagemCenario;

function preLoad(){
  imagemCenario = loadImage('imagens/cenario/floresta.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(imagemCenario);
}