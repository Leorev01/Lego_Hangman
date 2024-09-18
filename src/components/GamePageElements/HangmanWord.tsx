type HangmanWordProps={
    guessedLetters:string[];
    wordToGuess:string;
    reveal?:boolean;
}

export default function HangmanWord({guessedLetters, wordToGuess, reveal=false}: HangmanWordProps){

    return(
        <div style={{display:'flex', gap:'.25em', fontSize:'6rem', 
        fontWeight:'bold', textTransform:'uppercase', fontFamily:'monospace'}}>
            
            {wordToGuess.split('').map((letter, index) => (
                <span key={index} style={{borderBottom: '.1em solid black', width: '50px', textAlign:'center'}}>
                    <span style={{visibility:guessedLetters.includes(letter) || reveal? 'visible': 'hidden', color: !guessedLetters.includes(letter)? 'red':'black', fontFamily:'Londrina Solid'}}>{letter}</span>
                </span>
            ))}
        </div>
    )
}