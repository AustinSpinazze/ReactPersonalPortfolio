import React from "react";

import Button from "../Button/Button";
import "./navbar.css";

const NavLinks = ({ toggleMenu, closeMenu }) => {
  return (
    <ul onPointerLeave={closeMenu}>
      <li>
        <Button
          path="/"
          exact="true"
          type="navLink"
          name="Home"
          iconClassName="fa fa-home site-nav--icon"
          onClick={toggleMenu}
        ></Button>
      </li>
      <li>
        <Button
          path="/projects"
          exact="false"
          type="navLink"
          name="Projects"
          iconClassName="fa fa-folder-open-o site-nav--icon"
          onClick={toggleMenu}
        />
      </li>
      <li>
        <Button
          path="/blog"
          exact="false"
          type="navLink"
          name="Blog"
          iconClassName="fa fa-pencil site-nav--icon"
          onClick={toggleMenu}
        />
      </li>
      <li>
        <Button
          path="/contact"
          exact="false"
          type="navLink"
          name="Contact"
          iconClassName="fa fa-paper-plane-o site-nav--icon"
          onClick={toggleMenu}
        />
      </li>
    </ul>
  );
};

export default NavLinks;
