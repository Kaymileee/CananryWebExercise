import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Button from "../button/Button";

const Header = () => {
  const { userInfo } = useAuth();
  // const re = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
  const email = userInfo?.email;
  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <header className="container py-5 border-b l-container border-slate-800">
      <div className="flex items-center justify-between p-5">
        <Link className="text-3xl font-bold text-white logo" to={"/"}>
          🚀Canary
        </Link>
        {!userInfo ? (
          <div className="flex items-center gap-x-3 ">
            <Button links={"sign-up"}>Sign up</Button>
            <Button className={"hover:animate-pulse primary"} links={"sign-in"}>
              Login
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-x-3 ">
            <Button className={"hover:animate-pulse primary"} links={"sign-in"}>
              {email}
            </Button>
            <button
              className={
                "px-6 py-3 text-sm font-medium text-white rounded-lg  text-opacity-1"
              }
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
