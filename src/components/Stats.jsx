import React from "react";
import { stats } from "../constants";
import styles from "../style";
const Stats = () => (
  <section className={`${styles.flexCenter}  flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((item, index) => (
      <div key={item.id} className={`flex flex-1 items-center justify-start m-3  mx-2 `}>
        <h4 className="font-semibold text-white xs:text-[40px] xs:leading-[53px] leading-[43px]">
          {item.value}
        </h4>
        <p  className="font-normal text-gradient uppercase text-[15px] xs:text-[20px] xs:leading-[26px] leading-[21px] ml-3" >{item.title}</p>
      </div>
    ))}
  </section>
);

export default Stats;
