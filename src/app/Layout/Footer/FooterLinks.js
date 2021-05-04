import React from "react";

import Button from "../../common/Button/Button";
import linkedInLogo from "../../../../public/images/linkedinOutline100.png";
import githubLogo from "../../../../public/images/githubOutline100.png";
import instagramLogo from "../../../../public/images/instagramOutline100.png";
import { GITHUB, INSTAGRAM, LINKEDIN } from "../../../shared/constants/urls";
import "./footer.css";

const FooterLinks = () => {
  return (
    <div>
      <ul className="footer-list">
        <li className="footer-list-link-item">
          <Button
            type="imageLink"
            link={LINKEDIN}
            className="footer-link-item"
            imageClass="footer-link-image"
            image={linkedInLogo}
            alt="LinkedIn"
          />
        </li>
        <li className="footer-list-link-item">
          <Button
            type="imageLink"
            link={GITHUB}
            className="footer-link-item"
            imageClass="footer-link-image"
            image={githubLogo}
            alt="Github"
          />
        </li>
        <li className="footer-list-link-item">
          <Button
            type="imageLink"
            link={INSTAGRAM}
            className="footer-link-item"
            imageClass="footer-link-image"
            image={instagramLogo}
            alt="Instagram"
          />
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
