import React from "react";

const LoginPage = () => {
  return (
    <div className="container flex flex-col items-center justify-start py-20 gap-y-10">
      <div class="text-field">
        <label for="username1">Username</label>
        <input
          autocomplete="off"
          type="text"
          id="username1"
          placeholder="Enter your username"
        />
      </div>
      <div class="text-field ">
        <label for="username1">Username</label>
        <input
          autocomplete="off"
          type="text"
          id="username1"
          placeholder="Enter your username"
        />
      </div>
    </div>
  );
};

export default LoginPage;
