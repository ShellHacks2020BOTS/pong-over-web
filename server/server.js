const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const createGame = require('./create-game');
const { SSL_OP_NETSCAPE_CA_DN_BUG } = require('constants');

const app = express();

app.use(express.static(`${__dirname}/../client/game`));

const server = http.createServer(app);
const io = socketio(server);
const { clear, getGame, update } = createGame();

io.on('connection', (sock) => {
  // upon joining, get game state
  sock.emit('joined', getGame());

  sock.on("message", (text) => {
    io.emit("message", text)
  });

  sock.on("moveBall", (x, y) => {
    // update(leftPaddle, rightPaddle, ball);
    io.emit("update", x, y);
  });

  sock.on("moveLeftPaddle", (x, y) => {
    // update(leftPaddle, rightPaddle, ball);
    io.emit("updatePaddle", x, y);
  });
});

server.on("error", (err) => {
  console.log(err);
});

server.listen(8080, () => {
  console.log('server is ready');
});