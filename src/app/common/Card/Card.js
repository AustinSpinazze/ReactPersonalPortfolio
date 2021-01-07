import React, { Fragment } from 'react';

import CardFront from './CardFront';
import CardBack from './CardBack';
import "../../scss/main.scss";

const Card = props => {
    return (
        <Fragment>
            {props.animatedCard ?
                <div className="card-container">
                    <div className="card-body">
                        <CardBack project={props.project}/>
                        <CardFront project={props.project} />
                    </div>
                </div> : null
            }
        </Fragment>
    )
}

export default Card;
