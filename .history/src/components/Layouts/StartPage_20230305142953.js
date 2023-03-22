import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import HeaderTitle from "../title/HeaderTitle";

const StartPage = () => {
  return (
    <>
      <Header></Header>
      {/* <HeaderTitle></HeaderTitle> */}
      <Outlet></Outlet>
    </>
  );
};

export default StartPage;
