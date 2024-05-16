let box = 20;
let baris = 20;
let kolom = 25;
let canvas;
let ctx;

let posX = box * 3;
let posY = box * 3;

let spdX = 0;
let spdY = 0;

let body = [];

let makananPosX;
let makananPosY;

let gameEnded = false;

window.onload = function() {

    canvas = document.getElementById("papan");
    canvas.height = baris * box;
    canvas.width = kolom * box;
    ctx = canvas.getContext("2d");

    placemakanan();
    document.addEventListener("keyup", changeDirection);

    setInterval(update, 1000 / 10);
}

function update() {
    if (gameEnded) {
        return;
    }

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red";
    ctx.fillRect(makananPosX, makananPosY, box, box);

    if (posX == makananPosX && posY == makananPosY) {
        body.push([makananPosX, makananPosY]);
        placemakanan();
    }

    for (let i = body.length - 1; i > 0; i--) {
        body[i] = body[i - 1];
    }
    if (body.length) {
        body[0] = [posX, posY];
    }

    ctx.fillStyle = "black";
    posX += spdX * box;
    posY += spdY * box;
    ctx.fillRect(posX, posY, box, box);
    for (let i = 0; i < body.length; i++) {
        ctx.fillRect(body[i][0], body[i][1], box, box);
    }

    if (posX < 0 ||
        posX >= kolom * box ||
        posY < 0 ||
        posY >= baris * box) {

        gameEnded = true;
        alert("Game Over");
    }

    for (let i = 0; i < body.length; i++) {
        if (posX == body[i][0] && posY == body[i][1]) {
            gameEnded = true;
            alert("Game Over");
        }
    }
}

function changeDirection(e) {
    if (e.code == "ArrowUp" && spdY != 1) {
        spdX = 0;
        spdY = -1;
    } else if (e.code == "ArrowDown" && spdY != -1) {
        spdX = 0;
        spdY = 1;
    } else if (e.code == "ArrowLeft" && spdX != 1) {
        spdX = -1;
        spdY = 0;
    } else if (e.code == "ArrowRight" && spdX != -1) {
        spdX = 1;
        spdY = 0;
    }
}

function placemakanan() {
    makananPosX = Math.floor(Math.random() * kolom) * box;
    makananPosY = Math.floor(Math.random() * baris) * box;
}