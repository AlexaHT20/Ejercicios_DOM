const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const ball = {
    x: 0,
    y: 0,
    show: function() {
        ctx.fillStyle = 'orange';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.fill();
    }
};

let x = 10;
let y = 10;
let right = true;
let down = true;

setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    ball.x = x;
    ball.y = y;
    ball.show();


    if (right) x += 2;
    else x -= 2;

    if (down) y += 2;
    else y -= 2;

    if (x >= 590 || x <= 10) right = !right;
    if (y >= 390 || y <= 10) down = !down;
}, 10);
