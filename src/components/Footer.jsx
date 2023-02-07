import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
    <div className={`${styles.flexStart}  md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <h1 className="font-bold text-gradient text-[36px]">MONEYP</h1>

        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="w-full flex-[1.5]  flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((item, index) => (
          <div key={index} className="">
            <h4 className="font-medium text-[18px] leading-[27px] text-white">
              {item.title}
            </h4>
            <ul className="mt-5">
              {item.links.map((link, index) => (
                <li
                  className={`text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    styles.paragraph
                  } ${index !== item.links.length - 1 ? "mb-2" : "mb-0"} `}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="flex  justify-between w-full md:flex-row flex-col border-t-[1px] border-t-[#3f3e45] pt-6 ">
      <p className=" text-[18px] leading-[27px] text-white ">
        2023 MoneyP. All Rights Reserved.{" "}
      </p>

      <div className="flex">
        {socialMedia.map((item, index) => (
          <img
            src={item.icon}
            key={item.id}
            className={`w-[21px] h-[21px] cursor-pointer object-contain ${
              index !== socialMedia.length - 1 ? "mr-4" : "mr-0"
            } `}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
