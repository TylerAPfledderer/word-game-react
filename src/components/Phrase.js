const Phrase = ({currentPhrase}) => {
  return (
    <div id="phrase" className="section">
      <ul>
        {currentPhrase}
      </ul>
    </div>
  );
}

export default Phrase;