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


    sock.on("update", (x, y) => {
      ball.positionX = x;
      ball.positionY = y;
    });

    sock.on("updatePaddle", (x, y) => {
      leftPaddle.positionX = x;
      leftPaddle.positionY = y;
    });
})();