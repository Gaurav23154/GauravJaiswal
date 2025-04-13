import logo from "../assets/image/logo2.png";

const Footer = () => {
  return (
    <div className="flex justify-around items-center px-10 font-medium  bg-gray-300">
      <ul className="flex flex-col sm:flex-row sm:justify-center sm:gap-10 sm:items-center text-sm list-none items-start justify-center  " >
        <li  className="">gauravjaiswal5200@gmail.com</li>
        <li>7007932194</li>
      </ul>
      <div className="h-18 w-18 ">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};
export default Footer;
