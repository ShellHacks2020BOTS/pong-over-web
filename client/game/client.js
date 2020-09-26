let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

const getGameStatus = () => {
  return {
    leftPaddleCoordinates,
    rightPaddleCoordinates,
    ballPosition,
  }
}

 // establish connection to server through socket.io
 const sock = io("http://localhost:8080");


(() => {
    sock.on("update", ({ playerLeft, playerRight, ball }) => {
      leftPaddleCoordinates = playerLeft;
      rightPaddleCoordinates = playerRight;
      ballPosition = ball;
    });

    document
    .querySelector('#chat-form')
    .addEventListener('submit', onChatSubmitted(sock));
})();