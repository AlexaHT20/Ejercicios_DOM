const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(200, 208, 75, 0, Math.PI * 2, true);
ctx.fill();


ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(175, 180, 15, 0, Math.PI * 2, true);
ctx.fill();

ctx.beginPath();
ctx.arc(225, 180, 15, 0, Math.PI * 2, true);
ctx.fill();


ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(180, 180, 5, 0, Math.PI * 2, true);
ctx.fill();

ctx.beginPath();
ctx.arc(225, 180, 5, 0, Math.PI * 2, true);
ctx.fill();

ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(200, 230, 30, 0, Math.PI, false);
ctx.fill();

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(140, 130);
ctx.lineTo(200, 10);
ctx.lineTo(260, 125);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'black';
ctx.fillRect(110, 124, 180, 25);

ctx.fillStyle = 'purple';
ctx.fillRect(160, 85, 80, 10);

ctx.fillStyle = 'brown';
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(200, 220);
ctx.lineTo(120, 200);
ctx.closePath();
ctx.fill();

ctx.strokeStyle = 'black';
ctx.lineWidth = 15;

ctx.beginPath();
ctx.moveTo(170, 140);
ctx.lineTo(100, 160);
ctx.lineTo(100, 210);
ctx.lineTo(80, 250);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(240, 140);
ctx.lineTo(300, 160);
ctx.lineTo(300, 220);
ctx.lineTo(310, 255);
ctx.stroke();

ctx.fillStyle = 'black';
ctx.fillRect(140, 280, 120, 185);

ctx.fillStyle = 'black';
ctx.fillRect(90, 290, 50, 20);
ctx.fillRect(260, 290, 50, 20);

ctx.fillStyle = 'purple';
ctx.fillRect(140, 350, 120, 20);
ctx.fillStyle = 'gold';
ctx.fillRect(190, 350, 20, 20);

ctx.fillStyle = 'green';
ctx.fillRect(70, 290, 20, 20);

ctx.fillStyle = 'green';
ctx.fillRect(310, 290, 20, 20);

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(550, 100, 70, 0, Math.PI * 2, true);
ctx.fill();

ctx.fillStyle = 'gray';
ctx.beginPath();
ctx.arc(390, 100, 30, 0, Math.PI * 2, true);
ctx.arc(430, 100, 40, 0, Math.PI * 2, true);
ctx.arc(475, 100, 30, 0, Math.PI * 2, true);
ctx.fill();

ctx.fillStyle = 'gray';
ctx.beginPath();
ctx.arc(550, 120, 30, 0, Math.PI * 2, true)
ctx.arc(595, 120, 40, 0, Math.PI * 2, true);
ctx.arc(625, 120, 30, 0, Math.PI * 2, true);
ctx.arc(640, 110, 25, 0, Math.PI * 2, true);
ctx.fill();
