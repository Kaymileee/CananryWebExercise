import React from "react";

const LoginPage = () => {
  return (
    <div className="container flex items-center py-20 justify-left">
      <div class="text-field">
        <label for="username2">Username</label>
        <input
          autocomplete="off"
          type="text"
          id="username2"
          placeholder="Enter your username"
        />
      </div>
    </div>
  );
};

export default LoginPage;
