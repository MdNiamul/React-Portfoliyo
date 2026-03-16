import React from "react";
import HeroSection from "../../Pages/HeroSection";
import Skills from "../../Pages/Skills";
import Project from "../Projects/Project";
import About from "../../Pages/About";
import Experience from "../../Pages/Experience";
import Contact from "../../Pages/Contact";





const Home = () => {
  return (
    <>
      <div>
        <HeroSection></HeroSection>
        <Skills></Skills>
        <Project></Project>
        <Experience></Experience>
        <About></About>
        <Contact></Contact>
      </div>
    </>
  );
};

export default Home;