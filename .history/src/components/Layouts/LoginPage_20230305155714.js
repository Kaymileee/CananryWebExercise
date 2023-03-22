import React from "react";
import Button from "../button/Button";

const LoginPage = () => {
  return (
    <div className="container flex flex-col items-center justify-center py-20 gap-y-5">
      <form className="w-full max-w-[500px] rounded-lg shadow-md bg-white h-[300px] flex flex-col p-5">
        <div class="text-field">
          <label for="username1">Username</label>
          <input
            autocomplete="off"
            type="text"
            id="username1"
            placeholder="Enter your username"
            className="focus:border-[#6a5af9] focus:border-b"
          />
        </div>
        <div class="text-field ">
          <label for="password">Password</label>
          <input
            autocomplete="off"
            type="password"
            id="password"
            className="focus:border-[#6a5af9] focus:border-b"
          />
        </div>
        <div className="flex mt-auto gap-x-5">
          <button
            className={
              "bg-gradient-secondary w-full mt-auto px-6 py-3 text-sm font-medium text-white rounded-lg  text-opacity-1"
            }
          >
            Cancel
          </button>
          <button
            type="submit"
            className={
              "bg-gradient-secondary w-full mt-auto px-6 py-3 text-sm font-medium text-white rounded-lg  text-opacity-1"
            }
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
