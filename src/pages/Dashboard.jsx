import React from "react";
import { NavLink } from "react-router-dom";
import Trending from "../ui/Trending";
import Button from "../ui/Button";

export default function Dashboard() {
  const username = localStorage.getItem("name");
  return (
    <div className="my-20 md:px-20">
      <div className="flex flex-col items-center gap-5 mt-32 text-center">
        <h1 className="text-3xl">
          Discover Your Unique Style with E-Commerce Website
        </h1>

        <Button type="white" to="/shop">
          Shop Now
        </Button>
      </div>
      <div className="mt-32">
        <h1 className="text-3xl">Trending</h1>
        {/* <div className="flex gap-5 py-12 overflow-scroll">
          <div className="transition-all duration-500 w-[300px] hover:opacity-70 flex-shrink-0">
            <img src="/assets/images/P1.avif" alt="" />
            <div className="flex justify-between mt-5 font-thin">
              <h1>T-Shirt</h1>
              <p>Rp 100.000</p>
            </div>
          </div>
        </div> */}
        <Trending />
      </div>
    </div>
  );
}
