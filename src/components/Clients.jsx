import React from "react";
import { airbnb, binance, coinbase, dropbox } from "../assets";
import { clients } from "../constants";
import styles from "../style";
const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} w-full`}>
      {clients.map((item, index) => (
        <div key={item.id} className={`${styles.flexCenter} flex-1 sm:w-[192px] w-[100px]`}>
          <img
            src={item.logo}
            className="sm:w-[150px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
