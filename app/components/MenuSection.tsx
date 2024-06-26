import React from "react";
import Link from "next/link";
import menuData from "../menuData";
import { GetStaticProps } from "next";
import { Menu, MenuTab } from "../Types";

interface MenuSectionProps {
  tab: MenuTab; // Define props interface to expect a MenuTab
}

export const MenuSection = ({ tab }: MenuSectionProps) => {
  return (
    <div>
      {tab && ( // Check if tab exists
        <div key={tab.id} className="mb-10 m-4">
          {tab.sections?.map((section, index) => (
            <div key={index}>
              <br></br>
              <h1 className="text-lg underline">{section.title}</h1>
              <br></br>
              <ul>
                {section.menuItems.map((item, index) => (
                  <li key={index} className="mb-5">
                    <div className="flex justify-between">
                      <span className="font-bold">{item.name}</span>
                      <span> ${item.price} </span>
                    </div>
                    <span className="font-extralight block">
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
