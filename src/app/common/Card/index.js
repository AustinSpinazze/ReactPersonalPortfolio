import React from 'react';

import Card from './Card';

const index = (props) => {
    const openProject = () => {
        console.log("hi")
        window.open(props.cardDetails.linkToProject);
    }

    return (
        <Card cardType={props.cardType} cardDetails={props.cardDetails} openProject={openProject}/>
    );
};

export default index;
