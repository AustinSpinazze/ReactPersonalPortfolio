import React from 'react';

import Button from "../Button";
import "./navLinks.css";

const NavLinks = () => {
    return (
        <div>
            <ul className="navList">
                <li className="navListLinkItem">
                    <Button path="/" className="navLinkItem" exact="true" type="navLink" name="Home" />
                </li>
                <li className="navListLinkItem">
                    <Button path="/projects" className="navLinkItem" exact="false" type="navLink" name="Projects" />
                </li>
                <li className="navListLinkItem">
                    <Button path="/blog" className="navLinkItem" exact="false" type="navLink" name="Blog" />
                </li>
                <li className="navListLinkItem">
                    <Button path="/contact" className="navLinkItem" exact="false" type="navLink" name="Contact" />
                </li>
            </ul>
        </div>
    )
}

export default NavLinks;
