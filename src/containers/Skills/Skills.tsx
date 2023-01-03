import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import { client, urlFor } from "../../utils/sanity/client";

import "./skills.scss";


type SkillObjectType = {
  _id: string;
  /*_rev: string;
  _type: string;
  _updatedAt: string;*/
  name: string;
  icon: object;
  bgColor: string;
};

type WorkExpObjectType = {
  _id: string;
  /*_rev: string;
  _type: string;
  _updatedAt: string;*/
  name: string;
  company: string;
  desc: string;
};

type ExpObjectType = {
  _id: string;
  /*_rev: string;
  _type: string;
  _updatedAt: string;*/
  year: string;
  works: WorkExpObjectType[];
};

function Skills() {
  const [skillData, setSkillData] = useState<SkillObjectType[]>([])
  const [expData, setExpData] = useState<ExpObjectType[]>([])

  async function getData() {
    const experiencesQuery = '*[_type == "experiences"]'
    const skillQuery = '*[_type == "skills"]'

    try {
      const experiencesResponse: ExpObjectType[] = await client.fetch(experiencesQuery)
      const skillResponse: SkillObjectType[] = await client.fetch(skillQuery)
      setSkillData(skillResponse)
      setExpData(experiencesResponse)
      // console.log(experiencesResponse)
      // console.log(skillResponse)
    } catch (error) {
      console.log("Error fetching Exp & Skill: ", error)
    }
  }

  useEffect(() => {
    getData()
    return () => {}
  }, [])

  return (
    <div id="Skills" className="w-full h-full flex-1 flex-col flex items-center justify-center snap-start xl:mt-0 md:mt-[5rem] mt-[2rem]" >
      <h2 className="head-text" >Skill & Experiences</h2>
      <div className="app__skills-container" >
        <motion.div className="app__skills-list" >
          {skillData?.map((item, index) => (
            <motion.div key={index.toString()} whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex" >
              <div className="app__flex" style={{ backgroundColor: item.bgColor || "#FFFFFF" }} >
                <img src={urlFor(item.icon).toString()} alt={item.name} className="" />
              </div>
              <p className="p-text" >{item.name}</p>
            </motion.div>  
          ))}
        </motion.div>
        <div className="app__skills-exp" >
          {expData.map((exp, i) => (
            <motion.div key={i.toString()} className="app__skills-exp-item" >
              <div className="app__skills-exp-year" >
                <p className="bold-text" >{exp.year}</p>
              </div>
              <motion.div className="app__skills-exp-works" >
                {exp.works.map((item, i) => (
                  <div key={i.toString()} >
                    <motion.div id="tooltip-anchor" whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-exp-work" >
                      <h4 className="bold-text" >{item.name}</h4>
                      <p className="p-text" >{item.company}</p>
                    </motion.div>
                    {/*<ReactTooltip anchorId="tooltip-anchor" id={item.name} className="max-w-[300px] bg-white text-[#6b7688] shadow-xl rounded-xl p-4 text-center leading-[1.5] opacity-100" />*/}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
};


export default Skills;

