import React from "react";
import Button from "../button/Button";

const LoginPage = () => {
  return (
    <div className="container flex flex-col items-center justify-center py-20 gap-y-5">
      <div className="w-full max-w-[500px] rounded-lg shadow-md bg-white h-[300px] flex flex-col p-5">
        <div class="text-field">
          <label for="username1">Username</label>
          <input
            autocomplete="off"
            type="text"
            id="username1"
            placeholder="Enter your username"
            className="focus:border-[#6a5af9]"
          />
        </div>
        <div class="text-field ">
          <label for="password">Password</label>
          <input
            autocomplete="off"
            type="password"
            id="password"
            // placeholder="Enter your username"
            className="focus:border-b-[#6a5af9] border"
          />
        </div>
        <Button className={"bg-gradient-secondary w-full mt-auto"}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
