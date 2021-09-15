import { useState } from "react";
import Board from "./Board";
import CalculateWinner from "./CalculateWinner";
function Game() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const current = history[history.length - 1];
  const winner = CalculateWinner(current.squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const handleClick = (i) => {
    //   const history = history;
    console.log(i);
    const current = history[history.length - 1];
    const square = current.squares.slice();
    if (CalculateWinner(square) || square[i]) {
      return;
    }
    square[i] = xIsNext ? "X" : "O";
    setHistory(history.concat([{ squares: square }]));
    setXIsNext(!xIsNext);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={() => handleClick()} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game;
