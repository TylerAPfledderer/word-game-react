import { useContext } from 'react';
import { WordGameContext } from './Context';
import PhraseLetter from './PhraseLetter';

const Phrase = () => {
  const { activePhrase } = useContext(WordGameContext);

  const currentPhrase = activePhrase && activePhrase.split('');

  return (
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
  );
};

export default Phrase;
