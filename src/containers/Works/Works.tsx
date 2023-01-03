import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import { client, urlFor } from "../../utils/sanity/client";


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
  const [activeFilter, setActiveFilter] = useState(4)
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})

  function handleWorkFilter(item: string) {
    // console.log(item)
  }

  async function getData() {
    const query = '*[_type == "works"]';
    try {
      const response: WorksObjectType[] = await client.fetch(query);
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
      <div className="flex justify-start items-center flex-wrap gap-[4rem]" >
        {MyWorks.map((item, i) => (
          <div key={i.toString()} onClick={() => handleWorkFilter(item)} className={`py-[0.5rem] px-[1rem] rounded-lg text-[#000] font-[800] cursor-pointer transition-all duration-300 ease-in m-2 hover:bg-[#313bac] hover:text-[#FFF] hover:opacity-70 xl:px-8 xl:py-4 app__flex p-text ${activeFilter === i ? "bg-[#313bac] text-[#FFF]" : "bg-[#FFF]"}`} >{item}</div>
        ))}
      </div>
      <motion.div animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }} className="flex flex-wrap justify-center items-center" >
        {filterWorks.map((item, i) => (
          <div key={i.toString()} className="sm:w-[270px] w-full flex-col sm:m-8 m-4 p-4 rounded-lg bg-[#FFFFFF] cursor-pointer transition-all duration-300 ease-in hover:shadow-xl 3xl:w-[470px] 3xl:p-5 3xl:rounded-2xl app_flex" style={{ color: "#000000" }} >
            <div className="w-full h-[130px] 3xl:h-[350px] relative app__flex" >
              <img src={urlFor(item.imgUrl).toString()} alt={item.title} className="w-full h-full rounded-lg object-contain" />
              <motion.div whileHover={{ opacity: [0, 1] }} transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0 }} className="absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-[rgba(0, 0, 0, 0.5)] rounded-lg transition-all duration-300 ease-in app__flex" >
                <a href={item.projectLink} target="_blank" rel="noreferrer" >
                  <motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }} className="app__flex w-[50px] h-[50px] rounded-full bg-[rgba(0, 0, 0, 0.5)] text-[#FFFFFF] m-4 font-[800] font-['DM Sans'] font-sans cursor-pointer" >
                    <AiFillEye className="w-1/2 h-1/2 text-[#FFFFFF]" />
                  </motion.div>
                </a>
                <a href={item.codeLink} target="_blank" rel="noreferrer" >
                  <motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }} className="app__flex w-[50px] h-[50px] rounded-full bg-[rgba(0, 0, 0, 0.5)] text-[#FFFFFF] m-4 font-[800] font-['DM Sans'] font-sans cursor-pointer" >
                    <AiFillGithub className="w-1/2 h-1/2 text-[#FFFFFF]" />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="p-2 w-full relative flex-col app__flex" >
              <h4 className="bold-text mt-4 leading-6" >{item.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }} >{item.description}</p>
              <div className="absolute py-2 px-4 rounded-[10px] bg-[#FFFFFF] top-[-25px] app__flex" >
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

