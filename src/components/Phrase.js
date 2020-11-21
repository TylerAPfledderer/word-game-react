import { useContext } from 'react';
import { WordGameContext } from './Context';

const Phrase = () => {

  const {currentPhrase} = useContext(WordGameContext);
  
  return (
    <div id="phrase" className="section">
      <ul>
        {currentPhrase}
      </ul>
    </div>
  );
}

export default Phrase;