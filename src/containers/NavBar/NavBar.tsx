import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';

import { images } from "../../constants";

import "./navbar.scss";


const NavBarItems = ["Home", "About me", "Works", "Skills"];

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  function onClickOpenMenu() { setToggleMenu(true) }
  function onClickCloseMenu() { setToggleMenu(false) }

  return (
    <nav className="app__navbar w-full flex justify-between items-center px-4 py-8 bg-[rgba(255, 255, 255, 0.25)] border border-solid border-[rgba(255, 255, 255, 0.18)] fixed z-[2]" >
      <div className="flex justify-center items-center" >
        <img src={images.logo} alt="logo" className="w-[90px] h-[20px] 2xl:w-[180px] 2xl:h-[40px]" />
      </div>
      <ul className="app__navbar-links flex justify-center items-center" >
        {NavBarItems.map((item, index) => (
          <li key={index.toString()} className="my-0 mx-4 cursor-pointer flex-col" >
            <div className="w-[5px] h-[5px] bg-transparent rounded-[50%] mb-[5px]" />
            <a className="uppercase flex-col font-medium transition-all ease-in-out duration-300 hover:text-[#313bac]" href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="w-[100px] h-[40px] bg-[#313bac] flex justify-center items-center rounded-xl shadow-lg" >
        <a className="text-[#FFFFFF] text-sm" href={`#lets-talk`} >{"LET'S TALK"}</a>
      </div>
      <div className='' >
        <FiMenu onClick={onClickOpenMenu} className="text-[25px] cursor-pointer" />
        {toggleMenu && (
          <div className="fixed top-0 bottom-0 right-0 z-[5] p-4 w-[300px]" >
            <div className="bg-[#edf2f8] py-4 px-5 rounded-xl backdrop-blur-sm" >
              <div className="flex justify-between items-baseline" >
                <ul className="" >
                  {NavBarItems.map((item, index) => (
                    <li key={index.toString()} className="my-0 cursor-pointer flex-col" >
                      <div className="w-[5px] h-[5px] bg-transparent rounded-[50%] mb-[5px]" />
                      <a className="uppercase flex-col font-medium transition-all ease-in-out duration-300 hover:text-[#313bac]" onClick={onClickCloseMenu} href={`#${item}`}>{item}</a>
                    </li>
                  ))}
                </ul>
                <MdClose onClick={onClickCloseMenu} className="text-lg" />
              </div>
              <hr className="my-5 bg-[#B3B3B8]" />
              <div className="w-[100px] h-[40px] bg-[#313bac] flex justify-center items-center rounded-xl shadow-lg" >
                <a className="text-[#FFFFFF] text-sm" href={`#lets-talk`} >{"LET'S TALK"}</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
};


export default NavBar;

