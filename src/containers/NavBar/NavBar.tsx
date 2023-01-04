import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';

import { images } from "../../constants";

import "./navbar.scss";


type NavBarProps = {
  openContactModal: () => void;
};

const NavBarItems = ["Home", "About me", "Works", "Skills"];

function NavBar({ openContactModal }: NavBarProps) {
  const [toggleMenu, setToggleMenu] = useState(false)

  function onClickOpenMenu() { setToggleMenu(true) }
  function onClickCloseMenu() { setToggleMenu(false) }

  return (
    <nav className="app__navbar w-full flex justify-between items-center py-4 md:px-10 px-3 bg-[rgba(255, 255, 255, 0.25)] z-[2] fixed" >
      <div className="flex justify-center items-center cursor-pointer w-[100px] h-[40px]" >
        {/*<img src={images.logo} alt="logo" className="w-[100px] h-[40px]" />*/}
        <h1 className="font-bold text-[24px]" >sam</h1>
        <h1 className="font-bold text-[24px] text-[#313bac]" >.dev</h1>
      </div>
      <ul className="hidden md:flex justify-center items-center" >
        {NavBarItems.map((item, index) => (
          <li key={index.toString()} className="my-0 mx-4 cursor-pointer flex-col" >
            <div className="w-[5px] h-[5px] bg-transparent rounded-[50%] mb-[5px]" />
            <a className="uppercase flex-col font-medium transition-all ease-in-out duration-300 hover:text-[#313bac]" href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div onClick={openContactModal} className="hidden md:flex w-[100px] h-[40px] bg-[#313bac] justify-center items-center rounded-xl shadow-lg cursor-pointer" >
        <div className="text-[#FFFFFF] text-sm" >{"LET'S TALK"}</div>
      </div>
      <div className='md:hidden' >
        <FiMenu onClick={onClickOpenMenu} className="text-[25px] cursor-pointer" />
        {toggleMenu && (
          <div className="fixed top-0 bottom-0 right-0 z-[5] p-4 w-[300px]" >
            <div className="bg-[#FFFFFF] py-4 px-5 rounded-xl backdrop-blur-sm shadow-2xl" >
              <div className="flex justify-between items-baseline" >
                <ul className="" >
                  {NavBarItems.map((item, index) => (
                    <li key={index.toString()} className="my-0 cursor-pointer flex-col" >
                      <div className="w-[5px] h-[5px] bg-transparent rounded-[50%] mb-[5px]" />
                      <a className="uppercase flex-col font-medium transition-all ease-in-out duration-300 hover:text-[#313bac]" onClick={onClickCloseMenu} href={`#${item}`}>{item}</a>
                    </li>
                  ))}
                </ul>
                <MdClose onClick={onClickCloseMenu} className="text-lg cursor-pointer" />
              </div>
              <hr className="my-5 bg-[#B3B3B8]" />
              <div onClick={openContactModal} className="w-[100px] h-[40px] bg-[#313bac] flex justify-center items-center rounded-xl shadow-lg" >
                <div className="text-[#FFFFFF] text-sm" >{"LET'S TALK"}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
};


export default NavBar;

