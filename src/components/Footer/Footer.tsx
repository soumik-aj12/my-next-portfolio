"use client"
import React from "react";
import { FloatingDock } from "../ui/dock";
import {
  IconBox,
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconHome,
  IconRecordMail,
  IconUser,
} from "@tabler/icons-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { buttonVariants } from "../ui/button";
import { Separator } from "../ui/seperator";
export type IconProps = React.HTMLAttributes<SVGElement>;
const navbar = [
    {
      href: "#hero",
      icon: <IconHome className="h-4 w-4 text-white" />,
      title: "Home",
    },
    {
      href: "#about",
      icon: <IconUser className="h-4 w-4 text-white" />,
      title: "About",
    },
    {
      href: "#projects",
      icon: <IconBox className="h-4 w-4 text-white" />,
      title: "Projects",
    },
  ];

const Footer = () => {
  return (
    <div className="flex fixed bottom-0 inset-x-0  w-full bg-background">
      <FloatingDock items={navbar}/>
    </div>
  );
};

export default Footer;
