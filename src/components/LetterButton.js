import {useContext} from 'react';
import { WordGameContext } from './Context';

const LetterButton = ({letterText}) => {
  const { selectedLetter } = useContext(WordGameContext);
  return (
  <button onClick={event => selectedLetter(event)}>{letterText}</button>
  );
};

export default LetterButton;