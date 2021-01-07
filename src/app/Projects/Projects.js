import React, { Fragment } from 'react';

import Card from '../common/Card/Card';
import { PROJECTS } from "../../shared/constants/projects";
import "../scss/main.scss";

const Projects = () => {
    return (
        <Fragment>
            <div className="grid">
                {
                    PROJECTS.map((project, i) => {
                        return (
                            <Card animatedCard={true} project={project} key={i} />
                        )
                    })
                }
            </div>
        </Fragment>
    )
}

export default Projects;
