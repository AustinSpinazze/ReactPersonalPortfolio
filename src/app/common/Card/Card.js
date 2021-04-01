import React, { Fragment } from 'react';

import FlipCard from './FlipCard';

const Card = (props) => {
    const cardType = (type) => {
        switch (type) {
            case "flipCard":
                return <FlipCard project={props.project}/>
            default:
                break;
        }
    }

    return (
        <Fragment>
            {cardType(props.cardType)}
        </Fragment>
    )
}

export default Card;
