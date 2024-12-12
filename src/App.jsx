import { useState } from "react";
import { WinnerModal } from "./components/WinnerModal";
import { Square } from "./components/Square";
import { TURNS } from "./constants";
import { handleWinner } from "./logic/HandleWinner";
import { Board } from "./components/Board";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
    setBoard(newBoard);
    handleWinner(newBoard, setWinner);
  };

  const resetForm = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  return (
    <main className="board">
      <h1>Tryky</h1>
      <button>
        <FontAwesomeIcon onClick={resetForm} icon={faRotateRight} size="3x" />
      </button>
      <Board board={board} updateBoard={updateBoard} />

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetForm={resetForm} winner={winner} />
    </main>
  );
}

export default App;
