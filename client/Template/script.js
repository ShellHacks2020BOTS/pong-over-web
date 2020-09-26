const message = document.querySelector("#message");

const displayMessage = (text) => {
    message.textContent = text;
};

const log = (text) => {
    const parent = document.querySelector('#events');
    const el = document.createElement('li');
    el.innerHTML = text;
  
    parent.appendChild(el);
    parent.scrollTop = parent.scrollHeight;
  };

const onChatSubmitted = (sock) => (e) => {
    e.preventDefault();
  
    const input = document.querySelector('#chat');
    const text = input.value;
    input.value = '';
  
    // send message to server
    sock.emit('message', text);
  };
  

(() => {
    // establish connection to server through socket.io
    const sock = io("http://localhost:8080");

    // client side listener for server events
    sock.on("message", displayMessage);
    sock.on('message', log);

    document
    .querySelector('#chat-form')
    .addEventListener('submit', onChatSubmitted(sock));
})();


var leftPaddle = document.getElementById("leftPaddle");
var ball = document.getElementById("ball");
var ballAngle = 0;
var ballPosition = {xPosition: 947, yPosition: 470};

document.getElementById("game").addEventListener('mousemove', function(e)
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
