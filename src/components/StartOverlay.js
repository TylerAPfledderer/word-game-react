import { useContext, useRef } from 'react';
import { WordGameContext } from './Context';

const StartOverlay = () => {

  const overlayDisplay = useRef(null);
  const {overlayTitle} = useContext(WordGameContext);

  const hideOverlay = () => {
    overlayDisplay.current.style.display = "none";
  }
  return (
    <div id="overlay" ref={overlayDisplay} className="start">
      <h2 className="title">{overlayTitle}</h2>
      <h3>&nbsp;</h3>
      <button className="btn__reset" onClick={() => hideOverlay()}>Start Game</button>
    </div>
  );
};

export default StartOverlay;