"use client"
import React from "react";
import { Dock, DockIcon } from "../ui/dock";
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
const DATA = {
  navbar: [
    {
      href: "#hero",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
      label: "Home",
    },
    {
      href: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
      label: "About",
    },
    {
      href: "#projects",
      icon: <IconBox className="h-4 w-4 text-neutral-500 dark:text-white" />,
      label: "Projects",
    },
  ],
  contact: [

      {
        name: "GitHub",
        url: "https://github.com/soumik-aj12",
        icon: <IconBrandGithub className="h-4 w-4 text-neutral-500 dark:text-white" />,

        navbar: true,
      },
      {
        name: "LinkedIn",
        url: "www.linkedin.com/in/soumiksil",
        icon: <IconBrandLinkedin className="h-4 w-4 text-neutral-500 dark:text-white" />,

        navbar: true,
      },
     {
        name: "Youtube",
        url: "https://youtube.com/@5amboiii?si=DzkppDAeOQ414KQc",
        icon: <IconBrandYoutube className="h-4 w-4 text-neutral-500 dark:text-white" />,
        navbar: true,
      },
     {
        name: "Send Email",
        url: "#",
        icon: <IconRecordMail className="h-4 w-4 text-neutral-500 dark:text-white" />,

        navbar: false,
      },

    ],
};

const Footer = () => {
  return (
    <div className="fixed bottom-0 inset-x-0  w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background">
      <Dock direction="middle">
        {DATA.navbar.map((nav, index) => {
          return (
              <DockIcon key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={nav.href}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12"
                      )}
                    >
                      {nav.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{nav.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
          );
        })}
        <Separator orientation="vertical" className="h-full" />
        {DATA.contact.map((con, index)=>{
          return (
            <DockIcon key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={con.url}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12"
                      )}
                    >
                      {con.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{con.name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
          )
        })}
      </Dock>
    </div>
  );
};

export default Footer;
