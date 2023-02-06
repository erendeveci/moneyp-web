import React from "react";
import { bill, apple, google } from "../assets";
import styles, { layout } from "../style";
const Billing = () => (
  <section id="product" className={`${layout.sectionReverse} `}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] z-[5]  relative "
      />
      <div className="absolute z-[3] -left-1/2  white__gradient  top-0 w-[50%] h-[50%] rounded-full " />
      <div className="absolute z-[0] -left-1/2 pink__gradient  bottom-0 w-[50%] h-[50%] rounded-full " />
    </div>

    <div className={`${layout.sectionInfo} `}>
      <h2 className="font-semibold text-[48px] text-white mb-5 leading-[76px]">
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className="font-normal text-[18px] text-dimWhite leading-[28px]">
      Financial goals and helps them become financially healthier and any income and expense can be tracked.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 m-6 ">
        <img src={apple} className="w-[128px] h-[42px] mr-5 cursor-pointer" />
        <img src={google} className="w-[128px] h-[42px] cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;
