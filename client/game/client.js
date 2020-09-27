let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

var playerNum = -1;

const getGameStatus = () => {
  return {
    leftPaddle,
    rightPaddle,
    ball,
  }
}

// establish connection to server through socket.io
console.log(window.location.hostname);
const sock = io(`http://${window.location.hostname}:8080`);


(() => {
  // update client with server information
  sock.on('message', (text) => {
    console.log(text);
  });

  sock.on("player", (pNum) =>  {
    console.log("Received player signal: ", pNum);
    playerNum = pNum;
    curPaddle = (playerNum == 1 ? leftPaddle : rightPaddle);
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
    if(playerNum != 1)
    {
      leftPaddle.positionX = x;
      leftPaddle.positionY = y;
    }
  });

  sock.on("updateRightPaddle", (x, y) => {
    if(playerNum != 2)
    {
      rightPaddle.positionX = x;
      rightPaddle.positionY = y;
    }
  });
})();