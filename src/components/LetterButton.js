const LetterButton = ({selected, letterText}) => {
  return (
  <button onClick={selected()}>{letterText}</button>
  );
};

export default LetterButton;