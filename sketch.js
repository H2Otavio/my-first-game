let imagemCenario;
let imagemPersonagem;
let imagemInimigo;

let cenario;
let somDoJogo;
let personagem;
let inimigo; 

const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 416],
  [104, 416],
  [208, 416],
  [312, 416],
  [0, 520],
  [104, 520],
  [208, 520],
  [312, 520],
  [0, 624],
  [104, 624],
  [208, 624],
  [312, 624],
]
const matrizPersonagem = [
      [0, 0],
      [220, 0],
      [440, 0],
      [660, 0],
      [0, 270],
      [220, 270],
      [440, 270],
      [660, 270],
      [0, 540],
      [220, 540],
      [440, 540],
      [660, 540],
      [0, 810],
      [220, 810],
      [440, 810],
      [660, 810]
      ]

function preload(){
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemGameOver = loadImage('imagens/cenario/tobecontinue.png');
  somDoPulo = loadSound('sons/Yoda Fon.mp3');
  somGameOver = createAudio('sons/roundabout.mp3');
  somDoJogo = createAudio('sons/pneuQueimado.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 2);
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 110, 135, 220, 270);
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width -52, 52, 52, 104, 104);
  gameover = new GameOver(imagemGameOver);
  somDoJogo.loop();
  somDoJogo.volume(0.3);
  frameRate(40);
}

function keyPressed(){
  if(key == 'ArrowUp'){
    personagem.pula();
  }
  
  if(personagem.estaColidindo(inimigo)){
    if(key === ' '){
      window.location.reload();
    }
  }
}

function draw() {
  cenario.exibe();
  cenario.move();
  
  personagem.exibe();
  personagem.aplicaGravidade();
  
  inimigo.exibe();
  inimigo.move();
  
  if(personagem.estaColidindo(inimigo)){
    console.log('Capotou o corsa');
    noLoop();
    gameover.exibe();
    somDoJogo.stop();
    somGameOver.play();
    somGameOver.volume(0.3)
  }
}

