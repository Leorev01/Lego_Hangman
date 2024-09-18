import { useState, useEffect, useCallback, useRef } from "react";
import words from './wordList.json';
import StartPage from "./components/StartPage";
import GamePage from "./components/GamePage";
import Modal from './components/Modal';
import './index.css';
import loserAudio from './assets/audio/robloxDeath.mp4';
import winnerAudio from './assets/audio/marioWinner.mp3';
import useSound from "use-sound";
import { AnimatePresence } from "framer-motion";

function App() {

  const [playLoserSound] = useSound(loserAudio, {seek: 1});
  const [playWinnerSound, {stop: stopWinnerSound}] = useSound(winnerAudio);
  const modalRef = useRef<HTMLDialogElement>(null);

  const [started, setStarted] = useState(false);

  function handleStart(){
    setStarted(true);
  }

  function handleContinue(){
    setGuessedLetters([]);
    setWordToGuess(getWord());
    stopWinnerSound();
    return;
  }
  
  function handleExit(){
    setStarted(false);
    setWordToGuess(getWord());
    setGuessedLetters([]);
    stopWinnerSound();
  }

  function getWord(){
    return words[Math.floor(Math.random() * words.length)];
  }

  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));
  const isLoser = incorrectLetters.length === 6;
  const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter) || isLoser || isWinner) return;
    setGuessedLetters(prevLetters => [...prevLetters, letter]);
  }, [guessedLetters, isLoser, isWinner]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase(); // Handle case-insensitivity

      // Handle "Escape" key to reset or exit
      if (key === 'escape') {
        handleExit();
        return;
      }

      // Handle "Enter" key to restart the game
      if (key === 'enter') {
        event.preventDefault();
        handleContinue();
        return;
      }

      // Handle letter guesses
      if (!key.match(/^[a-z]$/)) return; // Only allow a-z letters

      event.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [addGuessedLetter]);

  useEffect(() => {
    if (isLoser || isWinner) {
      // Show the modal when the game is won or lost
      if (modalRef.current) {
        modalRef.current.showModal();
      }
    }
  }, [isLoser, isWinner]);

 return (
  <>
    <div style={{
      maxWidth: '800px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      margin: '0 auto',
      alignItems: 'center'}}>
      
      <div style={{fontSize: '2rem', textAlign: 'center'}}>
        <AnimatePresence>
          {isLoser && (
            <>
              {playLoserSound()}
              <Modal ref={modalRef} next={handleContinue} exit={handleExit}>
                <h3>You Lost</h3>
              </Modal>
            </>
          )}
          {isWinner && (
            <>
              {playWinnerSound()}
              <Modal ref={modalRef} next={handleContinue} exit={handleExit}>
                <h3>You Won!</h3>
              </Modal>
            </>
          )}
        </AnimatePresence>
      </div>
      
      {started && (
        <GamePage wordToGuess={wordToGuess} guessedLetters={guessedLetters} incorrectLetters={incorrectLetters} addGuessedLetter={addGuessedLetter} isWinner={isWinner} isLoser={isLoser} handleExit={handleExit}/>
      )}
      
      {!started && <StartPage startGame={handleStart} />}
    </div>
  </>
 );
}

export default App;
