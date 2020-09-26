let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#000000";
ctx.fillRect(0,0,1920,1080);

let ballAngle = Math.floor(Math.random() * 91) + 45 //ballAngle starts between 45 and 135
let ballPosition = {x: canvas.width / 2, y: canvas.height / 2};
let ballSpeed = {dx: 8, dy: -8};
let ballRadius = 10;

function drawBall()
{
    ctx.beginPath();
    ctx.arc(ballPosition.x, ballPosition.y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();
}

function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    //Collision
    if(ballPosition.x + ballSpeed.dx > canvas.width - ballRadius/* || ballPosition.x + ballSpeed.dx < ballRadius*/) {
        ballSpeed.dx = -ballSpeed.dx;
    }
    else if (ballPosition.x + ballSpeed.dx < ballRadius + paddleCoordinates.x)
    {
        if (ballPosition.y > paddleCoordinates.y && ballPosition.y < paddleDimensions.height + paddleCoordinates.y)
            ballSpeed.dx = -ballSpeed.dx;
        else
        {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval);
        }
    }
    
    if(ballPosition.y + ballSpeed.dy > canvas.height - ballRadius || ballPosition.y + ballSpeed.dy < ballRadius) {
        ballSpeed.dy = -ballSpeed.dy;
    }

    ballPosition.x += ballSpeed.dx;
    ballPosition.y += ballSpeed.dy;
}

let interval = setInterval(draw, 10);