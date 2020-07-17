import React from 'react';

import NavLinks from './NavLinks';
import "./navBar.css";

const NavBar = () => {
    return (
        <div className="navBar">
            <img src={"/images/logoTransparent.png"} alt="Logo" className="logo"/>
            <NavLinks />
        </div>
    )
}

export default NavBar
