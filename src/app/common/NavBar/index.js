import React, { useState } from 'react';

import NavBar from './NavBar';

const index = () => {
    const [toggle, setToggle] = useState(false);

    const showMenu = () => {
        console.log("hey")
        setToggle(!toggle);
    }

    return (
        <NavBar showMenu={showMenu} toggle={toggle}/>
    )
}

export default index;
