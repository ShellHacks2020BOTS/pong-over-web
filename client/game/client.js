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