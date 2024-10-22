import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, to, type, onClick, disabled }) {
  const base =
    "px-7 py-2 rounded-md transition-all duration-500 border border-black";

  const styles = {
    black: base + " bg-black text-white ",
    white: base + " bg-white text-black ",
    category:
      "px-6 py-1 transition-all bg-gray-100 rounded-full duration-400 hover:opacity-65",
  };

  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}
