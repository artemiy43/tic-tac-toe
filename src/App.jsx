import { useState } from "react";
import "./App.css";
import Square from "./Square";

function App() {
  const [isX, setisX] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (checkWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = isX ? "X" : "O";
    setSquares(squares);
    setisX(!isX);
  }

  const winner = checkWinner(squares);
  let status;

  if (winner) {
    status = `Winner is ${winner}`;
  } else {
    status = `Next player is ${isX ? "X" : "O"}`;
  }

  function checkWinner(squares) {
    const winningPatters = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatters.length; i++) {
      const [a, b, c] = winningPatters[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        console.log(squares[a]);
        return squares[a];
      }
    }
    return null;
  }

  function restartGame() {
    setSquares(Array(9).fill(null));
    setisX(true);
  }

  return (
    <div className="w-80 h-screen bg-slate-200 text-center flex flex-col justify-center items-center sm:w-125 sm:h-full sm:rounded sm:pb-10">
      <h2 className="font-bold m-2 text-xl">Tic-tac-toe game</h2>
      <p className="font-semibold m-2 text-lg">
        Click a square to start the game.
      </p>
      <p className="font-semibold m-2 text-lg">{status}</p>
      <button onClick={restartGame} className="my-2">
        Restart
      </button>
      <div className="bg-slate-300 text-black rounded grid grid-cols-3 grid-rows-3 gap-0">
        {squares.map((el, id) => {
          return (
            <Square
              key={id}
              handleClick={handleClick}
              value={squares[id]}
              id={id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
