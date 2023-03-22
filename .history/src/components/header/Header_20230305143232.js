import React from "react";
import Button from "../button/Button";

const Header = () => {
  return (
    <header className="container py-5 border-b l-container border-slate-800">
      <div className="flex items-center justify-between p-5">
        <div className="text-white logo">🚀🚀Canary</div>
        <div className="flex items-center gap-x-3 ">
          <Button>Sign up</Button>
          <Button className={"hover:animate-pulse primary"} links={"sign-in"}>
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
