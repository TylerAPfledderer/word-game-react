import { useContext, useEffect, useRef } from 'react';
import { WordGameContext } from './Context';

const PhraseLetter = ({ css, children }) => {
  const { selectedLetter, setSelectedLetter, gameResult } = useContext(
    WordGameContext
  );

  const letter = useRef();

  useEffect(() => {
    const { textContent, classList } = letter.current;
    const regex = new RegExp(`.*[${selectedLetter}].*`, 'i');

    // Null is interpreted as aa string value,
    // So check for null before running regex test
    if (selectedLetter && regex.test(textContent)) {
      classList.add('show');
    }

    if (gameResult) {
      letter.current.classList.remove('show');
      setSelectedLetter(null);
    }
  });

  return (
    <li className={css} ref={letter}>
      {children}
    </li>
  );
};

export default PhraseLetter;
