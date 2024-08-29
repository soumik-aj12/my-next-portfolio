import React from "react";
import { navItems } from "./links";
import Link from "next/link";
import { Button } from "../ui/button";
const Navbar = () => {
  return (
    <nav className="flex justify-around items-center pt-8">
      <h2>5am.</h2>

      <Button className="hover:bg-white/20 hover:text-white">Download Resume</Button>
    </nav>
  );
};
export default Navbar;
