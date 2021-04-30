import React from 'react';

import "./loader.css";

const Loader = ({ type }) => {
    switch(type) {
        case "main":
            return(
                <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 0 -0.5, L 401.383 -0.5" transform="matrix(0.337276 -0.941406 0.923986 0.382426 87 417.94)" stroke="#E85A4F" strokeWidth="2" className="logo-loader"/>
                    <path d="M 0 -0.5, L 62.8817 -0.5" transform="matrix(0.864661 0.502355 -0.449293 0.893384 87 417.94)" stroke="#E85A4F" strokeWidth="2" className="logo-loader"/>
                    <path d="M 0  -0.5, L 401.058 -0.5" transform="matrix(0.336787 -0.941581 0.924207 0.381892 114.291 433.283)" stroke="#E85A4F" strokeWidth="2" className="logo-loader"/>
                    <path d="M 0 -0.5, L 63.1767 -0.5" transform="matrix(0.863948 0.503582 -0.450464 0.892794 222.194 40)" stroke="#E85A4F" strokeWidth="2" className="logo-loader"/>
                    <path d="M 401.464 -0.5, L 0 -0.5" transform="matrix(-0.337242 0.941418 -0.924002 -0.382389 276.775 71.589)" stroke="#E85A4F" strokeWidth="2" className="logo-loader" />
                    <path d="M 0 -0.5, L 31.5174 -0.5" transform="matrix(0.85257 0.522613 -0.468715 0.88335 141.371 449.529)" stroke="#E85A4F" strokeWidth="2" className="logo-loader" />
                    <path d="M 0 -0.5, L 31.5317 -0.5" transform="matrix(0.8655 0.500909 -0.447912 0.894077 276.775 71.8146)" stroke="#E85A4F" strokeWidth="2" className="logo-loader" />
                    <path d="M 0 -0.5, L 402.237 -0.5" transform="matrix(0.337918 -0.941176 0.923696 0.383127 168.242 466)" stroke="#E85A4F" strokeWidth="2" className="logo-loader" />
                    <path d="M 0 -0.5, L 39.39 -0.5" transform="matrix(0.991283 -0.13175 0.114294 0.993447 168.242 466)" stroke="#E85A4F" strokeWidth="2" className="logo-loader" />
                    <path d="M 0 -0.5, L 118.318 -0.5" transform="matrix(0.330014 -0.943976 0.927233 0.374484 207.289 460.81)" stroke="#E85A4F" strokeWidth="2" className="logo-loader" />
                    <path d="M 0 -0.5, L 116.969 -0.5" transform="matrix(0.988867 -0.1488 0.129163 0.991623 246.126 349.121)" stroke="#E85A4F" strokeWidth="2" className="logo-loader" />
                    <path d="M 0 -0.5, L 108.686 -0.5" transform="matrix(0.339947 0.940445 -0.922774 0.385342 361.796 331.521)" stroke="#E85A4F" strokeWidth="2" className="logo-loader"/>
                    <path d="M 0 -0.5, L 363.571 -0.5" transform="matrix(0.368385 0.929673 -0.909259 0.41623 304.066 87.6091)" stroke="#E85A4F" strokeWidth="2" className="logo-loader"/>
                    <path d="M 0 -0.5, L 95.3224 -0.5" transform="matrix(0.988916 -0.148477 0.128881 0.99166 256.622 312.117)" stroke="#E85A4F" strokeWidth="2" className="logo-loader"/>
                    <path d="M 0 -0.5, L 141.114 -0.5" transform="matrix(0.336209 -0.941787 0.924468 0.38126 256.412 312.117)" stroke="#E85A4F"strokeWidth="2" className="logo-loader"/>
                    <path d="M 0 -0.5, L 127.738 -0.5" transform="matrix(-0.369771 -0.929123 0.908572 -0.417728 351.09 297.902)" stroke="#E85A4F" strokeWidth="2" className="logo-loader"/>
                    <path d="M 0 -0.5, L 59.402 -0.5"  transform="matrix(0.989528 -0.144341 0.125272 0.992122 264.389 290.681)" stroke="#E85A4F" strokeWidth="2" className="logo-loader"/>
                    <path d="M 0 -0.5, L 31.8958 -0.5" transform="matrix(0.868784 0.495191 -0.442463 0.896787 323.169 282.107)" stroke="#E85A4F" strokeWidth="2" className="logo-loader"/>
                    <path d="M 0 -0.5, L 80.1792 -0.5" transform="matrix(-0.364872 -0.931058 0.910989 -0.412431 323.169 282.107)" stroke="#E85A4F" strokeWidth="2" className="logo-loader"/>
                    <path d="M 0 -0.5, L 31.6966 -0.5" transform="matrix(0.854374 0.519659 -0.465872 0.884852 296.089 265.636)" stroke="#E85A4F" strokeWidth="2" className="logo-loader"/>
                    <path d="M 0 -0.5, L 33.4336 -0.5" transform="matrix(-0.364179 -0.931329 0.911328 -0.411681 296.298 265.636)" stroke="#E85A4F" strokeWidth="2" className="logo-loader"/>
                    <path d="M 0 -0.5, L 25.0332 -0.5" transform="matrix(-0.989546 0.144215 -0.125162 -0.992136 296.298 265.636)" stroke="#E85A4F" strokeWidth="2" className="logo-loader"/>
                    <path d="M 0 -0.5, L 45.395 -0.5"  transform="matrix(0.356085 0.934454 -0.915241 0.402907 302.176 340.772)" stroke="#E85A4F" strokeWidth="2" className="logo-loader"/>
                    <path d="M 0 -0.5, L 94.849 -0.5" transform="matrix(0.847689 0.530493 -0.476315 0.879275 318.341 382.966)" stroke="#E85A4F" strokeWidth="2" className="logo-loader"/>
                    <path d="M 0 -0.5, L 65.1513 -0.5" transform="matrix(-0.354438 -0.935079 0.916026 -0.401119 345.212 398.761)" stroke="#E85A4F" strokeWidth="2" className="logo-loader"/>
                    <path d="M 0 -0.5, L 85.4654 -0.5" transform="matrix(0.333241 0.942842 -0.925799 0.378015 341.643 334.455)" stroke="#E85A4F" strokeWidth="2" className="logo-loader"/>
                    <path d="M 0 -0.5, L 39.9992 -0.5" transform="matrix(0.981435 -0.191794 0.166792 0.985992 398.743 433.283)" stroke="#E85A4F" strokeWidth="2" className="logo-loader"/> 
                </svg>
            );
        default:
            return (
                <svg width="100px" height="100px" viewBox="-3 -4 39 39">
                    <polygon fill="none" stroke="#E85A4F" points="16,0 32,32 0,32" className="triangle-loader" stroke="#E85A4F"/>
                </svg>
            );
    }
}

export default Loader;