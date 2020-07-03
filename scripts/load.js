function preload(){
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png')
  imagemGameOver = loadImage('imagens/cenario/tobecontinue.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  
  fita = loadJSON('cartucho/cartucho.json')
  
  somDoPulo = loadSound('sons/somPulo.mp3');
  somGameOver = createAudio('sons/roundabout.mp3');
  somDoJogo = createAudio('sons/trilha_jogo.mp3');
}