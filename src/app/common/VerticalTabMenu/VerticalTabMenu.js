import React from "react";

import Button from "../Button/Button";
import { EXPERIENCE_TABS } from "../../../shared/constants/constants";
import "./verticalTabMenu.css";

const VerticalTabMenu = ({ currentTab, tabChangeHandler, screenWidth, availableScreenWidth }) => {
    console.log(screenWidth)
  return (
    <div className="tab-menu">
      <div className="tab-list animate fade-up">
        {EXPERIENCE_TABS.map((tabData, i) => {
          return (
            <Button
              tabData={tabData}
              key={i}
              tabChangeHandler={tabChangeHandler}
              className={
                currentTab === EXPERIENCE_TABS[i].id
                  ? "tab-link active"
                  : "tab-link"
              }
              type="tabLink"
            />
          );
        })}
        <div
          className="tab-highlight"
          style={screenWidth < 600 || availableScreenWidth < 600 ? {transform: `translateX(calc(${currentTab} * 120px))`} : {transform: `translateY(calc(${currentTab} * 50px` }}
        ></div>
      </div>
      <div className="tab-panel animate fade-up">
        <h3>
          <span>{EXPERIENCE_TABS[currentTab].title}</span>
          <span className="company">
            &nbsp;@
            <a
              href={EXPERIENCE_TABS[currentTab].employerLink}
              className="inline-link"
              target="_blank"
            >{EXPERIENCE_TABS[currentTab].employerName}</a>
          </span>
        </h3>
        <p>{EXPERIENCE_TABS[currentTab].timePeriod}</p>
        <div>
            <ul>
                {EXPERIENCE_TABS[currentTab].duties.map((description, i) => {
                    return <div className="tab-list-item"><i className="fa fa-caret-right tab-list-icon"/><li>{description}</li></div>
                })}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default VerticalTabMenu;
