import BgImage from  '../assets/images/startScreen2.jpg';
import btnImage from  '../assets/images/legoBrick.png';
import { useEffect } from 'react';
import {motion} from 'framer-motion';

export default function StartPage({startGame}: {startGame: () => void}){

    useEffect(()=>{
        const handleKeyDown = (event: KeyboardEvent) => {
            if(event.key === 'Enter'){
                startGame();
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    },[startGame])

    return(
        <>  
        <img src={BgImage} alt='Lego City'
            style={{position: 'absolute', width: '100%', height: '100%', zIndex: -1, objectFit: 'cover', filter: 'blur(3px)'}}/>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}
            style={{ textAlign: "center", position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, backgroundColor: 'white', border: '3px solid black', padding:'2rem', borderRadius: '1rem'}}>
                <h1 className='legoFont'>welcome to Lego Hangman</h1>
                <div className='startBtn' style={{position: 'relative', display: 'inline-block'}}>
                <img onClick={startGame} src={btnImage} alt='Lego Brick' style={{width: '10rem', height: '10rem', position: 'relative'}}/>
                <div 
                        style={{ 
                            position: 'absolute', 
                            top: '50%', 
                            left: '50%', 
                            transform: 'translate(-50%, -50%)', 
                            color: 'black', 
                            fontSize: '2rem', 
                            fontWeight: 'bold', 
                            zIndex: 2,
                            pointerEvents: 'none',
                            fontFamily: 'Londrina Solid'
                        }}
                    >
                        Start
                    </div>
                </div>
                {/*<button onClick={startGame} className='button'
                style={{padding: '1rem', fontSize: '1.5rem', fontWeight: 'bold', margin: '2rem'}}>Start</button>*/}
            </motion.div>
        </>
    )
}