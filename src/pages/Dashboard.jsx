import React from "react";

export default function Dashboard() {
  const image = [
    {
      path: "../../public/assets/images/P1.avif",
    },
    {
      path: "../../public/assets/images/N2.jpg",
    },
    {
      path: "../../public/assets/images/N3.jpg",
    },
  ];

  return (
    <div className="flex">
      <div className="h-screen w-1/3 bg-auto bg-left bg-no-repeat" style={{ backgroundImage: `url(${image[0].path})` }}></div>

    </div>
  );
}
