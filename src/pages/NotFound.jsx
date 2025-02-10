import React from "react";
import { Link } from "wouter";

const NotFound = () => {
  return (
    <div className="grid place-content-center h-screen">
      <div className="grid place-items-center gap-4">
        <h1 className="text-5xl lg:text-8xl leading-tight">404 NOT FOUND</h1>
        <Link className="px-4 py-2 bg-black rounded-3xl animate-pulse hover:bg-[#242424] transition-all duration-500" to="/"> Go back to home</Link>
      </div>
    </div>
  );
};

export default NotFound;
