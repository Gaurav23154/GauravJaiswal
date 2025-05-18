import logo from "../assets/image/logo2.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] py-12 px-6 border-t border-[#233554]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-16 w-16 object-contain bg-[#64ffda] p-1 rounded-sm"
          />
          <p className="text-[#8892b0] text-sm font-mono">
            Designed & Built by Gaurav Jaiswal
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-6">
            <a 
              href="mailto:gauravjaiswal5200@gmail.com" 
              className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
            >
              gauravjaiswal5200@gmail.com
            </a>
            <a 
              href="tel:+917007932194" 
              className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
            >
              +91 7007932194
            </a>
          </div>

          <div className="flex gap-6 text-xl">
            <a href="#" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors">
              <FaGithub />
            </a>
            <a href="#" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors">
              <FaLinkedin />
            </a>
            <a href="#" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;