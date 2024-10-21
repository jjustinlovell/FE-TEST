import React from "react";

export default function Dashboard() {
  const username = localStorage.getItem("name");

  return (
    <div className="my-20 text-3xl md:px-20">
      <h1>👋 Hello {username} </h1>
      <div className="grid items-center h-48 text-center">
          <h1>Welcome to E-Commmerce Website</h1>
          <h2>Discover Your Unique Style with</h2>
      </div>

    </div>
  );
}
