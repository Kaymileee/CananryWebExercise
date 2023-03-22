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
          className="padding: 15px;
  display: block;
  width: 100%;
  font-size: 14px;
  border: 1px solid #6a5af9;
  border-radius: 4px;
  background-color: transparent;
  color: white;
  outline: none;"
        />
      </div>
    </div>
  );
};

export default LoginPage;
