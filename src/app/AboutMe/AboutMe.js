import React from "react";

import { SKILLS } from "../../shared/constants/constants";
import profile from "../../../public/images/profile.jpeg";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <div className="about">
      <h2 className="about-heading animate fade-up">About Me</h2>
      <div className="inner">
        <div className="about-text animate fade-up">
          <div>
            <p>
              Hi there! My name is Austin Spinazze. I am an innovative and
              passionate full-stack developer with three years of experience
              designing and delivering digital experiences and services for
              Fortune 500 and 100 companies. I graduated in 2019 from the
              University of Louisiana at Lafayette with a bachelor's degree in
              Computer Science. My core skills lie in front-end development,
              with high proficiency in React. I also have experience building
              back-end services using Express and SpringBoot. My favorite part
              of software development is the opportunity to continuously learn
              (and play with) new technologies and finding the most modular and
              efficient way to use those technologies.
            </p>
            <p>
              Here are a few technologies I have been working with recently:
            </p>
          </div>
          <ul className="skills-list">
            {SKILLS.map((skill, i) => {
              return (
                <li key={i}>
                  <img className="skills-icon" src={skill.techIcon ? skill.techIcon : null} /><span className="skills-list-title">{skill.title}</span>
                  {/* {skill.level.map((className, i) => {
                    return <i className={`${className}`} key={i} />
                    May use this at a later date
                })} */}
                </li>);
            })}
          </ul>
        </div>
        <div className="about-image-wrapper animate fade-up">
          <img className="about-image" src={profile} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
