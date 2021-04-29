import React, { Fragment } from "react";

import Button from '../Button/Button';
import githubLogo from "../../../../public/images/githubOutline100.png"
import "./card.css";

const Card = (props) => {
  switch (props.cardType) {
    case "flip":
      return (
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h1>{props.cardDetails.title}</h1>
              {props.cardDetails.image ? (
                <img className="flip-card-header-img" src={props.cardDetails.image} />
              ) : null}
              <ul className="flip-card-technologies">
                {props.cardDetails.technologies.map((technology, i) => {
                  return (
                    <li className="flip-card-technologies-item" key={i}>
                      {technology}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flip-card-back">
              <div className="flip-card-description">{props.cardDetails.description}</div>
              {props.cardDetails.linkToProject ? (
                <Button
                  name={"Link to " + props.cardDetails.title}
                  onClick={() => {props.openProject(props.cardDetails.linkToProject)}}
                />
              ) : null}
              <Button
                type="imageLink"
                link={props.cardDetails.linkToRepo}
                className="github-link-item"
                imageClass="github-link-image"
                image={githubLogo}
                alt="Github"
              />
            </div>
          </div>
        </div>
      );
    default:
        return null;
  }
};

export default Card;
