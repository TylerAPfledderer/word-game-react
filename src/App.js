import StartOverlay from './components/StartOverlay';
import Phrase from './components/Phrase';
import Keyboard from './components/Keyboard';
import Scoreboard from './components/Scoreboard';

const App = () => {
  return (
    <div className='main-container'>
      <StartOverlay />
      <div id='banner' className='section'>
        <h3 className='header'>Idioms game</h3>
      </div>
      <Phrase />
      <Keyboard />
      <Scoreboard />
    </div>
  );
};

export default App;
