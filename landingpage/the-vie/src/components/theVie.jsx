
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import logo from '../assets/white-logo-YT.png'
import Intro from './Intro'
import Story from './story'
import Latest from './latest'
import Socials from './socials'

import Credits from './credits'




const TheVie = () => {
    return ( <>

    <div className='content'>
      <Parallax  pages={5}>
        <ParallaxLayer >
        <Intro/>
        </ParallaxLayer>
        <ParallaxLayer 
        offset={1}
        speed={.1}
        >
        <Story/>
       </ParallaxLayer>
       <ParallaxLayer factor={2} offset={2} speed={.3}>
        <Latest/>
       </ParallaxLayer>
       <ParallaxLayer offset={3} speed={.6}>
        <Socials/>
       </ParallaxLayer>
        <ParallaxLayer offset={4} speed={.9}>
 
      <Credits></Credits>

      </ParallaxLayer>
      </Parallax>
    </div>

    </> );
}
 
export default TheVie;