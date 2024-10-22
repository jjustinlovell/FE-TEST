import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    if (username === "user" && password === "user") {
      localStorage.setItem("name", username);
      toast.success("Login Success");
      navigate("/dashboard");
    } else {
      console.log("failed");
      toast.error("Login Failed");
    }
  };

  return (
    <div className="grid h-screen place-items-center">
      <div className="w-3/4 px-5 py-5 border border-black md:w-1/2 lg:w-1/4">
        <h1 className="text-3xl">Login</h1>
        <form className="flex flex-col gap-5 mt-4">
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              className="h-8 p-3 border border-gray-300 rounded-sm focus:outline-none"
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              className="h-8 p-3 border border-gray-300 rounded-sm focus:outline-none"
              type="text"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex gap-3">
            <Button type="black" onClick={(e) => onLogin(e)}>
              Login
            </Button>
            <Button type="white" disabled={true}>
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
