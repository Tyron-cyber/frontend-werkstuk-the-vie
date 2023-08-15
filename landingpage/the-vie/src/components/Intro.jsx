
import {motion} from 'framer-motion'
const Intro = () => {
    return ( <>
    <div className="intro">
       <center><motion.h1 className="heading"
        initial={{y:100, opacity:0}}
        animate={{y:0, opacity:1 }}
        transition={{duration:1.2}} 
        > THE VIE</motion.h1> </center>
        <motion.div 
        initial={{y:100, opacity:0}}
        animate={{y:0, opacity:1 }}
        transition={{duration:2}} >    
        <center><p style={{color:"black", width:"30%"}}>The Vie is een website die u meer zal vertellen over de begische rapper damso </p></center>
        </motion.div>
    </div>
   
    
    
    
    </> );
}
 
export default Intro;