class GameOver{
  constructor(imagem){
    this.imagem = imagem;
    this.x1 = 100;
    this.y1 = 50;
  }
  
  exibe(){
    image(this.imagem, this.x1, this.y1, width-100, height-100);
  }
}