import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import HeaderTitle from "../title/HeaderTitle";
import Footer from "./Footer";

const StartPage = () => {
  return (
    <div className="flex flex-col items-center justify-between">
      <Header></Header>
      {/* <HeaderTitle></HeaderTitle> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default StartPage;
