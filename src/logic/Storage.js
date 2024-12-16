export const saveGame = ({ newBoard, turn }) => {
  window.localStorage.setItem("board", JSON.stringify(newBoard));
  window.localStorage.setItem("turn", turn);
};

export const resetGame = () => {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
};