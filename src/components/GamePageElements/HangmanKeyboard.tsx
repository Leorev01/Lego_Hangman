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
    return <div style={{display:'grid',
        gridTemplateColumns:'repeat(auto-fit, minmax(55px, 1fr))',
        gap:'.5rem'}}>
            {KEYS.map((key) => {
                
                return(<button
                    onClick={()=> addGuessedLetter(key)}
                    className={inactiveLetters.includes(key) ? `${classes.btn} ${classes.inactive}` : `${classes.btn} ${classes.active}`}
                    key={key}
                    disabled={inactiveLetters.includes(key)  || disabled}
                    >
                        {key}
                    </button>)
            })}
        </div>
}