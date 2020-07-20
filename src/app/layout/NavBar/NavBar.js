import React from 'react';

import NavLinks from './NavLinks';
import logo from "../../../../public/images/logoTransparent.png";
import "./navBar.css";

const NavBar = () => {
    return (
        <div className="navBar">
            <img src={logo} alt="Logo" className="logo"/>
            <NavLinks />
        </div>
    )
}

export default NavBar
