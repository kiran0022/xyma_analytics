"use client";
import React, { useState } from "react";
import webdesign1 from "../../public/img/webdesign1.jpg";

const Tab = () => {
  const tabsData = [
    {
      label: "Mission",
      content:
        "Ut irure mollit nulla eiusmod excepteur laboris incididunt aute. Ullamco voluptate elit sit anim magna tempor excepteur labore nulla.",
    },
    {
      label: "Vision",
      content:
        "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
    },
    {
      label: "Values",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing Fugiat dolor et quis in incididunt elit. Repudia quam facilis cupiditate dicta porro eaque",
    },
  ];

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <div className="bg-stone-800 text-white">
      <div className="">
        <div className="flex  bg-zinc-500">
          {/* Loop through tab data and render button for each. */}
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                className={`py-4 px-6 text-sm transition-colors ease-in duration-500 ${
                  idx === activeTabIndex
                    ? "font-semibold bg-stone-800 "
                    : "bg-zinc-500 font-light"
                }`}
                // Change the active tab on click.
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        {/* Show active tab content. */}
        <div className="py-10 px-10 text-sm font-extralight tracking-wide">
          <p>{tabsData[activeTabIndex].content}</p>
        </div>
      </div>
    </div>
  );
};

export default Tab;
