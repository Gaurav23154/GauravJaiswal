import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  // ... (keep your existing projects array)
  {
    title: "Vibes Connecting College Student's",
    description:
      "Vibes is a social platform that connects college students with similar interests through a smart matching questionnaire and intuitive UI.",
    tech: ["React.js", "Redux", "TailwindCSS", "Node.js", "Express.js"],
    github: "https://github.com/Gaurav23154/vibes-frontend.git",
    livelink: "https://vibes-incampus.vercel.app/",
  },
  {
    title: "Pinterest Clone",
    description:
      "A Pinterest-like application built with modern web technologies. Explore, pin, and share inspiring images.",
    tech: ["React.js", "CSS", "Express.js", "Node.js"],
    github: "https://github.com/Gaurav23154/Pinterest-Clone.git",
    livelink: "https://github.com/Gaurav23154/Pinterest-Clone.git",
  },
  {
    title:"Shopping Cart",
    description:
      "A fully functional shopping cart where you can add , remove items and increase count of cart items",
    tech: ["React.js", "CSS", "redux" , "context api"],
    github: "https://github.com/Gaurav23154/shopping-cart-reactjs-Payment-Gateway.git",
    livelink: "https://e-commerceshoppingcarts.netlify.app/",

  },
  {
    title: "Income Expense Tracker",
    description: "It Tracks you daily and Montly Budget",
    tech: ["React.js", "Redux", "TailwindCSS"],
    github: "https://github.com/Gaurav23154/vibes-frontend.git",
    livelink: "https://expensetrackercal.netlify.app/",
  },
  {
    title: "Image Gallery",
    description:
      "Countless no of Images which can be searced via tags applied to them",
    tech: ["React.js", "Redux", "TailwindCSS", "context api"],
    github: "https://github.com/Gaurav23154/Image-Scroll.git",
    livelink: "https://imagegallerypro.netlify.app/",
  },
  {
    title: "Contact",
    description:
      "A full-stack content management system with Markdown support and user authentication.",
    tech: ["React.js", "RestAPI", "CSS"],
    github: "",
  },
  {
    title: "E-Commerce App",
    description:
      "A modern shopping experience with cart, payment gateway, and product filtering ---> UPCOMING......",
    tech: ["React.js", "Stripe", "Firebase","TailwindCss"],
  },
  {
    title: "Tic Tac Toe",
    description: "An Exciting Game known by everyone",
    tech: ["JavaScript","CSS"],
    github: "https://github.com/Gaurav23154/JavaScript-Projects.git",
    liveLink: "https://github.com/Gaurav23154/JavaScript-Projects.git",
  },
];

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="w-full py-20 px-4 sm:px-8 max-w-6xl mx-auto">
      <div className="flex items-center mb-16">
        <span className="text-[#64ffda] font-mono mr-4">02.</span>
        <h2 className="text-[#ccd6f6] text-3xl font-bold">My Projects</h2>
        <div className="ml-6 h-px bg-[#233554] flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(showMore ? projects : projects.slice(0, 6)).map((project, index) => (
          <div 
            key={index}
            className="bg-[#112240] rounded-lg overflow-hidden border border-[#1e2a47] hover:border-[#64ffda] transition-all duration-300 hover:-translate-y-2 shadow-lg group"
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between mb-6">
                <div className="text-[#64ffda] text-3xl">📁</div>
                <div className="flex gap-4 text-[#a8b2d1]">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition">
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.livelink && (
                    <a href={project.livelink} target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition">
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-[#e6f1ff] text-xl font-bold mb-3 group-hover:text-[#64ffda] transition">
                {project.title}
              </h3>
              <p className="text-[#8892b0] mb-6 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs text-[#64ffda] bg-[#64ffda]/10 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-16 mx-auto block border border-[#64ffda] text-[#64ffda] px-8 py-3 rounded hover:bg-[#64ffda]/10 transition-colors duration-300"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};

export default Projects;