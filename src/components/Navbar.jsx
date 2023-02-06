import React from "react";

import { useState } from "react";

import { close, logo, menu } from "../assets";

import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full text-white justify-between  flex py-6  items-center ">
      <h1 className="font-bold text-gradient text-[36px]"> MONEYP</h1>
      <ul className="list-none sm:flex hidden  justify-end items-center flex-1">
        {navLinks.map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer text-[16px] 
                ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-[56px]"
                }  mr-0 :  
                `}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div
        className={`
      ${toggle ? "flex" : "hidden"}
        p-6  bg-black-gradient absolute z-[1] top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar
      `}
      >
        <ul className="list-none flex flex-col  justify-end items-center flex-1">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer text-[16px] mb-2
                 
                `}
            >
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
