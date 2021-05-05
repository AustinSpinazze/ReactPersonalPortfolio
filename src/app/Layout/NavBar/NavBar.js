import React from "react";
import { HashLink } from "react-router-hash-link";

import Logos from "../../common/Logos";
import NavLinks from "./NavLinks";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = ({ toggle, toggleMenu, closeMenu }) => {
  return (
    <header>
      <div className="container">
        <Link to="/" >
          <Logos size="small" />
        </Link>
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
