import HangmanDrawing from "./GamePageElements/HangmanDrawing";
import HangmanWord from "./GamePageElements/HangmanWord";
import HangmanKeyboard from "./GamePageElements/HangmanKeyboard";
import bgImage from "../assets/images/mainScreen3.jpg";

type GamePageProps = {
  wordToGuess: string;
  guessedLetters: string[];
  incorrectLetters: string[];
  addGuessedLetter: (letter: string) => void;
  isWinner: boolean;
  isLoser: boolean;
  handleExit: () => void;
};

export default function GamePage({
  wordToGuess,
  guessedLetters,
  incorrectLetters,
  addGuessedLetter,
  isWinner,
  isLoser,
  handleExit,
}: GamePageProps) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5px",
        boxSizing: "border-box",
      }}
    >
      <img
        src={bgImage}
        alt="Lego City"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          objectFit: "cover",
          filter: "blur(3px)",
        }}
      />
      <button
        onClick={handleExit}
        className="exit-button"
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          fontSize: "1.5rem",
          fontWeight: "bold",
          zIndex: 1,
        }}
      >
        Exit
      </button>
      <div
        style={{
          maxWidth: "1100px",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Main content container */}
        <div
          style={{
            width: "100%",
            flex: "1 0 auto",
            padding: "10px 0",
          }}
        >
          {/* Hangman Drawing - Fixed height container */}
          <div
            style={{
              width: "100%",
              maxWidth: "660px",
              margin: "0 auto",
              position: "relative",
              height: "50vh",
              minHeight: "320px",
              marginBottom: "0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
          </div>

          {/* Word Display */}
          <div
            style={{
              width: "100%",
              maxWidth: "440px",
              margin: "0 auto 0",
              minHeight: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <HangmanWord
              guessedLetters={guessedLetters}
              wordToGuess={wordToGuess}
              reveal={isLoser}
            />
          </div>
        </div>

        {/* Keyboard - Fixed at bottom */}
        <div
          style={{
            width: "100%",
            maxWidth: "880px",
            margin: "0 auto",
            padding: "5px 0 0 0",
            position: "relative",
            flexShrink: 0,
            flex: "0 0 auto",
          }}
        >
          <HangmanKeyboard
            inactiveLetters={guessedLetters}
            addGuessedLetter={addGuessedLetter}
            disabled={isWinner || isLoser}
          />
        </div>
      </div>
    </div>
  );
}
