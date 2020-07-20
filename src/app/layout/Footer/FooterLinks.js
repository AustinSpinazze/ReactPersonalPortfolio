import React from 'react';

import linkedInLogo from "../../../../public/images/linkedinOutline100.png";
import githubLogo from "../../../../public/images/githubOutline100.png";
import instagramLogo from "../../../../public/images/instagramOutline100.png"
import { GITHUB, INSTAGRAM, LINKEDIN } from "../../../shared/constants/constants";
import "./footerLinks.css";

const FooterLinks = () => {
    return (
        <div>
            <ul className="footerList">
                <li className="footerListLinkItem">
                    <a href="https://www.linkedin.com/in/austin-spinazze-576853121/" className="footerLinkItem">
                        <img className="footerLinkImage" src={linkedInLogo} alt="LinkedIn"/>
                    </a>
                </li>
                <li className="footerListLinkItem">
                    <a href="https://github.com/AustinSpinazze" className="footerLinkItem">
                        <img className="footerLinkImage" src={githubLogo} alt="Github"/>
                    </a>
                </li>
                <li className="footerListLinkItem">
                    <a href="https://www.instagram.com/awspinazze/" className="footerLinkItem">
                        <img className="footerLinkImage" src={instagramLogo} alt="Instagram"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default FooterLinks;

//Use Adobe XD to learn about styling
