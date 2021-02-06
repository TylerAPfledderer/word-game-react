import { useContext } from 'react';
import { WordGameContext } from './Context';
import PhraseLetter from './PhraseLetter';

const Phrase = () => {
  const { activePhrase, activePhraseDesc } = useContext(WordGameContext);

  const currentPhrase = activePhrase && activePhrase.split('');

  return (
    <div>
    <b>This idiom means: {activePhraseDesc}</b>
    <div id='phrase' className='section'>
      <ul>
        {activePhrase &&
          currentPhrase.map((letter, index) => {
            return letter === ' ' ? (
              <PhraseLetter css='space' key={index}>
                &nbsp;
              </PhraseLetter>
            ) : (
              <PhraseLetter css='letter' key={index}>
                {letter}
              </PhraseLetter>
            );
          })}
      </ul>
    </div>
    </div>
  );
};

export default Phrase;
