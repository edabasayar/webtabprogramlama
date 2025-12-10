var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// Resimler
var bg = new Image();
var sepet = new Image();
var ball = new Image();

bg.src = "images/forest.png";
sepet.src = "images/sepet.png";
ball.src = "images/armut.png";

// Değişkenler
var sX = 350;
var sY = 550;
var hiz = 1;
var skor = 0;
var hata = 0;
var maxHata = 10;
var oyunBitti = false;

// Armut dizisi
var armutlar = [];

// Klavye kontrolü
document.addEventListener("keydown", function (e) {
    if (oyunBitti) return;

    if (e.keyCode === 37) sX -= 20;   // Sol yön
    if (e.keyCode === 39) sX += 20;   // Sağ yön

    // Sınır kontrolü
    if (sX < 0) sX = 0;
    if (sX + 50 > cvs.width) sX = cvs.width - 50;
});

// Yeni armut oluşturma fonksiyonu
function yeniArmut() {
    if (oyunBitti) return;

    armutlar.push({
        x: Math.floor(Math.random() * (cvs.width - 30)),
        y: 0
    });
}

// Armut oluşturma döngüsü
setInterval(() => {
    yeniArmut();
}, 700);

// Hız artışı döngüsü
setInterval(() => {
    if (hiz < 6) hiz += 0.2;
}, 6000);

// Ana çizim fonksiyonu
function draw() {

    if (oyunBitti) return;

    ctx.drawImage(bg, 0, 0, cvs.width, cvs.height);
    ctx.drawImage(sepet, sX, sY, 50, 50);

    // Armutları işle
    for (let i = 0; i < armutlar.length; i++) {
        let a = armutlar[i];

        ctx.drawImage(ball, a.x, a.y, 30, 30);
        a.y += hiz;

        // Sepet ile yakalama çarpışması
        if (
            a.y + 30 >= sY &&
            a.x + 30 >= sX &&
            a.x <= sX + 50
        ) {
            skor++;
            armutlar.splice(i, 1);
            i--;
            continue;
        }

        // Yere düşme (kaçırma)
        if (a.y > cvs.height) {
            hata++;
            armutlar.splice(i, 1);
            i--;
        }
    }

    // Skor ve hata yazıları
    ctx.font = "25px Courier New";
    ctx.fillStyle = "white";
    ctx.textAlign = "left";

    ctx.fillText("Skor: " + skor, 10, 30);
    ctx.fillText("Hata: " + hata, 10, 60);

    // Oyun bitiş kontrolü
    if (hata >= maxHata) {
        oyunBitti = true;

        ctx.font = "60px Arial";
        ctx.fillStyle = "pink";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", cvs.width / 2, cvs.height / 2);

        return;
    }

    requestAnimationFrame(draw);
}


draw();