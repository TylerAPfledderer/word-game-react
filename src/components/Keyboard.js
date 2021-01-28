import KeyboardButton from './KeyboardButton';

const Keyboard = () => {

  const keyboardRows = [
    ["q","w","e","r","t","y","u","i","o","p"],
    ["a","s","d","f","g","h","j","k","l"],
    ["z","x","c","v","b","n","m"]
  ];
  
  return (
    <div id="qwerty" className="section">
      {keyboardRows.map((row, id) => {
        return <div className="keyrow" key={id}>
          {row.map((key, index) => {
            return <KeyboardButton key={index} letterText={key} />
          })}
        </div>
      })}
    </div>
  );

}

export default Keyboard;