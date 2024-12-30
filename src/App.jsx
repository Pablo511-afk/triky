import { useState, useEffect } from "react";
import { WinnerModal } from "./components/WinnerModal";
import { Square } from "./components/Square";
import { TURNS } from "./constants";
import { handleWinner } from "./logic/HandleWinner";
import { Board } from "./components/Board";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { resetGame, saveGame } from "./logic/Storage";
import { usePointerMove } from "./hooks/UsePointerMove";

function App() {
  const [board, setBoard] = useState(() => {
    const board = window.localStorage.getItem("board");
    return board ? JSON.parse(board) : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turn = window.localStorage.getItem("turn");
    return turn ?? TURNS.X;
  });
  const [winner, setWinner] = useState(null);
  const { position } = usePointerMove();

  useEffect(() => {
    const cursorImage = turn === TURNS.X ? "../images/x.png" : "../images/o.png";

    document.body.style.cursor = `url(${cursorImage}), auto`;

    return () =>{ 
      document.body.style.cursor = '';
    }
  }, [turn])


  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    newBoard[index] = turn;
    setTurn(newTurn);
    setBoard(newBoard);
    handleWinner(newBoard, setWinner);
    saveGame({newBoard, newTurn});
  };

  const resetForm = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    resetGame();
  };

  return (
    <>
    <div
        className="cursor"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    <main className="board">
      <h1>Tryky</h1>
      <button onClick={resetForm}>
        <FontAwesomeIcon icon={faRotateRight} size="3x" />
      </button>
      <Board board={board} updateBoard={updateBoard} />

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetForm={resetForm} winner={winner} />
    </main>
    </>
  );
}

export default App;
