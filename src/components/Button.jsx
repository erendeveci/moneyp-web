import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`${styles} py-4 px-6 bg-blue-gradient text-[18px] rounded-[10px] `}
    >
      Get Started
    </button>
  );
};

export default Button;
