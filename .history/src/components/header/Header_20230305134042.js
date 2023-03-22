import React from "react";

const Header = () => {
  return (
    <header className="container py-5 border-b l-container border-slate-800">
      <div className="flex items-center justify-between p-5">
        <div className="text-white logo">Canary</div>
        <div className="flex items-center gap-x-3 ">
          <button className="px-6 py-3 text-sm font-medium rounded-lg ">
            Sign up
          </button>
          <button className="px-6 py-3 text-sm font-medium text-white rounded-lg primary text-opacity-1">
            Log in
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
