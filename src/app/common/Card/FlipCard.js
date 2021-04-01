import React from 'react';

import githubLogo from "../../../../public/images/githubOutline100.png";
import Button from '../Button';
import "../../scss/main.scss";

const FlipCard = (props) => {
    const openProject = () => {
        window.open(props.project.linkToProject);
    }
    return (
        <div className="flip-card-container">
            <div className="flip-card-body">
                <div className="flip-card-side flip-card-side-front">
                    <h1>{props.project.title}</h1>
                    {props.project.image ?
                        <img className="flip-card-header-img" src={props.project.image} /> : null
                    }
                    <ul className="flip-card-technologies">
                        {
                            props.project.technologies.map((technology, i) => {
                                return (<li className="flip-card-technologies-item" key={i}>{technology}</li>)
                            })
                        }
                    </ul>
                </div>
                <div className="flip-card-side flip-card-side-back">
                    <div className="flip-card-description">
                        {props.project.description}
                    </div>
                    {props.project.linkToProject ?
                        <Button name={"Link to " + props.project.title} onClick={openProject} /> : null
                    }
                    <Button type="imageLink" link={props.project.linkToRepo} className="githubLinkItem" imageClass="githubLinkImage" image={githubLogo} alt="Github" />
                </div>
            </div>
        </div>
    )
}

export default FlipCard;
