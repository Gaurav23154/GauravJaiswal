// components/SideElements.jsx
import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaCodepen,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const SideElement = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      icon: <FaGithub className="hover:text-[#64ffda] transition" />,
      url: "https://github.com/Gaurav23154",
      name: "GitHub",
    },
    {
      icon: <FaInstagram className="hover:text-[#64ffda] transition" />,
      url: "#",
      name: "Instagram",
    },
    {
      icon: <FaTwitter className="hover:text-[#64ffda] transition" />,
      url: "#",
      name: "Twitter",
    },
    {
      icon: <FaLinkedin className="hover:text-[#64ffda] transition" />,
      url: "https://www.linkedin.com/in/gaurav-jaiswal-539649228/",
      name: "LinkedIn",
    },
    {
      icon: <FaCodepen className="hover:text-[#64ffda] transition" />,
      url: "#",
      name: "CodePen",
    },
    {
      icon: <SiLeetcode className="hover:text-[#64ffda] transition" />,
      url: "#",
      name: "LeetCode",
    },
  ];

  const email = "gauravjaiswal5200@gmail.com";

  return (
    <>
      {/* Left Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="fixed left-8 bottom-0 hidden lg:flex flex-col items-center gap-4 text-[#a8b2d1] z-10"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, color: "#64ffda" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group"
            aria-label={link.name}
          >
            {link.icon}
            <span className="fixed left-full ml-2 px-2 py-1 bg-[#112240] text-xs rounded-md text-[#64ffda] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {link.name}
            </span>
          </motion.a>
        ))}
        <div className="w-px h-24 bg-[#a8b2d1] mt-2"></div>
      </motion.div>

      {/* Right Email */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="fixed right-8 bottom-0 hidden lg:flex flex-col items-center text-[#a8b2d1] z-10"
      >
        <div className="flex flex-col items-center justify-end h-screen">
          <motion.a
            href={`mailto:${email}`}
            whileHover={{ color: "#64ffda", y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="hover:text-[#64ffda] transition transform rotate-90 origin-bottom-right text-sm font-mono tracking-wide mb-6 absolute right-10 bottom-30 group"
          >
            {email}
            <span className="absolute left-0 -bottom-2 w-0 h-px bg-[#64ffda] group-hover:w-full transition-all duration-300"></span>
          </motion.a>
          <motion.div
            animate={{ height: isScrolled ? "100px" : "150px" }}
            transition={{ duration: 0.3 }}
            className="w-px bg-[#a8b2d1] absolute right-8"
          ></motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default SideElement;