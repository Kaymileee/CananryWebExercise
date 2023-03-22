import React, { useState } from "react";
import { Link, Outlet, Route } from "react-router-dom";

const DashBoard = ({ children }) => {
  return (
    <div className="container h-screen py-20">
      <div className="flex items-center my-5 gap-x-5">
        <Link
          to={"/"}
          className="p-4 text-white transition-colors bg-transparent rounded-lg border-[1px] hover:text-orange-400 hover:border-orange-400"
        >
          Quay lại
        </Link>
        <Link
          to={"/multiple-choice"}
          className="p-4 text-white transition-colors rounded-lg bg-[#4F67FF] hover:bg-opacity-80 "
        >
          Trắc nghiệm
        </Link>
        <Link
          to={"/fill-in-the-word"}
          className="p-4 text-white transition-colors rounded-lg bg-[#4F67FF] hover:bg-slate-200 hover:text-orange-600"
        >
          Điền từ
        </Link>
      </div>
      {children}
    </div>
  );
};

export default DashBoard;
{
  /*  */
}
