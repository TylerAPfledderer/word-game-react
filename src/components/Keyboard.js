import KeyboardButton from './KeyboardButton';

const Keyboard = () => {

  const keyboardRows = [
    ["q","w","e","r","t","y","u","i","o","p"],
    ["a","s","d","f","g","h","j","k","l"],
    ["z","x","c","v","b","n","m"]
  ];

  // To support mobile
  const chars = [
    "q","w","e","r","t","y","u","i","o","p", "a","s","d","f","g","h","j","k","l", "z","x","c","v","b","n","m"
  ];
  const n = 6;
  const mobile_keyboardRows = new Array(Math.ceil(chars.length / n))
  .fill()
  .map(_ => chars.splice(0, n))
  
  return (
    <div id="qwerty" className="section">
      {mobile_keyboardRows.map((row, id) => {
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