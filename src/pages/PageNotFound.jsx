import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

export default function PageNotFound() {
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="grid h-screen place-items-center">
      <div className="text-center">
        <h1 className="text-6xl">404</h1>
        <h1 className="text-4xl">Page Not Found</h1>
        <Button type="black" onClick={(e) => handleBack(e)}>
          Back
        </Button>
      </div>
    </div>
  );
}
