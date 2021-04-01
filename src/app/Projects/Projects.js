import React from 'react';

import Card from '../common/Card/Card';
import { PROJECTS } from "../../shared/constants/projects";
import "../scss/main.scss";

const Projects = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className="projects-grid">
            {
                PROJECTS.map((project, i) => {
                    return (
                    <Card cardType={"flipCard"} project={project} key={i} />

                    )
                })
            }
            </div>
        </div>
    )
}

export default Projects;
