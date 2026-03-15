import React from "react";
import HeroSection from "../../Pages/HeroSection";
import Skills from "../../Pages/Skills";
import Project from "../Projects/Project";





const Home = () => {
  return (
    <>
    <div>
        <HeroSection></HeroSection>
        <Skills></Skills>
       <Project></Project>
    </div>
    </>
  );
};

export default Home;