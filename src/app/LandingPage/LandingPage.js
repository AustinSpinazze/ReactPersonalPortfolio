import React, { Fragment } from "react";

import Intro from "../Intro";
import Projects from "../Projects";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <Fragment>
      <div id="intro" className="section">
        <Intro />
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
      <div className="section">Get in Touch</div>
    </Fragment>
  );
};

export default LandingPage;
