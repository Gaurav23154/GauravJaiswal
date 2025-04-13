// components/SideElements.jsx or .tsx if you're using TypeScript
import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaCodepen,
} from "react-icons/fa";

const SideElements = () => {
  return (
    <>
      {/* Left Social Icons */}
      <div className="fixed left-8 bottom-0 hidden lg:flex flex-col items-center gap-4 text-[#a8b2d1]">
        <a
          href="https://github.com/Gaurav23154"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="hover:text-[#64ffda] transition" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <FaInstagram className="hover:text-[#64ffda] transition" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <FaTwitter className="hover:text-[#64ffda] transition" />
        </a>
        <a href="https://www.linkedin.com/in/gaurav-jaiswal-539649228/" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-[#64ffda] transition" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <FaCodepen className="hover:text-[#64ffda] transition" />
        </a>
        <div className="w-px h-24 bg-[#a8b2d1] mt-2"></div>
      </div>

      {/* Right Email */}
      <div className="fixed right-8 bottom-0 hidden lg:flex flex-col items-center text-[#a8b2d1]">
        <div className="flex flex-col items-center justify-end h-screen  relative ">
          <a
            href="mailto:gaurav@example.com"
            className="hover:text-[#64ffda] transition transform rotate-90 origin-bottom-right text-sm font-mono tracking-wide mb-6 absolute right-10 bottom-30"
          >
            gauravjaiswal5200@gmail.com
          </a>
          <div className="w-px h-30 bg-[#a8b2d1] absolute right-8 "></div>
        </div>
      </div>
    </>
  );
};

export default SideElements;
