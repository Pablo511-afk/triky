import PropTypes from "prop-types";
export function Square({ children, updateBoard, index, isSelected }) {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleOnClick = () => {
    updateBoard(index);
  };
  return (
    <div className={className} onClick={handleOnClick}>
      {children}
    </div>
  );
}

Square.propTypes = {
  children: PropTypes.node,
  updateBoard: PropTypes.func,
  index: PropTypes.number,
  isSelected: PropTypes.bool,
};
