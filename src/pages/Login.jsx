import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onLogin(e) {
    e.preventDefault();
    if (username === "user" && password === "user") {
      console.log("success");
      toast.success("Login Success");
      navigate('/dashboard')
    } else {
      console.log("failed");
      toast.error("Login Failed");
    }
  }

  return (
    <div className="grid h-screen place-items-center">
      <div className="border border-black py-5 px-5 w-3/4 md:w-1/4">
        <h1 className="text-3xl">Login</h1>
        <form className="mt-4 flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              className="border border-gray-300 rounded-sm h-8 p-3 focus:outline-none"
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              className="border border-gray-300 rounded-sm h-8 p-3 focus:outline-none"
              type="text"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-slate-500 text-white rounded-md px-5 py-2"
            onClick={(e) => onLogin(e)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
