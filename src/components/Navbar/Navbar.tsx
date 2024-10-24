import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
const Navbar = () => {
  return (
    <nav className="flex justify-around items-center pt-8">
      <h2 className="text-4xl font-semibold">
        <span className="text-green-500">5</span>am.
      </h2>
      <Link href="./Resume.pdf" target="_blank" rel="noopener noreferrer">
        <Button className="hover:bg-white/20 hover:text-white">
          Download Resume
        </Button>
      </Link>
    </nav>
  );
};
export default Navbar;
