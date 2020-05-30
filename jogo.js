
const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');


const somColidiu = new Audio();
somColidiu.src = "./sons/colidiu.mp3";

const sprites = new Image();
sprites.src = './img/sprites.png';

function colidiu(vaquinha, carros){

    const xV = vaquinha.x;
    const yV = vaquinha.y;
    const aV = vaquinha.altura;
    const lV = vaquinha.largura;

    for (let i = 0; i < carros.length; i++){
        if(     ((xV >= carros[i].x     &&  xV <= carros[i].x + carros[i].largura) 
            ||  (xV + lV >= carros[i].x &&  xV + lV <= carros[i].x + carros[i].largura)) 
            &&  ((yV >= carros[i].y     &&  yV <= carros[i].y + carros[i].altura) 
            ||  (yV + aV >= carros[i].y &&  yV + aV <= carros[i].y + carros[i].altura))){

                somColidiu.play();
                setTimeout(() => {
                    vaquinha.y = 366;
                }, 100);
        }
    }   
}

const vaquinha = {
    spriteX: 64,
    spriteY: 0,
    largura: 42,
    altura: 36,
    x: 100,
    y: 366,
    velocidade: 5,
    mover(tecla){
        if ( tecla == "ArrowUp" ){
            this.y = Math.max(0, this.y - this.velocidade);
        } else if ( tecla == "ArrowDown") {
            this.y = Math.min(canvas.height - this.altura, this.y + this.velocidade);
        }
    }, 
    desenha() {
        contexto.drawImage(
            sprites, 
            this.spriteX, this.spriteY, 
            this.largura, this.altura, 
            this.x, this.y, 
            this.largura * 0.85, this.altura*0.85, 
        )
    }
}

const carro1 = {
    spriteX: 0,
    spriteY: 0,
    largura: 60,
    altura: 33,
    x: 600,
    y: 45,
    velocidade: 2.5,
    desenha() {
        contexto.drawImage(
            sprites, 
            this.spriteX, this.spriteY, 
            this.largura, this.altura, 
            this.x, this.y, 
            this.largura, this.altura, 
        )
    }
}

const carro2 = {
    spriteX: 0,
    spriteY: 33,
    largura: 61,
    altura: 33,
    x: 600,
    y: 100,
    velocidade: 3.5,
    desenha() {
        contexto.drawImage(
            sprites, 
            this.spriteX, this.spriteY, 
            this.largura, this.altura, 
            this.x, this.y, 
            this.largura, this.altura, 
        )
    }
}

const carro3 = {
    spriteX: 0,
    spriteY: 67,
    largura: 60,
    altura: 35,
    x: 600,
    y: 155,
    velocidade: 3,
    desenha() {
        contexto.drawImage(
            sprites, 
            this.spriteX, this.spriteY, 
            this.largura, this.altura, 
            this.x, this.y, 
            this.largura, this.altura, 
        )
    }
}

const carro4 = {
    spriteX: 0,
    spriteY: 0,
    largura: 60,
    altura: 33,
    x: 600,
    y: 215,
    velocidade: 2.5,
    desenha() {
        contexto.drawImage(
            sprites, 
            this.spriteX, this.spriteY, 
            this.largura, this.altura, 
            this.x, this.y, 
            this.largura, this.altura, 
        )
    }
}

const carro5 = {
    spriteX: 0,
    spriteY: 33,
    largura: 61,
    altura: 33,
    x: 600,
    y: 265,
    velocidade: 4,
    desenha() {
        contexto.drawImage(
            sprites, 
            this.spriteX, this.spriteY, 
            this.largura, this.altura, 
            this.x, this.y, 
            this.largura, this.altura, 
        )
    }
}

const carro6 = {
    spriteX: 0,
    spriteY: 67,
    largura: 60,
    altura: 35,
    x: 600,
    y: 325,
    velocidade: 5,
    desenha() {
        contexto.drawImage(
            sprites, 
            this.spriteX, this.spriteY, 
            this.largura, this.altura, 
            this.x, this.y, 
            this.largura, this.altura, 
        )
    }
}

let carros = [carro1, carro2, carro3, carro4, carro5, carro6];

const estrada = {
    spriteX: 0,
    spriteY: 107,
    largura: 600,
    altura: 263,
    x: 0,
    y: 0,
    desenha() {
        contexto.drawImage(
            sprites, 
            this.spriteX, this.spriteY, 
            this.largura, this.altura, 
            this.x, this.y, 
            canvas.width, canvas.height, 
        )
    }
}


function loop(){
    estrada.desenha();
    vaquinha.desenha();
    colidiu(vaquinha, carros);
    
    for( let i = 0; i < carros.length; i++){
        carros[i].x -= carros[i].velocidade
        if(carros[i].x < -50){
            carros[i].x = 600;
        }
        carros[i].desenha();
    }

    // for (i = 10;i<canvas.height;i+=10){
    //     contexto.fillText(i, 300, i);
    // }

    requestAnimationFrame(loop);
}

window.addEventListener('keydown', function(){
    vaquinha.mover(this.event.key);
}

);

loop();