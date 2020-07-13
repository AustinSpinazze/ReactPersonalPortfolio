import React from 'react';

import "./footerLinks.css";

const FooterLinks = () => {
    return (
        <div>
            <ul className="footerList">
                <li className="footerListLinkItem">
                    <a href="https://www.linkedin.com/in/austin-spinazze-576853121/" className="footerLinkItem">LinkedIn</a>
                </li>
                <li className="footerListLinkItem">
                    <a href="https://github.com/AustinSpinazze" className="footerLinkItem">Github</a>
                </li>
                <li className="footerListLinkItem">
                    <a href="https://www.facebook.com/austin.spinazze" className="footerLinkItem">Facebook</a>
                </li>
            </ul>
        </div>
    )
}

export default FooterLinks;

//Use Adobe XD to learn about styling
