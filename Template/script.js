var leftPaddle = document.getElementById("leftPaddle");
var ball = document.getElementById("ball");
var ballDirection = 0
var ballAngle = Math.floor(Math.random() * 91) + 45 //ballAngle starts between 45 and 135
var ballPosition = {xPosition: 947, yPosition: 470};

//Paddle tracks to user mouse
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

//Ball logic
function component(width, height, color, x, y) {
    this.gamearea = gamearea;
    this.width = width;
    this.height = height;
    this.angle = 0;
    this.speed = 1;
    this.x = x;
    this.y = y;
    this.update = function() {
      ctx = myGameArea.context;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.fillStyle = color;
      ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
      ctx.restore();
    }
    this.newPos = function() {
      this.x += this.speed * Math.sin(this.angle);
      this.y -= this.speed * Math.cos(this.angle);
    }
}

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