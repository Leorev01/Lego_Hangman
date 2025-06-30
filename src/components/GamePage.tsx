import HangmanDrawing from "./GamePageElements/HangmanDrawing";
import HangmanWord from "./GamePageElements/HangmanWord";
import HangmanKeyboard from "./GamePageElements/HangmanKeyboard";
import bgImage from "../assets/images/mainScreen.jpg";

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
        padding: "10px",
        boxSizing: "border-box",
        backgroundColor: "rgba(0,0,0,0.1)", // For debugging
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
          maxWidth: "100%",
          width: "1000px",
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
            padding: "20px 0",
          }}
        >
          {/* Hangman Drawing - Fixed height container */}
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
              margin: "0 auto",
              position: "relative",
              height: "40vh",
              minHeight: "250px",
              marginBottom: "10px",
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
              maxWidth: "400px",
              margin: "0 auto 10px",
              minHeight: "60px",
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
            maxWidth: "800px",
            margin: "auto auto 10px",
            padding: "5px 0",
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
