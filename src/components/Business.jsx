import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ id, icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] cursor-pointer ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card `}
  >
    <div
      className={`w-[64px]  h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex flex-col flex-1  ml-3">
      <h4 className="font-semibold text-[18px] leading-[23px] text-white mb-1">
        {title}
      </h4>
      <p className={`font-semibold text-[16px] leading-[23px] text-dimWhite`}>
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className="font-semibold text-white text-[48px]">
          You do the spend,
          <br className="sm:block hidden" /> we’ll track the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[578px] mt-5`}>
          {" "}
          This helps people achieve their financial goals and helps them become financially healthier and any income and expense can be tracked.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={` ${layout.sectionImg} flex-col`}>
        {features.map((item, index) => (
          <FeatureCard key={item.id} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
