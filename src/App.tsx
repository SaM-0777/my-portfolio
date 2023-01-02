import { useState } from "react"

import { NavBar, HeroSection, About } from "./containers";

import "./App.scss";


function App() {

  return (
    <div className="App app xl:overflow-y-scroll xl:snap-y xl:snap-mandatory xl:h-[100vh]">
      <NavBar />
      <HeroSection />
      <About />
    </div>
  )
};


export default App;

