import React from 'react';

import githubLogo from "../../../../public/images/githubOutline100.png";
import Button from '../Button';
import "../../scss/main.scss";

const CardBack = props => {
    const openProject = () => {
        window.open(props.project.linkToProject);
    }

    return (
        <div className="card-side side-back">
            <div className="description">
                {props.project.description}
            </div>
                {props.project.linkToProject ?
                    <Button name={"Link to " + props.project.title} onClick={openProject} /> : null
                }
                <Button type="imageLink" link={props.project.linkToRepo} className="githubLinkItem" imageClass="githubLinkImage" image={githubLogo} alt="Github" />

        </div>
    )
}

export default CardBack;
