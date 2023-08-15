import {motion} from 'framer-motion'
import image from '../assets/damso-black.jpg'
import StoryText from './storyText';

const Story = () => {

   

    return (<>
    <div >
    <div className='section2'>

<motion.div 

className='title'>
   <h1>Damso?</h1>
</motion.div>

<motion.div className="pics">
 <img src={image} alt="" />
</motion.div>
 <motion.div>
    <StoryText/>
 </motion.div>
 </div>
    </div>
    
    
    </>  );
}
 
export default Story;