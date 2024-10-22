import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {

  const linkStyle = ({isActive}) => `w-36 py-2 transition-all duration-500 ${isActive ? "bg-gray-200 rounded-sm text-gray-500" : ""}`

  return (
    <nav className="flex items-center justify-center gap-5 py-5 text-center white">
        <NavLink
          to="/dashboard"
          className={linkStyle}
        >
          Dashboard
        </NavLink>

      <NavLink to="/shop" className={linkStyle}>
        Shop
      </NavLink>
    </nav>
  );
}
