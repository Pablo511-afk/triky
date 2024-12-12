import { Square } from "./Square";
import PropTypes from "prop-types";

export function WinnerModal({ winner, resetForm }) {
  if (winner === null) return null;
  return (
    <section className="winner">
      <div className="text">
        <h2>{winner === false ? "Empate" : "Ganó:"}</h2>

        {winner && (
          <header className="win">
            <Square>{winner}</Square>
          </header>
        )}

        <footer>
          <button onClick={resetForm}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}

WinnerModal.propTypes = {
  winner: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.node,
  ]),
  resetForm: PropTypes.func,
};
