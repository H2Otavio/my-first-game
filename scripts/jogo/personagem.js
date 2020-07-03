class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    this.frameAtual = 0;
    
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    
    this.contadorPulo = 0;
    this.velocidadeDoPulo = 0;
    this.gravidade = 4;
    this.alturaPulo = -40;
    this.invencivel = false;
  }
  
  pula(){
    if(this.contadorPulo < 2){
        this.velocidadeDoPulo = this.alturaPulo;
        somDoPulo.play();
        this.contadorPulo++;
      }
  }
  
  aplicaGravidade(){
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;
    
    if(this.y > this.yInicial){
         this.y = this.yInicial;
         this.contadorPulo = 0;
    }
  }
  
  tornarInvencivel(){
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000)
  }
  
  estaColidindo(inimigo){
    if(this.invencivel) return false;
    
    const precisao = 0.7;
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