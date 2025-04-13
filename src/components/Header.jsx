
import brandlogo from "../assets/image/logo2.png";
import { useState } from "react";


const Header = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      <div className="h-24 px-1  flex  justify-between relative ">
        <div className="w-18 h-18 m-3  bg-[#64ffda]">
          <a href="/">
            <img className="w-full h-full object-contain" src={brandlogo} />
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden cursor-pointer px-5 text-[#64ffda]"
        >
          Toggle
        </button>
        <ul
          className={`font-mono  lg:flex lg:flex-row  lg:list-decimal text-[#ccd6f6] items-center  justify-center bg-[#0a192f]   ${
            open
              ? "flex flex-col absolute left-[78%] top-20 z-20 shadow-xl/30 "
              : "hidden"
          } `}
        >
          <li
            className={` mx-2.5  flex justify-center   text-[#ccd6f6]  cursor-pointer hover:text-[#64ffda] ${
              open
                ? "w-25  rounded-md m-1 border-2 px-3 py-1 border-gray-700 "
                : ""
            }`}
          >
            <span className="text-[#64ffda] mx-1.5">01. </span>
            <a href="#home">Home</a>
          </li>
          <li
            className={` mx-2.5  flex justify-center text-[#ccd6f6]  cursor-pointer hover:text-[#64ffda]   ${
              open
                ? "w-25 border-2 rounded-md m-1 px-3 py-1 border-gray-700 "
                : ""
            }`}
          >
            {" "}
            <span className="text-[#64ffda] mx-1.5">02. </span>
            <a href="#about"> About</a>
          </li>
          <li
            className={` mx-2.5  flex justify-center   text-[#ccd6f6]  cursor-pointer hover:text-[#64ffda] ${
              open
                ? "w-25 border-2 rounded-md m-1 px-3 py-1 border-gray-700"
                : ""
            }`}
          >
            <span className="text-[#64ffda] mx-1.5">03. </span>
            <a href="#project"> Projects</a>
          </li>
          <li
            className={` mx-2.5  flex justify-center   text-[#ccd6f6]  cursor-pointer hover:text-[#64ffda] ${
              open
                ? "w-25 rounded-md m-1 border-2 px-3 py-1 border-gray-700 "
                : ""
            }`}
          >
            <span className="text-[#64ffda]  mx-1.5">04. </span>
            <a href="#contact">Contact</a>
          </li>
          <li
            className={` mx-2.5 lg:px-3 lg:rounded-md lg:py-1 flex justify-center lg:border lg:border-[#64ffda]  text-[#ccd6f6]  cursor-pointer hover:bg-[#112240]  ${
              open ? "w-25 border rounded px-3 py-1  border-gray-700 " : ""
            }`}
          >
           <a href="https://drive.google.com/file/d/1ySW_Jw4vMWr36hLM7e0T2ih7I5U-CehT/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a> 
          </li>
        </ul>
      </div>
    </>
  );
};
export default Header;
