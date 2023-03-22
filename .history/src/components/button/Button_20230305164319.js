import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, className, links = "#" }) => {
  return (
    <Link
      className={`${className} px-6 py-3 text-sm font-medium text-white rounded-lg  text-opacity-1 `}
      to={links}
    >
      {children}
    </Link>
  );
};

export default Button;
