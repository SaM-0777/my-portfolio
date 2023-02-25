import { motion } from "framer-motion";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";


function SocialMedia() {
  return (
    <div className="app__social fixed bottom-0 gap-2 z-50">
      <a href="mailto:sam.2.3.4.5.ranjan@gmail.com" rel="noreferrer" >
        <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3, type: 'tween' }} className="hover:shadow-lg transition-shadow duration-300" >
            <SiGmail color="#c71610" />
        </motion.div>
      </a>
      <a href="https://github.com/SaM-0777" target="_blank" rel="noreferrer" >
        <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3, type: 'tween' }} className="hover:shadow-lg transition-shadow duration-300" >
            <BsGithub color="#030303" />
        </motion.div>
      </a>
      <a href="https://www.linkedin.com/in/sam-07-dev" target="_blank" rel="noreferrer" >
        <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3, type: 'tween' }} className="hover:shadow-lg transition-shadow duration-300" >
            <BsLinkedin color="#0A66C2" />
        </motion.div>
      </a>
      <a href="https://www.instagram.com/realmwave" target="_blank" rel="noreferrer" >
        <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3, type: 'tween' }} className="hover:shadow-lg transition-shadow duration-300" >
            <BsInstagram color="#d62976" />
        </motion.div>
      </a>
    </div>
  )
};


export default SocialMedia;

