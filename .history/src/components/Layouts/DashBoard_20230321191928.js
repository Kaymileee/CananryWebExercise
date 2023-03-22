import React, { useState } from "react";
import { Link, Outlet, Route } from "react-router-dom";

const DashBoard = ({ children }) => {
  return (
    <>
      <div className="container py-20">
        <div className="flex items-center my-5 gap-x-5">
          <Link
            to={"/"}
            className="p-4 text-slate-700 transition-colors bg-transparent rounded-lg border-[1px] hover:text-red-600 "
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
            className="p-4 text-white transition-colors rounded-lg bg-[#4F67FF] hover:bg-opacity-80 "
          >
            Điền từ
          </Link>
        </div>
        {/* {children} */}
      </div>
      <div className="container flex flex-col">
        <Link to={""} className="bg-black">
          <h3>Chơi theo chủ đề toán học</h3>
        </Link>
      </div>
    </>
  );
};

export default DashBoard;
{
  /*  */
}
