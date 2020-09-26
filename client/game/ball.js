let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#000000";
ctx.fillRect(0,0,1920,1080);

let ballAngle = Math.floor(Math.random() * 91) + 45 //ballAngle starts between 45 and 135
let ballPosition = {x: canvas.width / 2, y: canvas.height / 2};
let ballSpeed = {dx: 8, dy: -Math.floor(Math.random() * 8) + 2};
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
    drawScore();

    //Collision
    if(ballPosition.x + ballSpeed.dx > canvas.width - ballRadius) // wall hit
    {
        score++;
        ballSpeed.dx = -ballSpeed.dx;
    }
    else if (ballPosition.x + ballSpeed.dx < ballRadius + paddleCoordinates.x) // ball in paddle-zone
    {
        // did ball hit paddle?
        if (ballPosition.y > paddleCoordinates.y && ballPosition.y < paddleDimensions.height + paddleCoordinates.y)
        {
            ballSpeed.dx = -ballSpeed.dx;
            ballSpeed.dy = Math.floor(Math.random() * 8) + 2
            if (Math.random() > 0.5)
                ballSpeed.dy *= -1
        }
        // ball didn't hit paddle :(
        else
        {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval);
        }
    }
    // bounce off ceiling/floor?
    if(ballPosition.y + ballSpeed.dy > canvas.height - ballRadius || ballPosition.y + ballSpeed.dy < ballRadius) {
        ballSpeed.dy = -ballSpeed.dy;
    }
    //----------------------------

    ballPosition.x += ballSpeed.dx;
    ballPosition.y += ballSpeed.dy;
}

let interval = setInterval(draw, 10);