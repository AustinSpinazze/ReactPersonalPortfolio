import React from 'react';
import { Link } from "react-router-dom";

import {NAV_LINK, IMAGE_LINK} from "../../../shared/constants/constants";
import "./button.css";

const Button = (props) => {
    const eventHandler = (e) => {
        props?.onClick?.(e);
    }

    switch (props.type) {
        case NAV_LINK:
            return (
                <Link to={props.path} className={props.className} exact={props.exact}><i className={props.iconClassName}></i>{props.name}</Link>
            );

        case IMAGE_LINK:
            return (
                <a href={props.link} className={props.className} target="_blank">
                    <img className={props.imageClass} src={props.image} alt={props.alt} />
                </a>
            );

        default:
            return (
                <input type="button" className={props.className || "default-button default-button-color default-button-animated"} onClick={eventHandler} value={props.name}/> 
            );
    }
}

export default Button;
