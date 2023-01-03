import { useState } from "react";

import { NavBar, HeroSection, About, Works, Skills } from "./containers";
import { SocialMedia, ScrollDots } from "./components";

import "./App.scss";


function App() {
  return (
    <div className="App app xl:overflow-y-scroll xl:snap-y xl:snap-mandatory xl:h-[100vh]">
      <SocialMedia />
      <NavBar />
      <HeroSection />
      <About />
      <Works />
      <Skills />
      {/*<ScrollDots index={1} />*/}
    </div>
  )
};


export default App;

