import fireworks from "fireworks";
import { WINNER_COMBOS } from "../constants";

export
  const handleWinner = (bordToCheck = [], setWinner) => {
    const hasNull = bordToCheck.filter((record) => record === null).length;

    for (const combos of WINNER_COMBOS) {
      const [a, b, c] = combos;

      if (
        bordToCheck[a] &&
        bordToCheck[b] === bordToCheck[a] &&
        bordToCheck[c] === bordToCheck[a]
      ) {
        setWinner(bordToCheck[a]);
        fireworks({
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
        });
      } else if (!hasNull) {
        setWinner(false);
      }
    }
  };