var leftPaddle = document.getElementById("leftPaddle");
var ball = document.getElementById("ball");
var ballAngle = 0;
var ballPosition = {xPosition: 947, yPosition: 470};

document.getElementById("game").addEventListener('mousemove', function(e)
{
    let up = e.offsetY - 125;
    console.log(e.offsetY)
    if(up > 0 && up < 719)
        leftPaddle.style.top = up + 'px';
    else if (up < 0)
    {
        console.log("wah")
        leftPaddle.style.top = 0 + 'px'
    }
    else
    {
        leftPaddle.style.top = 719 + 'px'
    }
})


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