const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();

app.use(express.static(`${__dirname}/../client/game`));

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (sock) => {
  // sends message to one single client
  sock.emit("message", "You are connected");
  // sends message to everyone
  sock.on("message", (text) => io.emit("message", text));
});

server.on("error", (err) => {
  console.log(err);
});

server.listen(8080, () => {
  console.log('server is ready');
});