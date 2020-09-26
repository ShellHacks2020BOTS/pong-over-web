const message = document.querySelector("#message");

const displayMessage = (text) => {
    message.textContent = text;
};

(() => {
    // establish connection to server through socket.io
    const sock = io("http://localhost:8080");

    sock.on("message", displayMessage);
})();


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
