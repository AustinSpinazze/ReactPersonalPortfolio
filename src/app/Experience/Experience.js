import React from "react";
import VerticalTabMenu from "../common/VerticalTabMenu";

import "./experience.css";

const Experience = ({ currentTab, tabChangeHandler}) => {

  return (
    <div className="experience">
      <h2 className="experience-heading animate fade-up">Where I've Worked</h2>
      <VerticalTabMenu currentTab={currentTab} tabChangeHandler={tabChangeHandler}/>
    </div>
  );
};

export default Experience;
