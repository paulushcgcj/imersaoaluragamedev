let imagemCenario;
let imagemPersonagem;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  console.log('Preloaded two images',imagemCenario,imagemPersonagem);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(imagemCenario);
  image(imagemPersonagem, 0, 0);
}