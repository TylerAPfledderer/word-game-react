import { useContext } from 'react';
import { WordGameContext } from './Context';

import liveHeart from '../images/liveHeart.png';
import lostHeart from '../images/lostHeart.png';

const Scoreboard = () => {
  const { misses, totalHearts } = useContext(WordGameContext);

  const heartList = [];

  for (let i = 1; i <= totalHearts; i++) {
    i <= misses ? heartList.push(lostHeart) : heartList.push(liveHeart);
  }

  return (
    <div id='scoreboard' className='section'>
      <ol>
        {heartList.map((heart, index) => {
          return (
            <li className='tries' key={index}>
              <img src={heart} alt='' height='35px' width='30px' />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Scoreboard;
