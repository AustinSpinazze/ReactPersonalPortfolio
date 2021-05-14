import React, { useEffect, useState } from "react";

import VerticalTabMenu from "./VerticalTabMenu";

const index = ({ currentTab, tabChangeHandler }) => {

  const [state, setState] = useState({
    screenWidth: 0,
    availableScreenWidth: 0
  });

  useEffect(() => {
    setState({...state, screenWidth: window.screen.width, availableScreenWidth: window.screen.availWidth});
  }, []);

  return (
    <VerticalTabMenu
      currentTab={currentTab}
      tabChangeHandler={tabChangeHandler}
      screenWidth={state.screenWidth}
      availableScreenWidth={state.availableScreenWidth}
    />
  );
};

export default index;
