import HangmanDrawing from "./GamePageElements/HangmanDrawing";
import HangmanWord from "./GamePageElements/HangmanWord";
import HangmanKeyboard from "./GamePageElements/HangmanKeyboard";
import bgImage from '../assets/images/mainScreen.jpg';

type GamePageProps = {
    wordToGuess: string;
    guessedLetters: string[];
    incorrectLetters: string[];
    addGuessedLetter: (letter: string) => void;
    isWinner: boolean;
    isLoser: boolean;
    handleExit: () => void;
}

export default function GamePage({wordToGuess, guessedLetters, incorrectLetters, addGuessedLetter, isWinner, isLoser, handleExit}: GamePageProps) {
    
    return(
        <>
          <img 
            src={bgImage} 
            alt='Lego City' 
            style={{position: 'absolute', width: '100%', height: '100%', zIndex: -1, objectFit: 'cover', filter: 'blur(3px)'}} 
          />
          <button onClick={handleExit} className='exit-button' 
            style={{position:'absolute', top:'10px', right:'10px', fontSize:'1.5rem', fontWeight:'bold'}}
          >
            Exit
          </button>
          <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
          <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} reveal={isLoser}/>
          <div style={{ alignSelf: "stretch" }}>
            <HangmanKeyboard 
              inactiveLetters={guessedLetters} 
              addGuessedLetter={addGuessedLetter} 
              disabled={isWinner || isLoser} 
            />
          </div>
        </>
    )
}