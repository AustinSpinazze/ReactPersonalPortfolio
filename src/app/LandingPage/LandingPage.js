import React, { Fragment } from "react";

import Intro from "../Intro";
import AboutMe from "../AboutMe";
import Projects from "../Projects";
import "./landingPage.css";
import Experience from "../Experience";
import Button from "../common/Button/Button";

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
      <div id="contact" className="section">
        <h1 className="contact-section-heading">Get In Touch</h1>
        <p className="contact-section-description">
        If you want to get in touch, talk to me about a 
        project collaboration or just say hi, click the button 
        below and send me a message!
        </p>
        <Button className="link-button" type="linkButton" path="/contact" name="Say Hello" />
      </div>
    </Fragment>
  );
};

export default LandingPage;
