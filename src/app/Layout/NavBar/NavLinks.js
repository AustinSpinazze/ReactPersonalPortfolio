import React from "react";

import Button from "../../common/Button/Button";
import "./navbar.css";

const NavLinks = ({ closeMenu }) => {
  return (
    <ul onPointerLeave={closeMenu}>
      <li className="one fade-down animate">
        <Button
          path="#about"
          type="landingLink"
          name="About Me"
          iconClassName="fa fa-user site-nav--icon"
          onClick={closeMenu}
        ></Button>
      </li>
      <li className="two fade-down animate">
        <Button
          path="#experience"
          type="landingLink"
          name="Experience"
          iconClassName="fa fa-briefcase site-nav--icon"
          onClick={closeMenu}
        />
      </li>
      <li className="three fade-down animate">
        <Button
          path="#projects"
          type="landingLink"
          name="Projects"
          iconClassName="fa fa-folder-open-o site-nav--icon"
          onClick={closeMenu}
        />
      </li>
      <li className="four fade-down animate">
        <Button
          path="/contact"
          type="navLink"
          name="Contact"
          iconClassName="fa fa-paper-plane-o site-nav--icon"
          onClick={closeMenu}
        />
      </li>
      <li className="five fade-down animate">
        <Button
          path="/resume"
          type="navLink"
          name="Resume"
          iconClassName="fa fa-file-text-o site-nav--icon"
          onClick={closeMenu}
        />
      </li>
    </ul>
  );
};

export default NavLinks;
