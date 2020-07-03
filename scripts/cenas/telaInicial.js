class TelaInicial{
  constructor(){
    
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height); 
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(50);
    text('As Aventuras De', width/2, height/4);
    textSize(100);
    text('Ripsta', width/2, height/4+100);
  }
  
  _botao(){
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw();
  }
}