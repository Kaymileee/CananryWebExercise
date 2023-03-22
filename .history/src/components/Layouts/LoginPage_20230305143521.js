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
        />
      </div>
    </div>
  );
};

export default LoginPage;
