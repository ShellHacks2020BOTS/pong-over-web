const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const createGame = require('./create-game');

const app = express();

app.use(express.static(`${__dirname}/../client/game`));

const server = http.createServer(app);
const io = socketio(server);
const { clear, getGame, update } = createGame();

io.on('connection', (sock) => {
  // upon joining, get game state
  sock.emit('joined', getGame());

  sock.on("update", (playerLeft, playerRight, ball) => {
    update(playerLeft, playerRight, ball);
    io.emit("update", { playerLeft, playerRight, ball })
  });
});

server.on("error", (err) => {
  console.log(err);
});

server.listen(8080, () => {
  console.log('server is ready');
});