import { useContext, useEffect, useRef } from 'react';
import { WordGameContext } from './Context/index';

const KeyboardButton = ({letterText}) => {
  const { checkLetter, gameResult } = useContext(WordGameContext);

  const button = useRef();

  useEffect(() => {
    if (gameResult) {
      button.current.disabled = false;
      button.current.classList.remove('chosen', 'wrong');
    }
  }, [gameResult]);

  return (
  <button ref={button} onClick={event => checkLetter(event)}>{letterText}</button>
  );
};

export default KeyboardButton;