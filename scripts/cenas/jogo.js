class Jogo{
  constructor(){
    this.indice = 0;
    this.mapa = fita.mapa;
  }
  
  setup(){
    cenario = new Cenario(imagemCenario, 2);
    gameover = new GameOver(imagemGameOver);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
  
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width -52, 30, 52, 52, 104, 104, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width -52, 90, 100, 75, 200, 150, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10);
  
    inimigos.push(inimigo);
    inimigos.push(inimigoVoador);
    inimigos.push(inimigoGrande);

  }
  
  draw(){
    cenario.exibe();
    cenario.move();
    
    vida.draw();
    pontuacao.exibe();
    pontuacao.adicionaPontos();

    personagem.exibe();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice] 
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura; 
    
    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();

    if(inimigoVisivel){
      this.indice++;
      inimigo.aparece();
      if(this.indice >= this.mapa.length){
        this.indice = 0; 
      }
    }

    if(personagem.estaColidindo(inimigo)){
        console.log('Capotou o corsa');
        vida.perdeVida();
        personagem.tornarInvencivel();
        if(vida.vidas < 0){  
          noLoop();
          gameover.exibe();
          somDoJogo.stop();
          somGameOver.play();
          somGameOver.volume(0.3);   
        }
    }
  }
  
  keyPressed(key){
    if(key == 'ArrowUp'){
      personagem.pula();
    }
  }
}