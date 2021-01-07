import React from 'react';

import Button from "../Button";
import linkedInLogo from "../../../../public/images/linkedinOutline100.png";
import githubLogo from "../../../../public/images/githubOutline100.png";
import instagramLogo from "../../../../public/images/instagramOutline100.png"
import { GITHUB, INSTAGRAM, LINKEDIN } from "../../../shared/constants/urls";
import "../../scss/main.scss";

const FooterLinks = () => {
    return (
        <div>
            <ul className="footerList">
                <li className="footerListLinkItem">
                    <Button type="imageLink" link={LINKEDIN} className="footerLinkItem" imageClass="footerLinkImage" image={linkedInLogo} alt="LinkedIn" />
                </li>
                <li className="footerListLinkItem">
                    <Button type="imageLink" link={GITHUB} className="footerLinkItem" imageClass="footerLinkImage" image={githubLogo} alt="Github" />
                </li>
                <li className="footerListLinkItem">
                    <Button type="imageLink" link={INSTAGRAM} className="footerLinkItem" imageClass="footerLinkImage" image={instagramLogo} alt="Instagram" />
                </li>
            </ul>
        </div>
    )
}

export default FooterLinks;
