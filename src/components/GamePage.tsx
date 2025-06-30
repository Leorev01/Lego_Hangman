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
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        overflow: "hidden",
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

      {/* Main content container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          flex: "1 0 auto",
          padding: "20px 0",
        }}
      >
        {/* Hangman Drawing - Full width container */}
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
            position: "relative",
            height: "50vh",
            minHeight: "300px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        </div>

        {/* Word Display - 30% width */}
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            margin: "0 auto 20px",
            minHeight: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HangmanWord
            guessedLetters={guessedLetters}
            wordToGuess={wordToGuess}
            reveal={isLoser}
          />
        </div>

        {/* Keyboard - Fixed height with auto margin */}
        <div
          style={{
            width: "100%",
            maxWidth: "800px",
            margin: "20px auto 0",
            padding: "10px 0",
            position: "relative",
            flexShrink: 0,
          }}
        >
          <HangmanKeyboard
            inactiveLetters={guessedLetters}
            addGuessedLetter={addGuessedLetter}
            disabled={isWinner || isLoser}
          />
        </div>
      </div>
      {/* Empty div to prevent content from being hidden behind fixed elements */}
      <div style={{ height: "20px", flexShrink: 0 }} />
    </div>
  );
}
