import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { client } from "../../utils/sanity/client";

import { Overlay } from "../../components";
import { images } from "../../constants";

import "./contact.scss";


type ContactType = {
  handleModal: () => void;
};

type FormDataType = {
  name: string;
  email: string;
  message: string;
};


function Contact({ handleModal }: ContactType) {
  const [formData, setFormData] = useState<FormDataType>({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState<boolean>(false)
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false)

  function handleOnChange(e:any) {
    const { name, value } = e.target
    console.log(name, value)
    
    setFormData({...formData, [name]: value})
  }

  useEffect(() => {
    console.log(formData)
  
    return () => {
      
    }
  }, [formData])
  

  async function handleSubmit(e: any) {
    e.preventDefault()
    setLoading(true)
    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }

    try {
      await client.create(contact)
      setIsFormSubmitted(true)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const dropIn = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      }
    },
    exit: {
      scale: 0,
    },
  }
  
  return (
    <Overlay onClick={handleModal} >
      <motion.div variants={dropIn} initial={dropIn.hidden} animate={dropIn.visible} exit={dropIn.exit} className="bg-white rounded-xl md:p-8 p-4 md:w-1/2 w-3/4" onClick={e => e.stopPropagation()} >
        <h2 className="text-capitalize font-[800] text-center text-[2rem] text-[#030303]" >Contact Me</h2>
        {/*<div className="app__footer-cards" >
          <div className="app__footer-card" >
            <img src={images.email} alt="" className="" />
            <a href="" className="p-text" >hello@micael.com</a>
          </div>
        </div>*/}
        {isFormSubmitted === false ? 
          <form className="flex flex-col w-full py-4 app__footer-form" >
            <div className="app__flex w-full rounded-[10px] bg-[#fef4f5] cursor-pointer transition-all duration-300 eas-in-out" >
              <input type="text" required className="p-text w-full p-[0.95rem] border-none rounded-[7px] bg-[#edf2f8] outline-0" placeholder="Your name" name="name" value={formData.name} onChange={handleOnChange} />
            </div>
            <div className="app__flex w-full my-4 rounded-[10px] bg-[#fef4f5] cursor-pointer transition-all duration-300 eas-in-out" >
              <input type="email" required className="p-text w-full p-[0.95rem] border-none rounded-[7px] bg-[#edf2f8] outline-0" placeholder="Your email" name="email" value={formData.email} onChange={handleOnChange} />
            </div>
            <div className="w-full rounded-[10px] bg-[#edf2f8] cursor-pointer transition-all duration-300 eas-in-out" >
              <textarea name="message" required className="p-text w-full h-[170px] p-[0.95rem] border-none rounded-[7px] bg-[#edf2f8] outline-0" placeholder="Your message" value={formData.message} id="" cols={30} rows={10} onChange={handleOnChange} />
            </div>
            <button type="submit" disabled={loading} className="p-text" onClick={e => handleSubmit(e)} >{loading ? "Sending" : "Send Message"}</button>
          </form>
        :
          <div>
            <h3 className="head-text" >Thank you for getting in touch.</h3>
          </div>
        }
      </motion.div>
    </Overlay>
  )
};


export default Contact;

