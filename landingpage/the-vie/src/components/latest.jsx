import{motion} from 'framer-motion'
import pic from '../assets/la-rue.jpg'
import laRue from '../assets/LA-RUE.mp4'
import { useState } from 'react'
// import { useState } from 'react';

const Latest = () => {

    const [mutedVideo, setMutedVideo] = useState(true);

    return (  <>
    <div className="Latest">

    <motion.div className='laRue'>
        <img src={pic} alt="" />

        <h4>Gazo-La rue featuring Damso </h4>

    </motion.div>

<motion.div className='videoContainer'>

    <motion.div>
        <div>
    <video autoPlay loop muted={mutedVideo} >
                 <source src={laRue}/>
            </video>
        </div>

        <center>
            <div className='muteButtons'>
        <motion.button
        whileHover={{scale:1.3}}
        whileTap={{scale:.7}}
        onClick={() => setMutedVideo(true)} className={( mutedVideo ? "active" : "")}>
                Mute
            </motion.button>
            <motion.button 
            whileHover={{scale:1.3}}
            whileTap={{scale:.7}}
            onClick={() => setMutedVideo(false)} className={(! mutedVideo ? "active" : "")}>
                Unmute
            </motion.button>
        </div>
        </center>
        
    </motion.div>
    <motion.div 
    className='titleStyle2'>
   <h1>Nieuw</h1>
    </motion.div>

</motion.div>
    

    </div>
    </>);
}
 
export default Latest;