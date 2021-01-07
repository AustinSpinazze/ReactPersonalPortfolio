import React from 'react';

import "../../scss/main.scss";

const CardFront = props => {
    return (
        <div className="card-side side-front">
            <h1>{props.project.title}</h1>
            {props.project.image ? 
                <img className="card-header-img" src={props.project.image} /> : null 
            }
            <div className="side-front-content">
                <ul className="card-technologies">
                    {
                        props.project.technologies.map((technology, i) => {
                            return (<li className="card-technologies-item" key={i}>{technology}</li>)
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default CardFront
