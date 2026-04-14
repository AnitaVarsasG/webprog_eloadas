import React, { useState } from "react";
import TicTacToe from "./components/TicTacToe";
import Calculator from "./components/Calculator";

function SpaApp() {
  
  const [page, setPage] = useState("tictactoe");

  return (
    <main>
      <div className="card">
        <h2>Single Page Application (SPA)</h2>
        <div style={{ marginBottom: "20px" }}>
          <button
            className="add"
            style={{ marginRight: "10px" }}
            onClick={() => setPage("tictactoe")}
          >
            Amőba (Tic-Tac-Toe)
          </button>
          <button className="add" onClick={() => setPage("calculator")}>
            Számológép
          </button>
        </div>

        
        <div
          className="game-container"
          style={{ borderTop: "1px solid #ddd", paddingTop: "20px" }}
        >
          {page === "tictactoe" ? <TicTacToe /> : <Calculator />}
        </div>
      </div>
    </main>
  );
}

export default SpaApp;
