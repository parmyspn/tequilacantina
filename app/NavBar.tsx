"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

type Props = {};

function NavBar({}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between relative border-b-4 border-black">
      <div className="flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <button
          id="Tequila Cantina"
          className="text-center inline-flex items-center text-white mx-5"
          type="button"
        >
          Tequila Cantina
        </button>
      </div>

      <div className="relative">
        <button
          id="dropdownDefaultButton"
          onClick={toggleDropdown}
          className="bg-blue-700 hover:bg-blue-800 focus:ring-4 text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
          >
            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
          </svg>
        </button>

        {isDropdownOpen && (
          <div
            id="dropdown"
            className="absolute right-0 mt-1 z-50 bg-white divide-y shadow w-44"
            style={{ top: "calc(100%)" }}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-black"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#menuTabs"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Order Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
