import PhraseLetter from "./PhraseLetter";

const PhraseWord = ({word}) => {
    console.log("render word: " + word);
    return (
        <li className='word'>
            {word.split('').map((letter, index) => {
                return <PhraseLetter css='letter' key={index}>
                    {letter}
                </PhraseLetter>
            })}
            <PhraseLetter css='space'></PhraseLetter>
        </li>
    );
};

export default PhraseWord;
