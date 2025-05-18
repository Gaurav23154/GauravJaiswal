import photo from "../assets/image/gauravphoto.jpg";

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto px-4 sm:px-8 gap-12 lg:gap-24">
      {/* Text Section */}
      <div className="flex-1">
        <div className="flex items-center mb-8">
          <span className="text-[#64ffda] font-mono mr-4 text-xl">01.</span>
          <h2 className="text-[#ccd6f6] text-3xl font-bold">About Me</h2>
          <div className="ml-6 h-px bg-[#233554] flex-1"></div>
        </div>

        <div className="text-[#8892b0] space-y-6 text-lg leading-relaxed">
          <p>
            I'm a <span className="text-[#64ffda]">Full Stack Developer</span> passionate about building 
            performant, accessible, and visually stunning web applications.
          </p>
          <p>
            With expertise in the <span className="text-[#64ffda]">MERN stack</span>, I've built projects like 
            social platforms with 150+ users and productivity tools that solve real-world problems.
          </p>
          <p>
            I thrive on turning complex problems into elegant solutions while maintaining 
            clean, maintainable code.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-[#ccd6f6] mb-6">Technologies I Use:</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              "JavaScript (ES6+)",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Tailwind CSS",
              "Redux",
              "Git/GitHub"
            ].map((tech, index) => (
              <div key={index} className="flex items-center">
                <span className="text-[#64ffda] mr-3">▹</span>
                <span className="text-[#a8b2d1]">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative mt-16 lg:mt-0 group">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-lg overflow-hidden">
          <div className="absolute inset-0 border-2 border-[#64ffda] rounded-lg translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300 z-0"></div>
          <div className="relative w-full h-full bg-[#64ffda] rounded-lg overflow-hidden group-hover:bg-transparent transition-all duration-300 z-10">
            <img
              src={photo}
              alt="Gaurav Jaiswal"
              className="w-full h-full object-cover mix-blend-multiply grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;