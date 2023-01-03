import { motion } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";


function SocialMedia() {
  return (
    <div className="app__social fixed bottom-0 gap-2 z-50">
      <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3, type: 'tween' }} className="hover:shadow-lg transition-shadow duration-300" >
        <SiGmail color="#c71610" />
      </motion.div>
      <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3, type: 'tween' }} className="hover:shadow-lg transition-shadow duration-300" >
        <BsGithub color="#030303" />
      </motion.div>
      <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3, type: 'tween' }} className="hover:shadow-lg transition-shadow duration-300" >
        <BsLinkedin color="#0A66C2" />
      </motion.div>
    </div>
  )
};


export default SocialMedia;

