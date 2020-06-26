class Personagem extends Animacao{
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)
    this.frameAtual = 0;
    
    this.yInicial = height - this.altura;
    this.y = this.yInicial;
    
    this.contadorPulo = 0;
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
  }
  
  pula(){
    if(this.contadorPulo < 1){
        this.velocidadeDoPulo = -30;
        somDoPulo.play();
        this.contadorPulo++;
      }
  }
  
  aplicaGravidade(){
    if(this.y == this.yInicial) this.contadorPulo = 0;
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;
    
    if(this.y > this.yInicial){
         this.y = this.yInicial;
    }
  }
  
  estaColidindo(inimigo){
    const precisao = .7
    const colisao = collideRectRect(this.x,
                    this.y,
                    this.largura * precisao,
                    this.altura * precisao,
                    inimigo.x,
                    inimigo.y,
                    inimigo.largura * precisao,
                    inimigo.altura * precisao
                   );
    
    return colisao;
  }
}