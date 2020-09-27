const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const createGame = require('./create-game');
const { SSL_OP_NETSCAPE_CA_DN_BUG } = require('constants');

const app = express();

app.use(express.static(`${__dirname}/../client/`));

const server = http.createServer(app);
const io = socketio(server);
const { clear, getGame, update } = createGame();

io.on('connection', (sock) => {
  // upon joining, get game state
  sock.emit('joined', getGame());

  sock.on("message", (text) => {
    io.emit("message", text)
  });

  sock.on("speed", (speedX, speedY) => {
    io.emit("updateSpeed", speedX, speedY);
  });

  sock.on("moveBall", (x, y) => {
    // update(leftPaddle, rightPaddle, ball);
    io.emit("update", x, y);
  });

  sock.on("moveLeftPaddle", (x, y) => {
    io.emit("updateLeftPaddle", x, y);
  });

  sock.on("moveRightPaddle", (x, y) => {
    io.emit("updateRightPaddle", x, y);
  });
});

server.on("error", (err) => {
  console.log(err);
});

server.listen(8080, () => {
  console.log('server is ready on 8080');
});

var connectCounter = 0;
io.on('connect', function (sock) {
  console.log(++connectCounter);

  sock.on('disconnect', function () {
    console.log(--connectCounter);
  });
});
