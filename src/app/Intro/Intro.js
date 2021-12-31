import React, { Fragment } from "react";
import Button from "../common/Button/Button";

import "./intro.css"

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-header-one animate fade-up">
        <h1>Hello World, my name is</h1>
      </div>
      <div className="intro-header-two animate fade-up">
        <h2 className="big-heading">Austin Spinazze.</h2>
      </div>
      <div className="intro-header-three animate fade-up">
        <h3 className="big-heading">I build things for the web.</h3>
      </div>
      <div className="intro-paragraph animate fade-up">
        <p>
          I am a Lafayette-based software engineer who specializes in designing
          and building full-stack applications. Currently, I am a Technical
          Consultant at
          <a href="https://www.hubspot.com/" className="employer-link">
            {" "}HubSpot{" "}
          </a>
          focused on helping customers build digital solutions that transform how
          they connect with their customers and scale their business on the HubSpot platform.
        </p>
      </div>
      <div className="intro-button animate fade-up">
        <Button className="link-button" type="linkButton" path="/contact" name="Get In Touch" />
      </div>
    </div>
  );
};

export default Intro;
