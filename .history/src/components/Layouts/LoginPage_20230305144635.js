import React from "react";

const LoginPage = () => {
  return (
    <div className="container flex flex-col items-center justify-start py-20 gap-y-5">
      <div className="w-full max-w-[500px] rounded-lg shadow-md bg-w">
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
          <label for="username1">Password</label>
          <input
            autocomplete="off"
            type="password"
            id="password"
            // placeholder="Enter your username"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
