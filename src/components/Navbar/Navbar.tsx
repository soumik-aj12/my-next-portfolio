import React from "react";
import { links } from "./links";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex justify-around items-center">
      <h2>5am.</h2>
      <div className="flex justify-around items-center gap-4">
        {links.map((link, key) => {
          return (
            <div key={link.id && key}>
              <Link href={link.url && "/"}>#{link.name}</Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
