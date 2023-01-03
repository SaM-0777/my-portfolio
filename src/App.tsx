import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { NavBar, HeroSection, About, Works, Skills, Contact } from "./containers";
import { SocialMedia, ScrollDots } from "./components";

import "./App.scss";


function App() {
  const [isContactVisible, setIsContactVisible] = useState(false)

  function closeContactModal() { setIsContactVisible(false) }
  function openContactModal() { setIsContactVisible(true) }

  useEffect(() => {
    console.log(isContactVisible)
  
    return () => {
      
    }
  }, [isContactVisible])
  

  return (
    <div className="App app xl:overflow-y-scroll xl:snap-y xl:snap-mandatory xl:h-[100vh]">
      <SocialMedia />
      <NavBar openContactModal={openContactModal} />
      <HeroSection />
      <About />
      <Works />
      <Skills />
      {/*<ScrollDots index={1} />*/}
      {/*<Contact handleModal={isContactVisible ? closeContactModal : openContactModal} />*/}
      <AnimatePresence initial={false} onExitComplete={() => null} >
        {isContactVisible && <Contact handleModal={isContactVisible ? closeContactModal : openContactModal} />}
      </AnimatePresence>
    </div>
  )
};


export default App;

