import React, { useState } from "react";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    if (board[i]) return;
    const nextBoard = board.slice();
    nextBoard[i] = xIsNext ? "X" : "O";
    setBoard(nextBoard);
    setXIsNext(!xIsNext);
  };

  return (
    <div>
      <h3>Tic-Tac-Toe</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 60px)",
          gap: "5px",
          justifyContent: "center",
        }}
      >
        {board.map((val, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            style={{ height: "60px", fontSize: "24px" }}
          >
            {val}
          </button>
        ))}
      </div>
      <button
        className="delete"
        style={{ marginTop: "10px" }}
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Újra
      </button>
    </div>
  );
}

export default TicTacToe;
