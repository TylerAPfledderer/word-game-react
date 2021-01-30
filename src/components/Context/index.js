import { createContext, useEffect, useState } from 'react';

export const WordGameContext = createContext();

export const Provider = ({ children }) => {
  const [misses, setMiss] = useState(0);
  const [correct, setCorrect] = useState(0);

  const [activePhrase, setActivePhrase] = useState(null);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(null);
  const [gameResult, updateGameResult] = useState(null);

  const [selectedLetter, setSelectedLetter] = useState(null);

  const totalHearts = 5;

  useEffect(() => {
    if (misses === totalHearts) {
      updateGameResult('lose');
    }

    if (activePhrase) {
      const phraseNoSpace = activePhrase.split(' ').join('').toLowerCase();

      const phraseNoDuplicates = phraseNoSpace
        .split('')
        .filter((c, index) => phraseNoSpace.indexOf(c) === index)
        .join('');
      const phraseLength = phraseNoDuplicates.length;

      if (correct === phraseLength) {
        updateGameResult('win');
      }
    }

    if (gameResult) {
      setActivePhrase(null);
      setMiss(0);
      setCorrect(0);
    }
  }, [correct, misses, activePhrase, gameResult]);

  //==== Action Functions ====//

  /**
   * Function to choose random phrase and check if it was already already used in previous game
   * @param {Array} phraseList - Total number of phrases to choose from
   */
  function declareActivePhrase(phraseList) {
    let randomIndex = Math.floor(Math.random() * phraseList.length);
    // Do not allow a phrase to be repeated twice
    if (randomIndex === currentPhraseIndex) {
      randomIndex++;
    }
    const randomPhrase = phraseList[randomIndex];

    setCurrentPhraseIndex(randomIndex);
    setActivePhrase(randomPhrase);
  }

  /**
   * Function to compare selected letter  with letter in the phrase
   * @param {HTMLElement} event.target - the button element that was selected
   */
  function checkLetter({ target }) {
    const regex = new RegExp(`.*[${target.textContent}].*`, 'i');
    target.disabled = true;

    if (!regex.test(activePhrase)) {
      setMiss(misses + 1);
      target.classList.add('wrong');
      return;
    }

    setSelectedLetter(target.textContent);
    setCorrect(correct + 1);
    target.classList.add('chosen');
  }

  return (
    <WordGameContext.Provider
      value={{
        declareActivePhrase,
        activePhrase,
        gameResult,
        updateGameResult,
        misses,
        checkLetter,
        selectedLetter,
        setSelectedLetter,
        totalHearts,
      }}
    >
      {children}
    </WordGameContext.Provider>
  );
};
