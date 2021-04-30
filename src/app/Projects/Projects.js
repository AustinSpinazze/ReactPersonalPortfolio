import React from "react";

import Card from "../common/Card";
import { PROJECTS } from "../../shared/constants/projects";
import "./projects.css";

const Projects = () => {
  return (
    <div className="grid-container">
      <div className="grid">
        {PROJECTS.map((project, i) => {
          return <Card cardType={"flip"} cardDetails={project} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
