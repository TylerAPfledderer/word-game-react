import StartOverlay from './components/StartOverlay';
import Phrase from './components/Phrase';
import Keyboard from './components/Keyboard';
import Scoreboard from './components/Scoreboard';

const App = () => {
  return (
    <div className='main-container'>
      <StartOverlay />
      <div id='banner' className='section'>
        <h2 className='header'>Wheel of Success</h2>
      </div>
      <Phrase />
      <Keyboard />
      <Scoreboard />
    </div>
  );
};

export default App;
