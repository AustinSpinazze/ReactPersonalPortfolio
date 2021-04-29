import React from "react";

import Logos from "../Logos";
import NavLinks from "./NavLinks";
import "./navbar.css";

const NavBar = ({ toggle, showMenu }) => {
  return (
    <header>
      <div className="container">
        <Logos size="small" />
        <nav className={toggle ? "site-nav site-nav--open" : "site-nav"}>
          <NavLinks />
        </nav>
        <div
          className={toggle ? "menu-toggle open" : "menu-toggle"}
          onClick={showMenu}
        >
          <div className="hamburger"></div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
