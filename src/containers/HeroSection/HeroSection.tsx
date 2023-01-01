import { motion } from "framer-motion";

import { SkillCard } from "../../components";
import { images } from "../../constants";

import "./herosection.scss";


function HeroSection() {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      trasition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <div id="Home" className="relative bg-cover bg-repeat bg-center mt-10 flex-3 w-full h-full" >
      <div className="flex justify-between items-center mx-10" >
        <motion.div whileInView={{ y: [50, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className="flex flex-1 flex-col justify-start items-start" >
          <h3 className="text-[20px] font-bold" >Hello, I am</h3>
          <h1 className="text-[48px] font-extrabold" >SAM.DEV</h1>
          <p className="text-[12px]" >Web & App developer with 2 years experience designing and building full stack applications. I have fun developing quality & helpful products.</p>
        </motion.div>
        <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5, delayChildren: 0.5 }} className="relative flex-1" >
          <img src={images.profile} alt="profile" className="object-contain w-full z-[1]" />
          <motion.img whileInView={{ scale: [0, 1] }} transition={{ duration: 1, ease: 'easeInOut' }} src={images.circle} alt="profile-circle" className="absolute left-0 right-0 top-[-70px] z-[-1] w-full h-full" />
        </motion.div>
        <div className="flex-1 flex justify-center" >
          <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className="grid grid-cols-2" >
            <div className="col-start-1 col-span-1" >
              <SkillCard image={images.webDeveloper} title={"Full-Stack Developer"} />
            </div>
            <div className="col-start-1 col-span-1" />
            <div className="col-start-2 col-span-1" >
              <SkillCard image={images.machineLearning} title={"Machine Learning"} />
            </div>
            <div className="col-start-1 col-span-1" >
              <SkillCard image={images.appDeveloper} title={"Application Developer"} />
            </div>
          </motion.div>
        </div>
      </div>          
    </div>
  )
};


export default HeroSection;

