import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex h-fit w-full items-center justify-between backdrop-blur-sm bg-white/30 px-4">
      <img src="/favicon.ico" alt="logo" />
      <section>
        <Link to={"/"}>Home</Link>
      </section>
    </div>
  );
};

export default Navbar;
