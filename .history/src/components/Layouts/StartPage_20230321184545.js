import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import HeaderTitle from "../title/HeaderTitle";
import Footer from "./Footer";

const StartPage = () => {
  return (
    <>
      <Header></Header>
      {/* <HeaderTitle></HeaderTitle> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default StartPage;
