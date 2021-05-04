import React from "react";
import Projects from "../Projects/Projects";

import "./landingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div id="intro" className="section">
        Intro
      </div>
      <div id="about" className="section">
        About Me
      </div>
      <div id="experience" className="section">
        Experience
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div className="section">
        Get in Touch
      </div>
    </div>

  );
};

export default LandingPage;
