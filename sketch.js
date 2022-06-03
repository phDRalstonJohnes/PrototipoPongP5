//VARIÁVEIS DA BOLINHA
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro/2;

//VELOCIDADE DA BOLINHA
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//VARIÁVEIS DA RAQUETE
let xRaquete = 10;
let yRaquete = 160;
let comprimentoRaquete = 10;
let larguraRaquete = 90

//VARIÁVEIS DA RAQUETE DO OPONENTE
let xRaquete2 = 580;
let yRaquete2 = 160;
let comprimentoRaquete2 = 10;
let larguraRaquete2 = 90;
let velocidadeYraquete2;
let chanceDeErrar = 0;

//VARIÁVEIS PONTOS
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  raquete1();
  raquete2();
  movimentoBolinha();
  colisaoBorda();
  movimentoRaquete1();
  colisaoRaquete();
  movimentoRaquete2();
  colisaoRaquete2();
  mostraPontos();
  alteraPlacar();  

}


function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}
  
function movimentoBolinha(){
  xBolinha = xBolinha + velocidadexBolinha;
  yBolinha = yBolinha + velocidadeyBolinha;
}

function colisaoBorda(){
   if (xBolinha + raio > width || xBolinha - raio < 0){ 
  velocidadexBolinha *= -1;
  } else if(yBolinha + raio > height || yBolinha - raio < 0){
  velocidadeyBolinha *= -1;
  } 
}

function raquete1(){
  fill(color(178, 34, 34))
  rect(xRaquete, yRaquete, comprimentoRaquete, larguraRaquete);
}

function raquete2(){
  fill(color(30, 144, 255));
  rect(xRaquete2, yRaquete2, comprimentoRaquete2, larguraRaquete2);
}

function movimentoRaquete1() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -=10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete +=10;
  }
}

function colisaoRaquete() {
  if(xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + larguraRaquete && yBolinha + raio > yRaquete ) {
  velocidadexBolinha *=-1;
  }
}

function movimentoRaquete2() {
  velocidadeYraquete2 = yBolinha - yRaquete2 - comprimentoRaquete2 / 2 - 30;
  yRaquete2 += velocidadeYraquete2
}

function colisaoRaquete2() {

  if (xBolinha + raio > xRaquete2 && yBolinha + raio < yRaquete2 + larguraRaquete2 && yBolinha + raio > yRaquete2 - comprimentoRaquete2) {
     velocidadexBolinha *=-1;
  }
}

function mostraPontos(){
  textAlign(CENTER);
  textSize(18);
  fill(color(178, 34, 34))
  rect(130, 6, 40, 30)
  fill(255);
  text(meusPontos, 150, 26);
  fill(color(30, 144, 255));
  rect(430, 6, 40, 30);
  fill(255);
  text(pontosOponente, 450, 26);
  
}

function alteraPlacar(){
  if (xBolinha > 585){
    meusPontos += 1;
  }
  if (xBolinha < 15){
    pontosOponente += 1;
  }
}


