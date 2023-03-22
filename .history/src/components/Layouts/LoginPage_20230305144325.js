import React from "react";

const LoginPage = () => {
  return (
    <div className="container flex items-center justify-start py-20">
      <div class="text-field text-left">
        <label for="username">Username</label>
        <input
          autocomplete="off"
          type="text"
          id="username"
          placeholder="Enter your username"
        />
      </div>
    </div>
  );
};

export default LoginPage;
