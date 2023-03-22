import React from "react";

const Header = () => {
  return (
    <header className="container">
      <div className="flex items-center">
        <div className="logo">Canary</div>
        <div className="flex items-center">
          <button>Sign up</button>
          <button>Log in</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
