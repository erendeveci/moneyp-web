import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedBackCard from "../components/FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%]  blue__gradient -right-[50%]  rounded-full  " />
    <div className="w-full  flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className="font-semibold text-[48px] leading-[80px]  text-white">
        What people are <br className="sm:block hidden" /> saying about us
      </h1>
      <p className="font-normal text-[18px] text-dimWhite max-w-[450px] leading-[32px]">
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className="div flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((item, index) => (
        <FeedBackCard key={item.id} {...item} />
      ))}
    </div>
  </section>
);

export default Testimonials;
