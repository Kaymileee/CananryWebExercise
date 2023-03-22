import React from "react";

const Button = ({ children, className, links = "#" }) => {
  return (
    <a
      className={`${className} px-6 py-3 text-sm font-medium text-white rounded-lg  text-opacity-1 `}
      href={links}
    >
      {children}
    </a>
  );
};

export default Button;
