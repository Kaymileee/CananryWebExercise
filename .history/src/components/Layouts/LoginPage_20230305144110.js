import React from "react";

const LoginPage = () => {
  return (
    <div className="container flex items-center justify-center py-20">
      <div class="text-field relative w-full">
        <label
          for="username3"
          className="inline-block font-semibold  cursor-pointer absolute top-0 left-[10px]  bg-[#0F172B] px-1 py-2 text-xs -translate-y-2/4 text-[#6a5af9]"
        >
          Username
        </label>
        <input
          autocomplete="off"
          type="text"
          id="username3"
          placeholder="Enter your username"
          className="p-3 block w-full text-sm border-[#6a5af9] rounded-md bg-transparent text-white outline-none"
        />
      </div>
    </div>
  );
};

export default LoginPage;
