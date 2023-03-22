import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleLogin = async (e) => {
    e.preventDefault();

    
      await signInWithEmailAndPassword(email, password);
      console.log("success");
    
    }
  };
  return (
    <div className="container flex flex-col items-center justify-center py-20 gap-y-5">
      <form className="w-full max-w-[500px] rounded-lg shadow-md bg-white h-[300px] flex flex-col p-5">
        <div className="text-field">
          <label htmlFor="username1">Username</label>
          <input
            autoComplete="off"
            type="email"
            id="username1"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="focus:border-[#6a5af9] focus:border-b"
          />
        </div>
        <div className="text-field ">
          <label htmlFor="password">Password</label>
          <input
            autoComplete="off"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="focus:border-[#6a5af9] focus:border-b"
          />
        </div>
        <div className="flex mt-auto gap-x-5">
          <Link
            to={"/"}
            className={
              "bg-transparent w-full mt-auto px-6 py-3 text-sm font-medium text-slate-700 rounded-lg  text-opacity-1  border"
            }
          >
            Cancel
          </Link>
          <button
            type="submit"
            className={
              "bg-gradient-secondary w-full mt-auto px-6 py-3 text-sm font-medium text-white rounded-lg  text-opacity-1"
            }
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
