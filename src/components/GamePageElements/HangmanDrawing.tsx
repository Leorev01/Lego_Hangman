import legoHat from '../../assets/images/legoMan/legoHat.webp';
import legoHead from '../../assets/images/legoMan/legoHead.webp';
import legoTorso from '../../assets/images/legoMan/legoTorso.webp';
import legoHand from '../../assets/images/legoMan/legoHand2.png';
import legoLegs from '../../assets/images/legoMan/legoLegs.webp';
import legoCrane from '../../assets/images/legoCrane.png';
import {motion} from 'framer-motion';

{/*const HEAD = (
    <div style={{
        width:'50px',
        height:'50px',
        borderRadius:'50%',
        border: '10px solid black',
        position:'absolute',
        top:'50px',
        right:'-30px',
    }}/>
)
const BODY = (
    <div style={{
        width:'10px',
        height:'100px',
        background:'black',
        position:'absolute',
        top:'120px',
        right:0,
    }}/>
)
const RIGHT_ARM = (
    <div style={{
        width:'100px',
        height:'10px',
        background:'black',
        position:'absolute',
        top:'150px',
        right:'-100px',
        rotate:'-30deg',
        transformOrigin: 'left bottom'
    }}/>
)
const LEFT_ARM = (
    <div style={{
        width:'100px',
        height:'10px',
        background:'black',
        position:'absolute',
        top:'150px',
        right:'10px',
        rotate:'30deg',
        transformOrigin: 'right bottom'
    }}/>
)
const RIGHT_LEG = (
    <div style={{
        width:'100px',
        height:'10px',
        background:'black',
        position:'absolute',
        top:'210px',
        right:'-90px',
        rotate:'60deg',
        transformOrigin: 'left bottom'
    }}/>
)
const LEFT_LEG = (
    <div style={{
        width:'100px',
        height:'10px',
        background:'black',
        position:'absolute',
        top:'210px',
        right:0,
        rotate:'-60deg',
        transformOrigin: 'right bottom'
    }}/>
)

const BODY_PARTS=[
    HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG
]*/}

const LEGO_HAT = (
        <motion.img
            initial={{opacity:0}}
            animate={{opacity:1}}
            style={{ width:'110px',
            height:'110px',
            position:'absolute',
            top:'155px',
            right:'80px',
            zIndex:3}} src={legoHat} alt='Lego Hair'/> 
)
const LEGO_HEAD = (
        <motion.img
            initial={{opacity:0}}
            animate={{opacity:1}}
            style={{ width:'120px',
            height:'120px',
            position:'absolute',
            top:'152px',
            right:'75px',
            zIndex:2}}
            src={legoHead} alt='Lego Head'/> 
)
const LEGO_TORSO = (
        <motion.img
            initial={{opacity:0}}
            animate={{opacity:1}}
            style={{ width:'130px',
            height:'130px',
            position:'absolute',
            top:'200px',
            right:'70px',
            zIndex:1}}
            src={legoTorso} alt='Lego Body'/> 
)
const LEGO_LEFT_HAND = (
        <motion.img
            initial={{opacity:0}}
            animate={{opacity:1}}
            style={{ width:'45px',
            height:'45px',
            position:'absolute',
            top:'273px',
            right:'160px',
            transform:'scaleY(-1)',
            rotate:'-85deg',
            zIndex:3
        }} src={legoHand} alt='Lego Left Hand'/> 
)
const LEGO_RIGHT_HAND = (
        <motion.img
            initial={{opacity:0}}
            animate={{opacity:1}}
            style={{ width:'45px',
            height:'45px',
            position:'absolute',
            top:'273px',
            right:'65px',
            rotate:'-105deg',
            zIndex:3
        }} src={legoHand} alt='Lego Right Hand'/> 
)
const LEGO_LEGSS = (
        <motion.img
            initial={{opacity:0}}
            animate={{opacity:1}}
            style={{
            width:'130px',
            height:'130px',
            position:'absolute',
            top:'265px',
            right:'70px',
            zIndex:0
        }}
        src={legoLegs} alt='Lego Legs'/> 
)
const LEGO_BODY =[
    LEGO_HAT,
    LEGO_HEAD,
    LEGO_TORSO,
    LEGO_LEFT_HAND,
    LEGO_RIGHT_HAND,
    LEGO_LEGSS
]

type HangmanDrawingProps={
    numberOfGuesses:number;
}

export default function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps){
    return <div style={{position: 'relative'}}>
        {LEGO_BODY.slice(0, numberOfGuesses)}
        <motion.img
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}}
        src={legoCrane} alt='lego crane' style={{marginTop:-40, marginRight:'90px', zIndex:5, width:'600px', transform:'scaleX(-1)'}}/>
        {/*<div style={{height:'50px', width: '10px', background:'black', position:'absolute', top:0, right:0,zIndex:4}}/>
        <div style={{height:'10px', width: '200px', background:'black', marginLeft:'120px'}}/>
        <div style={{height:'400px', width:'10px', background: 'black', marginLeft: '120px'}}/>
        <div style={{height:'10px', width: '250px', background:'black'}}/>*/}
        
    </div>
}