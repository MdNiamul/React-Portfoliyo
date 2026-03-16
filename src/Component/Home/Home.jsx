import React from "react";
import HeroSection from "../../Pages/HeroSection";
import Skills from "../../Pages/Skills";
import Project from "../Projects/Project";
import About from "../../Pages/About";





const Home = () => {
  return (
    <>
      <div>
        <HeroSection></HeroSection>
        <Skills></Skills>
        <Project></Project>
        <About></About>
      </div>
    </>
  );
};

export default Home;