import React, { Fragment } from "react";

import Intro from "../Intro";
import AboutMe from "../AboutMe";
import Projects from "../Projects";
import "./landingPage.css";
import Experience from "../Experience";

const LandingPage = () => {
  return (
    <Fragment>
      <div id="intro" className="section">
        <Intro />
      </div>
      <div id="about" className="section">
        <AboutMe />
      </div>
      <div id="experience" className="section">
        <Experience />
      </div>
      <div id="projects" className="section">
        <Projects />
      </div>
      <div className="section">Get in Touch</div>
    </Fragment>
  );
};

export default LandingPage;
