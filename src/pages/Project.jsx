import { useState } from "react";

const projects = [
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

const Project = () => {
  const [showMore, setShowMore] = useState(false);
  const visiblityProject = showMore ? projects : projects.slice(0, 3);

  return (
    <section
      id="project"
      className="w-full flex flex-col items-center justify-center py-5 px-4 min-h-screen"
    >
      {/* Heading */}
      <div className="flex items-center flex-wrap mb-8">
        <div className="flex items-baseline whitespace-nowrap">
          <span className="mr-2 font-normal text-base text-[#64ffda]">02.</span>
          <span className="text-[#ccd6f6] text-2xl sm:text-3xl font-semibold">
            Some Things I've Built
          </span>
        </div>
        <div className="ml-4 h-[1px] bg-[#42649d] opacity-50 w-20 sm:w-32 md:w-60 lg:w-80"></div>
      </div>

      {/* Responsive Grid for Projects */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {visiblityProject.map((project, idx) => (
          <li
            key={idx}
            className="transition-transform duration-300 transform hover:-translate-y-2 shadow-[rgba(2,12,27,0.7)] border-2 border-[#112240] rounded-md py-5 bg-[#0a192f]"
          >
            <div className="px-5">
              <div className="flex justify-between text-lg text-[#64ffda] mb-2">
                <div className="cursor-pointer">📁</div>
                <div className="flex gap-2 cursor-pointer">
                 <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
                  <a href={project.livelink} target="_blank" rel="noopener noreferrer">Share</a>
                </div>
              </div>

              <p className="text-[#64ffda] text-sm font-normal">
                Featured Project
              </p>
              <h3 className="text-[#e6f1ff] text-2xl font-semibold cursor-pointer hover:text-[#64ffda]">
                {project.title}
              </h3>

              <div className="py-4">
                <p className="text-base text-[#a8b2d1] leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="text-[#8892b0] px-5 font-mono">
              <ul className="flex flex-wrap gap-3 text-sm">
                {project.tech.map((val, idx) => (
                  <li key={idx}>{val}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setShowMore(!showMore)}
        className="text-[#64ffda] border-2 rounded-md border-[#64ffda] p-2.5 cursor-pointer hover:bg-[#334240] my-10 "
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};

export default Project;
