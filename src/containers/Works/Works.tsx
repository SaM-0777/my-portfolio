import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import { client, urlFor } from "../../utils/sanity/client";

import "./works.scss";


type WorksObjectType = {
  _id: string;
  /*_rev: string;
  _type: string;
  _updatedAt: string;*/
  title: string;
  description: string;
  imgUrl: object;
  codeLink: string;
  projectLink: string;
  tags: string[];
};

const MyWorks = ["Web Developer", "App Developer", "React-Redux", "MERN Stack", "All"]

function Works() {
  const [data, setData] = useState<WorksObjectType[]>([])
  const [filterWorks, setFilterWorks] = useState<WorksObjectType[]>([])
  const [activeFilter, setActiveFilter] = useState<string>("All")
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})

  function handleWorkFilter(item: string) {
    setActiveFilter(item)
    setAnimateCard({ y: 100, opacity: 0 })
    
    setTimeout(function () {
      setAnimateCard({ y: 0, opacity: 1 })
      if (item === 'All') {
        setFilterWorks(data)
      } else {
        setFilterWorks(data.filter(work => work.tags.includes(item)))
      }
    }, 500)
  }

  async function getData() {
    const query = '*[_type == "works"]'
    try {
      const response: WorksObjectType[] = await client.fetch(query)
      setData(response)
      setFilterWorks(response)
    } catch (error) {
      console.log("Error Works: ", error)
    }
  }

  useEffect(() => {
    getData()
    return () => {}
  }, [])
  

  return (
    <div className="w-full h-full flex-1 flex-col flex items-center justify-center snap-start xl:mt-0 md:mt-[5rem] mt-[2rem]">
      <h2 className="md:text-[2.75rem] xl:[4rem] text-[1.75rem] font-[800] text-center text-[#030303] capitalize">My Creative<span className="text-[#313bac]" > Portfolio</span> Section</h2>
      <div className="app__work-filter" >
        {MyWorks.map((item, i) => (
          <div key={i.toString()} onClick={() => handleWorkFilter(item)} className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`} >{item}</div>
        ))}
      </div>
      <motion.div animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }} className="app__work-portfolio" >
        {filterWorks.map((item, i) => (
          <div key={i.toString()} className="app__work-item app__flex" >
            <div className="app__work-img app__flex" >
              <img src={urlFor(item.imgUrl).toString()} alt={item.title} className="" />
              <motion.div whileHover={{ opacity: [0, 1] }} transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }} className="app__work-hover app__flex" >
                <a href={item.projectLink} target="_blank" rel="noreferrer" >
                  <motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }} className="app__flex" >
                    <AiFillEye className="w-1/2 h-1/2 text-[#FFFFFF]" />
                  </motion.div>
                </a>
                <a href={item.codeLink} target="_blank" rel="noreferrer" >
                  <motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }} className="app__flex" >
                    <AiFillGithub className="w-1/2 h-1/2 text-[#FFFFFF]" />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex" >
              <h4 className="bold-text" >{item.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }} >{item.description}</p>
              <div className="app__work-tag app__flex" >
                <p className="p-text" >{item.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
};


export default Works;

