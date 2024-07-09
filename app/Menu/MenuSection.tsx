import React from "react";
import Link from "next/link";
import menuData from "../menuData";
import { GetStaticProps } from "next";
import { Menu, MenuTab } from "../Types";
import TitleFigure from "../TitleFigure";

interface MenuSectionProps {
  tab: MenuTab; // Define props interface to expect a MenuTab
}

export const MenuSection = ({ tab }: MenuSectionProps) => {
  return (
    <div className="menuSection lg:w-8/12">
      {tab && ( // Check if tab exists
        <div key={tab.id} className="mb-10 m-4">
          {tab.sections?.map((section, index) => (
            <div key={index}>
              <br></br>
              <h1 className="text-lg underline">{section.title}</h1>
              {section.subTitle && (
                <h3 className="flex text-md underline justify-between mt-3">
                  <span>{section.subTitle.title}</span>{" "}
                  <span className="grid grid-cols-2 space-x-2">
                    {section.subTitle.size.map((s, index) => (
                      <span key={index}>{s}</span>
                    ))}
                  </span>
                </h3>
              )}
              <br></br>
              <ul>
                {section.menuItems.map((item, index) => (
                  <li key={index} className="mb-5">
                    <div className="flex justify-between">
                      <span className="font-bold">{item.name}</span>
                      {item.price && <span>${item.price}</span>}
                      {item.prices && (
                        <div className="grid grid-cols-2 space-x-2">
                          {item.prices.map((p, index) => (
                            <span key={index} className="">
                              ${p}
                            </span>
                          ))}{" "}
                        </div>
                      )}
                    </div>
                    <span className="font-extralight block">
                      {item.description}
                    </span>
                    {item.restrictions && <span>*{item.restrictions}</span>}
                    {item.addOn?.map((a, addOnIndex) => (
                      <div key={addOnIndex}>
                        <span className="font-extralight block">
                          Add-on: {a.description} ${a.price}{" "}
                        </span>
                      </div>
                    ))}
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
