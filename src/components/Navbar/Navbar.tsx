
import React from "react";
import { navItems } from "./links";
import { FloatingNav } from "../ui/floating-navbar";
const Navbar = () => {
  return (
    <nav className="flex justify-around items-center pt-8">
      <h2>5am.</h2>
      <div className="flex justify-around items-center gap-4">
        {/* <FloatingNav navItems={navItems}/> */}
      </div>
    </nav>
  );
};

export default Navbar;