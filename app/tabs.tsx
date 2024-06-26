"use client";
import { GetStaticProps } from "next";
import { useState } from "react";
import menuData from "./menuData";
import { MenuSection } from "./components/MenuSection";
import { MenuTab } from "./Types";

const tabs = [
  { name: "Appetizers", href: "#", current: true },
  { name: "Mains", href: "#", current: false },
  { name: "Tacos", href: "#", current: false },
  { name: "Dessert", href: "#", current: false },
  { name: "Sides", href: "#", current: false },
  { name: "Drinks", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      menu: menuData,
    },
  };
};

export default function MenuTabs() {
  const [selectedTab, setSelectedTab] = useState(menuData.menuTabs[0].name); // Initialize with the first tab name

  let selectedMenuTab = menuData.menuTabs.find(
    (tab) => tab.name === selectedTab
  );

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  return (
    <div id="menuTabs" className="w-full sm:w-9/12 sm:mr-10 mt-4">
      <div className="block">
        <nav
          className="flex flex-wrap space-x-2 sm:space-x-4 justify-center"
          aria-label="Tabs"
        >
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => handleTabClick(tab.name)}
              className={`px-2 py-1 sm:px-3 sm:py-2 font-medium text-xs sm:text-sm rounded-md ${
                selectedTab === tab.name
                  ? "bg-gray-200 text-gray-800"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              aria-current={selectedTab === tab.name ? "page" : undefined}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
      {selectedMenuTab && <MenuSection tab={selectedMenuTab} />}
    </div>
  );
}
