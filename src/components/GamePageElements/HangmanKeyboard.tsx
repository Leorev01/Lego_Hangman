import classes from "./HangmanKeyboard.module.css"

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
  
type KeyboardProps={
    inactiveLetters: string[];
    addGuessedLetter: (letter:string)=> void;
    disabled?: boolean;
}

export default function HangmanKeyboard({inactiveLetters, addGuessedLetter, disabled=false}: KeyboardProps){
    // Split keys into two rows
    const firstRow = KEYS.slice(0, 13); // A-M
    const secondRow = KEYS.slice(13);   // N-Z
    
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0.5rem',
            boxSizing: 'border-box'
        }}>
            {/* First row */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%'
            }}>
                {firstRow.map((key) => (
                    <button
                        key={key}
                        onClick={() => addGuessedLetter(key)}
                        className={inactiveLetters.includes(key) ? `${classes.btn} ${classes.inactive}` : `${classes.btn} ${classes.active}`}
                        disabled={inactiveLetters.includes(key) || disabled}
                        style={{
                            flex: '1 0 calc(7.69% - 0.5rem)', // 100% / 13 keys - gap
                            maxWidth: '50px',
                            minWidth: '30px',
                            aspectRatio: '1',
                            fontSize: '1.5rem'
                        }}
                    >
                        {key}
                    </button>
                ))}
            </div>
            
            {/* Second row */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%'
            }}>
                {secondRow.map((key) => (
                    <button
                        key={key}
                        onClick={() => addGuessedLetter(key)}
                        className={inactiveLetters.includes(key) ? `${classes.btn} ${classes.inactive}` : `${classes.btn} ${classes.active}`}
                        disabled={inactiveLetters.includes(key) || disabled}
                        style={{
                            flex: '1 0 calc(7.69% - 0.5rem)', // 100% / 13 keys - gap
                            maxWidth: '50px',
                            minWidth: '30px',
                            aspectRatio: '1',
                            fontSize: '1.5rem'
                        }}
                    >
                        {key}
                    </button>
                ))}
            </div>
        </div>
    )
}