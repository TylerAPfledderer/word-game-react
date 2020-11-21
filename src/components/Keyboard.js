import LetterButton from './LetterButton';

const Keyboard = () => {

  const row1 = "qwertyuiop".split("");
  const row2 = "asdfghjkl".split("");
  const row3 = "zxcvbnm".split("");

  /* 
   * Function to display the buttons in each row
   * Function needed because of the empty array variable and for loop
   *   cannot exist in the return.
   */
  function displayButtons(array) {
    const btnArray = [];
    for (let i = 0; i < array.length; i++) {
      btnArray.push(
        <LetterButton 
          key={i}
          letterText={array[i]}
        />
      );
    }

    return btnArray;
  }
  
  return (
    <div id="qwerty" className="section">
      <div className="keyrow">
        {displayButtons(row1)}
      </div>
      <div className="keyrow">
        {displayButtons(row2)}      
      </div>
      <div className="keyrow">
        {displayButtons(row3)}
      </div>
    </div>
  );

}

export default Keyboard;