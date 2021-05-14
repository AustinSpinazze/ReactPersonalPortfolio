import React, { useState } from "react";

import Experience from "./Experience";

const index = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabChangeHandler = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <Experience currentTab={currentTab} tabChangeHandler={tabChangeHandler} />
  );
};

export default index;
