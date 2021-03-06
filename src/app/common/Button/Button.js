import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Resume from "../../../../public/docs/Austin Spinazze Developer Resume.pdf";
import {
  NAV_LINK,
  IMAGE_LINK,
  LANDING_LINK,
  LINK_BUTTON,
  TAB_LINK,
  SEND_FORM,
  RESUME_LINK
} from "../../../shared/constants/constants";
import "./button.css";

const Button = (props) => {
  const eventHandler = (e) => {
    props?.onClick?.(e);
  };

  switch (props.type) {
    case NAV_LINK:
      return (
        <Link
          to={props.path}
          className={props.className}
          exact={props.exact}
          onClick={eventHandler}
        >
          {props.name}
        </Link>
      );
    case RESUME_LINK:
      return (
        <a href={Resume} className={props.className} target="_blank">
          {props.name}
        </a>
      );
    case IMAGE_LINK:
      return (
        <a href={props.link} className={props.className} target="_blank">
          <img className={props.imageClass} src={props.image} alt={props.alt} />
        </a>
      );
    case LANDING_LINK:
      return (
        <HashLink smooth to={`/${props.path}`}>
          <span onClick={props.onClick} className={props.className}><i className={props.iconClassName}></i>{props.name}</span>
        </HashLink>
      );
    case LINK_BUTTON:
      return (
        <Link to={props.path}>
          <button className={props.className}>{props.name}</button>
        </Link>
      );
    case TAB_LINK:
      return (
        <button className={props.className} onClick={() => props.tabChangeHandler(props.tabData.id)}>
          {props.tabData.employerName}
        </button>
      );
    case SEND_FORM:
        return (
            <button className={props.className} onClick={props.onClick}>{props.name}</button>
        );
    default:
      return (
        <input
          type="button"
          className={
            props.className || "default-button default-button-animated"
          }
          onClick={eventHandler}
          value={props.name}
        />
      );
  }
};

export default Button;
