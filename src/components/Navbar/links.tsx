import {
  IconHome,
  IconUser,
  IconMessage,
  IconPhoneCall,
  IconBriefcase,
} from "@tabler/icons-react";
export const navItems = [
  {
    title: "HOME",
    href: "#hero",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    title: "ABOUT",
    href: "#about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    title: "PROJECTS",
    href: "#projects",
    icon: (
      <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    title: "CONTACT",
    href: "#contact",
    icon: (
      <IconPhoneCall className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];
