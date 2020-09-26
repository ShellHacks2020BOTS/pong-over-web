let paddleDimensions = {width: 25, height: 200};
let paddleCoordinates = {x: 50, y: canvas.height / 2};
let leftPaddle = document.getElementById("leftPaddle");

function drawPaddle()
{
    ctx.beginPath();
    ctx.rect(paddleCoordinates.x, paddleCoordinates.y, paddleDimensions.width, paddleDimensions.height);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();
}

//Paddle tracks to user mouse
document.addEventListener('mousemove', function(e)
{
    let up = e.offsetY - 100;
    if(up > 0 && up < 767)
        paddleCoordinates.y = up;
    else if (up < 0)
        paddleCoordinates.y = 0;
    else
        paddleCoordinates.y = 767;
})