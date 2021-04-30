import React from "react";

import Card from "./Card";

const index = (props) => {
  const openProject = () => {
    window.open(props.cardDetails.linkToProject);
  };

  return (
    <Card
      cardType={props.cardType}
      cardDetails={props.cardDetails}
      openProject={openProject}
    />
  );
};

export default index;
