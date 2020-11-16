const StartOverlay = ({overlayDisplay, title}) => {

  const hideOverlay = () => {
    overlayDisplay.style.display = "none";
  }
  return (
    <div id="overlay" className="start">
      <h2 className="title">{title}</h2>
      <h3>&nbsp;</h3>
      <button className="btn__reset" onClick={hideOverlay}>Start Game</button>
    </div>
  );
};

export default StartOverlay;