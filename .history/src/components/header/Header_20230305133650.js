import React from "react";

const Header = () => {
  return (
    <header className="container">
      <div className="flex items-center justify-between p-5">
        <div className="logo">Canary</div>
        <div className="flex items-center gap-x-3 ">
          <button className="p-3 rounded-lg">Sign up</button>
          <button className="px-6 py-3 text-sm font-medium text-white rounded-lg primary text-opacity-1">
            Log in
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
