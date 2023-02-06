import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
const CardDeal = () => (
  <section id="" className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className="text-white font-semibold text-[48px] leading-[76px]">
        Find a better spend track management,
        <br className="sm:block hidden" /> in few easy steps.
      </h2>
      <p className="max-w-[500px] mt-5 text-dimWhite font-normal text-[18px] leading-[30px]">
        This helps people achieve their financial goals and helps them become
        financially healthier and any income and expense can be tracked.
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
