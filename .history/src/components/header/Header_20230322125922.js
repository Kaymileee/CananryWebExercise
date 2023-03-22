import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { auth } from "../../firebaseConfig/fbConfig";
import Button from "../button/Button";
import IconLg from "../icons/IconLg";

const Header = () => {
  const { userInfo } = useAuth();
  // const re = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
  const email = userInfo?.email;
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <header className="w-full py-1 pb-5 bg-white border-b-[0.5px]">
      <div className="flex items-center justify-between p-5">
        <Link className="text-3xl font-bold logo" to={"/"}>
          🚀Canary
        </Link>
        {!userInfo ? (
          <div className="flex items-center gap-x-3 ">
            <Button links={"sign-up"} className="border text-slate-700 ">
              Đăng ký
            </Button>
            <Button
              className={"hover:animate-pulse bg-[#00CDC4] text-white"}
              links={"sign-in"}
            >
              Đăng nhập
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-x-3 ">
            <Button
              className={"hover:animate-pulse bg-[#00CDC4] text-white"}
              links={"sign-in"}
            >
              {email}
            </Button>
            <button
              className={
                "px-6 py-3 text-sm font-medium  rounded-lg  text-opacity-1 text-red-600 border border-[#A1C298]"
              }
              onClick={handleSignOut}
            >
              <IconLg></IconLg>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
