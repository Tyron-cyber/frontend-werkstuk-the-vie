import { motion } from "framer-motion";
import youtube from "../assets/youtube.png";
import spotify from "../assets/spotify.png";
import insta from "../assets/insta.png";

const Socials = () => {
  return (
    <>
      <div className="section3">
        <motion.div className="title">
          <h1>Socials</h1>
        </motion.div>
        <div className="socials">
            
          <div className="links">

            
          <motion.div className="social" >

            <a href="https://www.youtube.com/@lerappeurdamso">  <motion.img src={youtube} alt=""  
            whileHover={{scale:1.3}}
            whileTap={{scale:.7}}/></a>
           
          </motion.div>
          <motion.div className="social">
            <a href="https://open.spotify.com/artist/2UwqpfQtNuhBwviIC0f2ie"><motion.img src={spotify} alt="" 
            whileHover={{scale:1.3}}
            whileTap={{scale:.7}} /></a>
            
          </motion.div>
          <motion.div className="social">
            <a href="https://www.instagram.com/thedamso/"><motion.img src={insta} alt="" 
            whileHover={{scale:1.3}}
            whileTap={{scale:.7}}/></a>
        
          </motion.div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Socials;
