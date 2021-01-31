import { useContext, useEffect, useRef } from 'react';
import { WordGameContext } from './Context';
import phraseList from '../data/phraseList';

/**
 * Function to make sure result passed is 'win' or 'lose'. Else, do not add CSS class to overlay.
 * @param {String} result - The value in the gameResult state
 */
const checkGameResult = (result) => {
  if (result === 'win' || result === 'lose') {
    return result;
  }

  return ''; // Do not return null or undefined.
};

const resultMessage = (result) => {
  if (result === 'win') {
    return "You've Won! Play again?";
  }

  if (result === 'lose') {
    return 'Game Over. Try again?';
  }
};

const StartOverlay = () => {
  const { gameResult, declareActivePhrase, updateGameResult } = useContext(
    WordGameContext
  );

  const overlay = useRef();

  const startGame = () => {
    updateGameResult(null);
    declareActivePhrase(phraseList());
    overlay.current.style.display = 'none';
  };

  useEffect(() => {
    if (gameResult) {
      overlay.current.style.display = 'flex';
    }
  }, [gameResult]);

  return (
    <div
      id='overlay'
      ref={overlay}
      className={`start ${gameResult ? checkGameResult(gameResult) : ''}`}
    >
      <h2 className='title'>Wheel of Success</h2>
      <h3>{gameResult ? resultMessage(gameResult) : ''}</h3>
      <button className='btn__reset' onClick={() => startGame()}>
        {gameResult ? 'New Game' : 'Start Game'}
      </button>
    </div>
  );
};

export default StartOverlay;
