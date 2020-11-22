import { useContext } from 'react';
import { WordGameContext } from './Context';
import Heart from './GameHeart';

const Scoreboard = () => {

  const { totalTries } = useContext(WordGameContext);

  const heartGroup = [];
  for (let i = 1; i <= totalTries; i++) {
    heartGroup.push(<Heart key={i} />);
  }
  
  return(
    <div id="scoreboard" className="section">
      <ol>
        {heartGroup}
      </ol>
    </div>
    
  );
};

export default Scoreboard;