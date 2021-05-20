import React from "react";
import { Link } from "react-router-dom";

import Button from "../../common/Button/Button";
import Logos from "../../common/Logos";
import "./navbar.css";

const NavBar = ({ toggle, toggleMenu, closeMenu }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">
          <Logos size="small" />
        </Link>
        <ul className={toggle ? "nav-menu nav-menu-active" : "nav-menu"} onMouseLeave={closeMenu} onWheel={closeMenu} onTouchMove={closeMenu}>
          <li className="one fade-down animate nav-item">
            <Button
              path="#about"
              type="landingLink"
              name="About Me"
              className="nav-link"
              // iconClassName="fa fa-user"
              onClick={closeMenu}
            ></Button>
          </li>
          <li className="two fade-down animate nav-item">
            <Button
              path="#experience"
              type="landingLink"
              name="Experience"
              className="nav-link"
              // iconClassName="fa fa-briefcase"
              onClick={closeMenu}
            />
          </li>
          <li className="three fade-down animate nav-item">
            <Button
              path="#projects"
              type="landingLink"
              name="Projects"
              className="nav-link"
              // iconClassName="fa fa-folder-open-o"
              onClick={closeMenu}
            />
          </li>
          <li className="four fade-down animate nav-item">
            <Button
              path="/contact"
              type="navLink"
              name="Contact"
              className="nav-link"
              // iconClassName="fa fa-paper-plane-o"
              onClick={closeMenu}
            />
          </li>
          <li className="five fade-down animate nav-item">
            <Button
              path="/resume"
              type="navLink"
              name="Resume"
              className="nav-link"
              // iconClassName="fa fa-file-text-o"
              onClick={closeMenu}
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
