import { useContext } from 'react';
import { WordGameContext } from './Context';
import PhraseWord from './PhraseWord';

const Phrase = () => {
  const { activePhrase, activePhraseDesc } = useContext(WordGameContext);

  if (!activePhrase) {
    return (<div></div>);
  }
  const currentPhrase = activePhrase.split(' ');

  return (
    <div>
    <b>This idiom means: {activePhraseDesc}</b>
    <div id='phrase' className='section'>
      <ul>
        {
          currentPhrase.map((word, index) => {
            return <PhraseWord word={word} key={index}></PhraseWord>
          })
        }
      </ul>
    </div>
    </div>
  );
};

export default Phrase;
