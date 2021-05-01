import React from "react";

import Logos from "../Logos";
import NavLinks from "./NavLinks";
import "./navbar.css";

const NavBar = ({ toggle, toggleMenu, closeMenu }) => {
  console.log("toggle", toggle)
  return (
    <header>
      <div className="container">
        <Logos size="small" />
        <nav
          className={toggle ? "site-nav site-nav--open" : "site-nav"}
          style={
            toggle
              ? { transition: "clip-path ease-in-out 700ms" }
              : { transition: "clip-path ease-in-out 200ms" }
          }
        >
          <NavLinks toggleMenu={toggleMenu} closeMenu={closeMenu} />
        </nav>
        <div
          className={toggle ? "menu-toggle open" : "menu-toggle"}
          onClick={toggleMenu}
        >
          <div className="hamburger"></div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
