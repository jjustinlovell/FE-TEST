import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main className="w-3/4 mx-auto">
        <Outlet />
      </main>
    </>
  );
}
