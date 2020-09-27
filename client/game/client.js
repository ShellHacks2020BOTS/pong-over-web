let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

const getGameStatus = () => {
  return {
    leftPaddle,
    rightPaddle,
    ball,
  }
}

 // establish connection to server through socket.io
 const sock = io("http://localhost:8080");


(() => {
  // update client with server information
  sock.on('message', (text) => {
      console.log(text);
  });

  sock.on("updateSpeed", (x, y) => {
    ball.speedX = x;
    ball.speedY = y;
  });


    sock.on("update", (x, y) => {
      ball.positionX = x;
      ball.positionY = y;
    });

    sock.on("updateLeftPaddle", (x, y) => {
      leftPaddle.positionX = x;
      leftPaddle.positionY = y;
    });

    sock.on("updateRightPaddle", (x, y) => {
      rightPaddle.positionX = x;
      rightPaddle.positionY = y;
    });
})();