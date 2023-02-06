import React from "react";
import styles from "../style";
import Button from "./Button";
const CTA = () => (
  <section
    className={`${styles.flexCenter} justify-between ${styles.marginY} ${styles.padding} sm:flex-row flex-col  bg-[#0e2334] rounded-[20px]`}
  >
    <div className="flex flex-col">
      <h2 className={`${styles.heading2} `}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph}    max-w-[470px] `}>
      Everything you need to expense control payments and follow your spend anywhere on the planet.
      </p>
    </div>
    <div className="sm:ml-10 sm-0 sm:mt-0 mt-10">
      <Button />
    </div>
  </section>
);

export default CTA;
