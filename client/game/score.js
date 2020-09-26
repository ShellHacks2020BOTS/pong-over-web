let leftScore = 0;
let rightScore = 0;

function drawLeftScore()
{
    ctx.font = "16px Arial";
    ctx.fillStyle =  "#f3faff";
    ctx.fillText("Score: " + leftScore, canvas.width / 2 - 200, 20);
}

function drawRightScore()
{
    ctx.font = "16px Arial";
    ctx.fillStyle =  "#f3faff";
    ctx.fillText("Score: " + rightScore, canvas.width / 2 + 150, 20);
}

//Resets ball position and increments respective score
function onScore(ifLeftScored)
{
    ballPosition.x = ballInitialPosition.x;
    ballPosition.y = ballInitialPosition.y;

    if (ifLeftScored)
        leftScore++;
    else
        rightScore++;
}

function onPointLimit()
{
    if (leftScore >= 10)
        resetGame("Left")
    if (rightScore >= 10)
        resetGame("Right");
}

function resetGame(winnerString)
{
    alert(winnerString + " Wins!");
    document.location.reload();
    clearInterval(gameReset);
}

//Checks if someone has reached the point limit every 10ms
gameReset = setInterval(onPointLimit, 10);