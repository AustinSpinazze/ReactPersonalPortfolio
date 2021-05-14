import React from "react";

import Card from "../common/Card";
import { PROJECTS } from "../../shared/constants/constants";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projects-heading">Some Things I've Built</h2>
      <div className="grid">
        {PROJECTS.map((project, i) => {
          return <Card cardType={"flip"} cardDetails={project} key={i} />;
        })}
      </div>
      </div>
  );
};

export default Projects;
