import React from "react";

const LoginPage = () => {
  return (
    <div className="container flex items-center justify-center py-20">
      <div class="text-field">
        <label for="username3">Username</label>
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
