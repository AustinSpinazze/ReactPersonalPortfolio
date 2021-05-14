import React from "react";

import Card from "../common/Card";
import { PROJECTS } from "../../shared/constants/constants";
import "./projects.css";

const Projects = () => {
  return (
      <div className="grid">
        {PROJECTS.map((project, i) => {
          return <Card cardType={"flip"} cardDetails={project} key={i} />;
        })}
      </div>
  );
};

export default Projects;
