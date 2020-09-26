const createGame = () => {

  let gameState;

  const clear = () => {
    gameState = {
      playerLeft: [0, 0],
      playerRight: [0, 0],
      ball: [0, 0],
    };
  };

  const getGame = () => gameState;

  const update = (playerLeft, playerRight, ball) => {
    gameState.playerLeft = playerLeft;
    gameState.playerRight = playerRight;
    gameState.ball = ball;
  };

  return {
    clear, getGame, update
  };
}

module.exports = createGame;