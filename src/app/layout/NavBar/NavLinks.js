import React from 'react';
import { Link } from "react-router-dom";

import "./navLinks.css";

const NavLinks = () => {
    return (
        <div>
            <ul className="navList">
                <li className="navListLinkItem">
                    <Link to="/" className="linkItem" exact="true">Home</Link>
                </li>
                <li className="navListLinkItem">
                    <Link to="/projects" className="linkItem">Projects</Link>
                </li>
                <li className="navListLinkItem">
                    <Link to="/blog" className="linkItem">Blog</Link>
                </li>
                <li className="navListLinkItem">
                    <Link to="/contact" className="linkItem">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavLinks;
