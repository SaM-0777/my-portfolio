import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";


const AboutProfile = [
  {title: "Web Development", description: "I am good Web developer", image: images.about01},
  {title: "Mobile Development", description: "I am good Mobile developer", image: images.about02},
  {title: "Full stack Development", description: "I am good full stack developer", image: images.about03},
  {title: "Machine Learning", description: "I am good Data Analyst", image: images.about04},
]

function About() {
  return (
    <div className="h-full w-full flex-1 flex-col flex items-center justify-center bg-[#edf2f8] snap-start" >
      <h4 className="md:text-[2.75rem] xl:[4rem] text-[2rem] font-[800] text-center text-[#030303] capitalize" >I know that <span className="text-[#313bac]" >Good Design</span> <br /> means <span>Good Business</span></h4>
      <div className="flex justify-center items-start flex-wrap mt-[2rem]" >
        {AboutProfile.map((item, i) => (
          <motion.div key={i.toString()} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }} className="w-[190px] flex justify-start items-start flex-col m-[2rem] 3xl:w-[370px] 3xl:my-[2rem] 3xl:mx-[4rem]" >
            <img src={item.image} alt={item.title} className="w-full h-[170px] 3xl:h-[320px] rounded-[15px] object-cover" />
            <h2 className="mt-[20px] text-[0.9rem] md:text-[1rem] 3xl:text-[2rem] font-[800] text-left text-[#030303]" >{item.title}</h2>
            <p className="text-[#6b7688] text-left leading-6 3xl:text-[2rem] text-[0.8rem]" >{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
};


export default About;

