import { useState } from "react"

import { NavBar, HeroSection, About } from "./containers";

import "./App.scss";


function App() {

  return (
    <div className="App app">
      <NavBar />
      <HeroSection />
      <About />
    </div>
  )
};


export default App;

