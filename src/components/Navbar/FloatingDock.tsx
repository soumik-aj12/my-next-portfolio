import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiMessageCircle, FiSettings } from "react-icons/fi"; // Sample icons
import { navItems } from "./links";
import Link from "next/link";

const FloatingDock: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dockVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bg-white/10 shadow-md p-2 flex items-center justify-around z-50"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={dockVariants}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {navItems.map((item, index) => {
        return (
          <button
            key={index}
            className="p-3 text-white hover:bg-white/30 rounded-full"
          >
            <Link href={item.href}>
              <div className="flex flex-col justify-center items-center">
                <p>{item.icon}</p>
                <p>{item.title}</p>
              </div>
            </Link>
          </button>
        );
      })}
    </motion.div>
  );
};

export default FloatingDock;
