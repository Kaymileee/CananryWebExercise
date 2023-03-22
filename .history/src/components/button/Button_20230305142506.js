import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`${className} px-6 py-3 text-sm font-medium text-white rounded-lg  text-opacity-1 `}
    >
      {children}
    </button>
  );
};

export default Button;
