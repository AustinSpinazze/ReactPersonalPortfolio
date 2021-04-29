import React, { Fragment } from 'react';

import Button from "../Button/Button";
import "./navbar.css";

const NavLinks = () => {
    return (
        <ul>
            <li>
                <Button path="/" exact="true" type="navLink" name="Home" iconClassName="fa fa-home site-nav--icon"></Button>
            </li>
            <li>
                <Button path="/projects" exact="false" type="navLink" name="Projects" iconClassName="fa fa-folder-open-o site-nav--icon"/>
            </li>
            <li>
                <Button path="/blog" exact="false" type="navLink" name="Blog" iconClassName="fa fa-pencil site-nav--icon"/>
            </li>
            <li>
                <Button path="/contact" exact="false" type="navLink" name="Contact" iconClassName="fa fa-paper-plane-o site-nav--icon"/>
            </li>
        </ul>
    )
}

export default NavLinks;
