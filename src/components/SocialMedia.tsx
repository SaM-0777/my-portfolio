import { motion } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";


function SocialMedia() {
  return (
    <div className="app__social fixed bottom-0 gap-2 z-50">
      <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3, type: 'tween' }} className="hover:shadow-lg transition-shadow duration-300" >
        <a href="mailto:sam.2.3.4.5.ranjan@gmail.com"  rel="noreferrer" >
          <SiGmail color="#c71610" />
        </a>
      </motion.div>
      <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3, type: 'tween' }} className="hover:shadow-lg transition-shadow duration-300" >
        <a href="https://github.com/SaM-0777" target="_blank"  rel="noreferrer" >
          <BsGithub color="#030303" />
        </a>
      </motion.div>
      <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3, type: 'tween' }} className="hover:shadow-lg transition-shadow duration-300" >
        <a href="www.linkedin.com/in/sam-07-dev" target="_blank" rel="noreferrer" >
          <BsLinkedin color="#0A66C2" />
        </a>
      </motion.div>
    </div>
  )
};


export default SocialMedia;

