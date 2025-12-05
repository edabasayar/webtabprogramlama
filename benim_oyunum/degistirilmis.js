var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

//resim olusturma
var bg = new Image();
var sepet = new Image();
var ball = new Image();

bg.src = "images/forest.png";
sepet.src ="images/sepet.png";
ball.src ="images/armut.png";

//degiskenler
var sX = 350;
var sY = 550;
var life = 10;
var hiz = 0.5;
var skor = 0;
var hata = 0;
var hatasayisi = 10;

//ilk armut 
var armut = [];

armut[0] = {
   x: cvs.width,
   y: 0

};


//klavye kontrol
document.addEventListener("keydown",kontrol);

function kontrol(e){
    
    switch(e.keyCode){
        case 37:
            sX-=15;
            break;
        case 39:
            sX +=15;
            break;

        
    }
    
}


//hiz araliklarina göre armut olusturma
if (hiz <= 0.5) {
    setInterval(function(){ 
        armut.push({
            x : Math.floor(Math.random()*(cvs.width-50)),
            y : 0
     });
     }, 1000);
}

if (hiz > 0.5 && hiz <= 2) {
    setInterval(function(){ 
        armut.push({
            x : Math.floor(Math.random()*(cvs.width-50)),
            y : 0
     });
     }, 300);
}

if (hiz > 2 ) {
    setInterval(function(){ 
        armut.push({
            x : Math.floor(Math.random()*(cvs.width-50)),
            y : 0
     });
     }, 100);
}

//hiz araligi ve artisi
 setInterval(function(){ 
    if (hiz <= 4.75) {
        hiz += 0.25;
    }
 }, 7000);

 

//çizim islemleri

function draw(){

ctx.drawImage(bg,0,0);
ctx.drawImage(sepet,sX,sY,50,50);

for(var i = 0; i < armut.length; i++){

    ctx.drawImage(ball, armut[i].x, armut[i].y ,30,30);

      armut[i].y += hiz;


   
   if  (armut[i].y + ball.height >= sY +2 && armut[i].x + ball.width -10 >=  sX && armut[i].x +10 <= sX + sepet.width ){  
    
    yem.play();
    armut[i].y = sY;
    armut[i].x = 500;
    armut[i].y+=100; 
    skor++;
    
    

   }

   if(armut[i].y + ball.height >= cvs.height && armut[i].x >= 0 && armut[i].x + ball.width <= 400 ){
    hata++;
    
    armut[i].x = 500;
    armut[i].y+=100; 
    
   }

   //sepetin sag ve sol kisimlardan tasmamasi
   if (sX + sepet.width >= cvs.width) {
       sX = 350;
   }

   if (sX <= 0) {
       sX = 0;
   }
   

   //yazi olusturma
   ctx.font = " 30px Courier New";
   ctx.textalign = "center";
   ctx.textBaseline = "hanging";
   ctx.fillStyle = "white";
   ctx.fillText("Skor: " + skor,0,5);

  
   //hata kismi hatasayisina ulastiginda oyunun bitmesi
   if (hata == hatasayisi) {
    
    
    ctx.font = " 30px Courier New";
    ctx.textalign = "center";
    ctx.textBaseline = "hanging";
    ctx.fillStyle = "white";
    ctx.fillText("Hata: " + hata,0,50); 

    ctx.font = " 50px Arial";
    ctx.textalign = "center";
    ctx.textBaseline = "hanging";
    ctx.fillStyle = "pink";
    ctx.fillText("Game Over",65,275);
    
    gameover.play();
    draw.stop();

   }
   

}


if (hata <= 9) {
    ctx.font = " 30px Courier New";
    ctx.textalign = "center";
    ctx.textBaseline = "hanging";
    ctx.fillStyle = "white";
    ctx.fillText("Hata: " + hata,0,50);
    
   }
requestAnimationFrame(draw);
}

draw();















