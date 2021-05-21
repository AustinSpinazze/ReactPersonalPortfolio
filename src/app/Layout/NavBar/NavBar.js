import React from "react";
import { Link } from "react-router-dom";

import Button from "../../common/Button/Button";
import Logos from "../../common/Logos";
import "./navbar.css";

const NavBar = ({ toggle, toggleMenu, closeMenu }) => {
  return (
    <header className="header" onWheel={closeMenu} onTouchMove={closeMenu} onMouseLeave={closeMenu}>
      <nav className="navbar">
        <Link to="/">
          <Logos size="small" />
        </Link>
        <ul className={toggle ? "nav-menu nav-menu-active" : "nav-menu"}>
          <li className="one fade-down animate nav-item">
            <Button
              path="#about"
              type="landingLink"
              name="About Me"
              className="nav-link"
              onClick={closeMenu}
            ></Button>
          </li>
          <li className="two fade-down animate nav-item">
            <Button
              path="#experience"
              type="landingLink"
              name="Experience"
              className="nav-link"
              onClick={closeMenu}
            />
          </li>
          <li className="three fade-down animate nav-item">
            <Button
              path="#projects"
              type="landingLink"
              name="Projects"
              className="nav-link"
              onClick={closeMenu}
            />
          </li>
          <li className="four fade-down animate nav-item">
            <Button
              path="/contact"
              type="navLink"
              name="Contact"
              className="nav-link"
              onClick={closeMenu}
            />
          </li>
          <li className="five fade-down animate nav-item">
            <Button
              type="resumeLink"
              name="Resume"
              className="nav-link"
            />
          </li>
        </ul>
        <div className={toggle ? "hamburger hamburger-active" : "hamburger"} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
