"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Separator } from "../ui/seperator";
import { CopyToClipboard } from "react-copy-to-clipboard";

export type IconProps = React.HTMLAttributes<SVGElement>;

import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  
  const style = "h-7 w-7 hover:border-white";
  const [copy, setCopy] = useState(false);
  
  useEffect(() => {
    if (copy) {
      const timer = setTimeout(() => {
        setCopy(false);
      }, 2000); 
      return () => clearTimeout(timer);
    }
  }, [copy]);
  return (
    <div className="my-4 h-[10vh] w-[70vw]">
      <Separator className=" bg-white" />
      <div className="flex flex-col lg:flex-row items-center lg:justify-between mt-4">
        <div className="flex gap-4">
          <div>
            <Link href="http://www.github.com/soumik-aj12" target="_blank">
              <FaGithub className={`${style}`} />
            </Link>
          </div>
          <div>
            <Link href="http://www.linkedin.com/in/soumiksil" target="_blank">
              <FaLinkedin className={`${style}`} />
            </Link>
          </div>
          <div className="relative cursor-pointer w-full" onClick={()=>setCopy(true)}>
            {copy && <span className="absolute -top-8 left-1/2 transform transition-all -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow">Copied!</span>}
            <CopyToClipboard text="samboiii._.">
              <FaDiscord className={`${style}`} />
            </CopyToClipboard>
          </div>
        </div>
        <div className="text-sm mt-2">
          Made with <span className="text-green-400">&lt;3</span> by Soumik,
          Thank You!
        </div>
      </div>
    </div>
  );
};

export default Footer;
