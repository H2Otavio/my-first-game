function setup() {
  createCanvas(windowWidth, windowHeight);
  
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
  jogo.setup();
  
  somDoJogo.loop();
  somDoJogo.volume(0.3);
  frameRate(40);
  
  cenas = {
    jogo,
    telaInicial
  }
}

function keyPressed(){
  jogo.keyPressed(key);
  
  inimigos.forEach(inimigo => {
    if(personagem.estaColidindo(inimigo)){
      if(key === ' '){
        window.location.reload();
      }
    }
  })
}

function draw() {
  cenas[cenaAtual].draw();
}

