import React from 'react';
import { Link } from "react-router-dom";

import {NAV_LINK, IMAGE_LINK} from "../../shared/constants/constants";
import "../scss/main.scss";

const Button = props => {
    const eventHandler = (e) => {
        props?.onClick?.(e);
    }

    switch (props.type) {
        case NAV_LINK:
            return (
                <Link to={props.path} className={props.className} exact={props.exact}>{props.name}</Link>
            );

        case IMAGE_LINK:
            return (
                <a href={props.link} className={props.className}>
                    <img className={props.imageClass} src={props.image} alt={props.alt} />
                </a>
            );

        default:
            return (
                <input type="button" className={props.className || "defaultButton defaultButton-color defaultButton-animated"} onClick={eventHandler} value={props.name}/> 
            );
    }
}

export default Button;
