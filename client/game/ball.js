
ctx.fillStyle = "#5d6385";
ctx.fillRect(0,0,1920,1080);

class Ball {
    constructor(positionX, positionY, speedX, speedY,  radius) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.speedX = speedX;
        this.speedY = speedY;
        this.radius = radius;
    }

    drawBall() {
        ctx.beginPath();
        ctx.arc(ball.positionX, ball.positionY, ball.radius, 0, Math.PI*2);
        ctx.fillStyle = "#040405";
        ctx.fill();
        ctx.closePath();
    }

    getPosition() {
        return [this.positionX, this.positionY];
    }
}

let ball = new Ball(
    canvas.width / 2, 
    canvas.height / 2,
    -8, 
    -Math.floor(Math.random() * 8) + 2,
    10
);

let ballInitialPosition = {x: canvas.width / 2, y: canvas.height / 2};

function drawPlayerNum()
{
    ctx.font = "30px Arial";
    ctx.fillStyle = "#f3faff";
    ctx.fillText("Player " + playerNum, canvas.width / 2 + 150, 100);
}

function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.drawBall();
    leftPaddle.drawPaddle();
    rightPaddle.drawPaddle();
    drawLeftScore();
    drawRightScore();
    drawPlayerNum();

    //Collision
    if(ball.positionX + ball.speedX > ball.radius + rightPaddle.positionX) // Right paddle zone
    {
        if (ball.positionY > rightPaddle.positionY && ball.positionY < rightPaddle.height + rightPaddle.positionY)
            ballHit();
        else
            onScore(true);
    }
    else if (ball.positionX + ball.speedX < ball.radius + leftPaddle.positionX) // Left paddle zone
    {
        // did ball hit paddle?
        if (ball.positionY > leftPaddle.positionY && ball.positionY < leftPaddle.height + leftPaddle.positionY)
            ballHit();
        // ball didn't hit paddle :(
        else
            onScore(false);
    }

    // bounce off ceiling/floor?
    if(ball.positionY + ball.speedY > canvas.height - ball.radius || ball.positionY + ball.speedY < ball.radius)
        ball.speedY *= -1;
    //----------------------------

    ball.positionX += ball.speedX;
    ball.positionY += ball.speedY;

    let x = curPaddle.getPosition()[0];
    let y = curPaddle.getPosition()[1];
    if(playerNum == 1)
        sock.emit("moveLeftPaddle", x, y);
    else
        sock.emit("moveRightPaddle", x, y);
}

// Reverse x speed and randomize the y speed
function ballHit()
{
    ball.speedX *= -1;
    ball.speedY = Math.floor(Math.random() * 8) + 2;
    if (Math.random() > 0.5)
        ball.speedY *= -1;
    sock.emit("speed", ball.speedX, ball.speedY);
    let x = ball.getPosition()[0];
    let y = ball.getPosition()[1];
    sock.emit("moveBall", x, y);
}

let interval = setInterval(draw, 10);