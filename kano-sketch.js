var mexerBracoEsquerdo = 0;
var mexerBracoDireito = 0;
var kanoHead
var kanoBody
var kanoBracoEsquerdo
var kanoBracoDireito
var kanoPernaEsquerda
var kanoPernaDireita

function setup() {
    createCanvas(500, 500);
    kanoHead = loadImage('assets/head.png');
    kanoBody = loadImage('assets/kano-body.png');
    kanoBracoEsquerdo = loadImage('assets/kano-braco-esquerdo.png');
    kanoBracoDireito = loadImage('assets/kano-braco-direito.png')
    kanoPernaEsquerda = loadImage('assets/kano-perna-esquerdo.png')
    kanoPernaDireita = loadImage('assets/kano-perna-direita.png')
}
function draw() {
    background(255);

    push();
    translate(225, 10);
    image(kanoHead, -55, 0);
    fill(255);
    circle(0,0,4);
    pop();

    push();
    translate(225, 100);
    image(kanoBody, -55, 10);
    fill(255);
    pop();

    push();
    translate(205, 255);
    image(kanoPernaEsquerda, -55, 0)
    fill(255);
    circle(0,0,4);
    pop();

    push();
    translate(258, 255);
    image(kanoPernaDireita, -18, 0)
    fill(255);
    circle(0,0,4);
    pop();

    push();
    translate(160, 130);
    rotate(radians(mexerBracoEsquerdo))
    image(kanoBracoEsquerdo, -65, -17, 66, 175)
    fill(255);
    circle(0,0,4);
    pop();

    push();
    translate(290, 130);
    rotate(radians(mexerBracoDireito))
    image(kanoBracoDireito, 0, -20)
    fill(255);
    circle(0,0,4);
    pop();


}

function keyPressed() {

    if (keyCode === 68 & mexerBracoDireito == 0) {
        mexerBracoDireito = -30;
    } else if (keyCode === 68 & mexerBracoDireito == -30) {
        mexerBracoDireito = 0;
    }

    if (keyCode === 69 & mexerBracoEsquerdo == 0) {
        mexerBracoEsquerdo = 30;
    } else if (keyCode === 69 & mexerBracoEsquerdo == 30) {
        mexerBracoEsquerdo = 0;
    }

}
