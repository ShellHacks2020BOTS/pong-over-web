class Paddle {
    constructor(width, height, positionX, positionY) {
        this.width = width;
        this.height = height;
        this.positionX = positionX;
        this.positionY = positionY;
    }

    drawPaddle() {
        ctx.beginPath();
        ctx.rect(this.positionX, this.positionY, this.width, this.height);
        ctx.fillStyle = "#ffd480";
        ctx.fill();
        ctx.closePath();
    }

    getPosition() {
        return [this.positionX, this.positionY];
    }
}

let leftPaddle = new Paddle(25, 200, 50, canvas.height / 2);
let rightPaddle = new Paddle(25, 200, canvas.width - 50, canvas.height / 2);

var curPaddle;

// Paddle tracks to user mouse
document.addEventListener('mousemove', function(e)
{
    let up = e.offsetY - 100;
    if(up > 0 && up < 767)
        curPaddle.positionY = up;
    else if (up < 0)
        curPaddle.positionY= 0;
    else
        curPaddle.positionY = 767;
})

// TODO: Movement for player 2