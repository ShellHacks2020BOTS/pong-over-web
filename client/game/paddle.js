let paddleDimensions = {width: 25, height: 200};
let leftPaddleCoordinates = {x: 50, y: canvas.height / 2};
let rightPaddleCoordinates = {x: canvas.width - 50, y: canvas.height / 2};

function drawLeftPaddle()
{
    ctx.beginPath();
    ctx.rect(leftPaddleCoordinates.x, leftPaddleCoordinates.y, paddleDimensions.width, paddleDimensions.height);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();
}

function drawRightPaddle()
{
    ctx.beginPath();
    ctx.rect(rightPaddleCoordinates.x, rightPaddleCoordinates.y, paddleDimensions.width, paddleDimensions.height);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();
}

// Paddle tracks to user mouse
document.addEventListener('mousemove', function(e)
{
    let up = e.offsetY - 100;
    if(up > 0 && up < 767)
        leftPaddleCoordinates.y = up;
    else if (up < 0)
        leftPaddleCoordinates.y = 0;
    else
        leftPaddleCoordinates.y = 767;
})

// TODO: Movement for player 2