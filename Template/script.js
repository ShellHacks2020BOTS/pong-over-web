var leftPaddle = document.getElementById("leftPaddle");
var ball = document.getElementById("ball");
var ballAngle = 0;
var ballPosition = {xPosition: 947, yPosition: 470};

document.addEventListener('mousemove', function(e)
{
    let up = e.offsetY - 125;
    if(up > 0 && up < 719)
        leftPaddle.style.top = up + 'px';
    else if (up < 0)
    {
        leftPaddle.style.top = 0 + 'px'
    }
    else
    {
        leftPaddle.style.top = 719 + 'px'
    }
})

window.setInterval(function()
{
    var ballLeft = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
    if (blockLeft < randomPosition + 10 && blockLeft > randomPosition - 10)
    {
        block.style.backgroundColor = "green";
        //block.style.animation = "blockUp";
    }
},10);

// var checkDead = setInterval(function()
// {
//     var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//     var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
//     if(blockLeft < 20 && blockLeft > 0 && characterTop >= 130)
//     {
//         block.style.animation = "none";
//         block.style.display = "none";
//         alert("You lose");
//     }
// }, 10);