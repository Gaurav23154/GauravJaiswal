import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import brandlogo from "../assets/image/logo2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { id: "home", number: "01", label: "Home" },
    { id: "about", number: "02", label: "About" },
    { id: "projects", number: "03", label: "Projects" },
    { id: "contact", number: "04", label: "Contact" },
  ];

  const resumeUrl = "https://drive.google.com/file/d/1ySW_Jw4vMWr36hLM7e0T2ih7I5U-CehT/view?usp=sharing";

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0a192f]/95 backdrop-blur-sm shadow-lg" : "bg-[#0a192f]/80 backdrop-blur-sm"
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with shine effect */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <a href="/" className="block">
              <div className="w-10 h-10 bg-[#64ffda] rounded-lg overflow-hidden relative group">
                <img 
                  className="w-full h-full object-contain" 
                  src={brandlogo} 
                  alt="Logo" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className="group flex items-center text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-[#64ffda] mr-2 font-mono text-sm">{link.number}.</span>
                <span className="relative">
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#64ffda] group-hover:w-full transition-all duration-300" />
                </span>
              </motion.a>
            ))}
            
            <motion.a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded-md hover:bg-[#112240]/50 transition-all font-mono text-sm group"
              whileHover={{ y: -2, backgroundColor: "rgba(17, 34, 64, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span>Resume</span>
              <svg
                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="flex items-center md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#ccd6f6] hover:text-[#64ffda] hover:bg-[#112240]/50 focus:outline-none transition-all"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 py-2 space-y-1 bg-[#0a192f] shadow-lg">
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  className="block px-3 py-3 rounded-md text-[#ccd6f6] hover:text-[#64ffda] hover:bg-[#112240]/50 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-[#64ffda] font-mono text-sm mr-2">{link.number}.</span>
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-3 rounded-md text-[#64ffda] border border-[#64ffda] hover:bg-[#112240]/50 transition-all font-mono text-sm text-center group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center">
                  Resume
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;