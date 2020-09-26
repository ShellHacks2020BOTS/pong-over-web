let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#5d6385";
ctx.fillRect(0,0,1920,1080);

let ballAngle = Math.floor(Math.random() * 91) + 45 //ballAngle starts between 45 and 135
let ballPosition = {x: canvas.width / 2, y: canvas.height / 2};
let ballSpeed = {dx: -8, dy: -Math.floor(Math.random() * 8) + 2};
let ballRadius = 10;

let ballInitialPosition = {x: canvas.width / 2, y: canvas.height / 2};

function drawBall()
{
    ctx.beginPath();
    ctx.arc(ballPosition.x, ballPosition.y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#040405";
    ctx.fill();
    ctx.closePath();
}

function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawLeftPaddle();
    drawRightPaddle();
    drawLeftScore();
    drawRightScore();

    //Collision
    if(ballPosition.x + ballSpeed.dx > ballRadius + rightPaddleCoordinates.x) // Right paddle zone
    {
        if (ballPosition.y > rightPaddleCoordinates.y && ballPosition.y < paddleDimensions.height + rightPaddleCoordinates.y)
            ballHit();
        else
            onScore(true);
    }
    else if (ballPosition.x + ballSpeed.dx < ballRadius + leftPaddleCoordinates.x) // Left paddle zone
    {
        // did ball hit paddle?
        if (ballPosition.y > leftPaddleCoordinates.y && ballPosition.y < paddleDimensions.height + leftPaddleCoordinates.y)
            ballHit()
        // ball didn't hit paddle :(
        else
            onScore(false);
    }

    // bounce off ceiling/floor?
    if(ballPosition.y + ballSpeed.dy > canvas.height - ballRadius || ballPosition.y + ballSpeed.dy < ballRadius)
        ballSpeed.dy *= -1;
    //----------------------------

    ballPosition.x += ballSpeed.dx;
    ballPosition.y += ballSpeed.dy;
}

// Reverse x speed and randomize the y speed
function ballHit()
{
    ballSpeed.dx *= -1;
    ballSpeed.dy = Math.floor(Math.random() * 8) + 2
    if (Math.random() > 0.5)
        ballSpeed.dy *= -1
}

let interval = setInterval(draw, 10);