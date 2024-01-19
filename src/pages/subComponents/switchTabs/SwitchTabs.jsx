import React, { useState } from "react";

import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
export const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="row">
      <div className="container p-5 d-flex justify-content-center">
        <div className="switchingTabs text-center">
          <div className="tabItems">
            {data.map((tab, index) => (
              <span
                key={index}
                className={`tabItem ${selectedTab === index ? "active" : ""}`}
                onClick={() => activeTab(tab, index)}
              >
                {tab}
              </span>
            ))}
            <span className="movingBg" style={{ left }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchTabs;
