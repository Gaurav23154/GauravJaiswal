import photo from "../assets/image/gauravphoto.jpg";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col lg:flex-row items-center justify-center max-w-5xl px-4 sm:px-8 mx-auto py-20 gap-16">
      {/* Text Section */}
      <div className="flex flex-col w-fit">
        {/* Section Heading */}
        <div className="flex items-center mb-10">
          <span className="mr-3 text-[#64ffda] font-mono text-xl">01.</span>
          <h2 className="text-[#ccd6f6] text-3xl font-semibold whitespace-nowrap">
            About Me
          </h2>
          <div className="ml-4 w-full h-px bg-[#233554]"></div>
        </div>

        {/* Description */}
        <div className="text-[#8892b0] text-base sm:text-lg leading-relaxed space-y-4">
          <p>
          I’m a passionate Full Stack Developer with strong problem-solving
          skills and a knack for building clean, user-centric web applications.
          Proficient in the MERN stack (MongoDB, Express.js, React, Node.js), I
          bring ideas to life through scalable and responsive designs. I’ve led
          impactful projects like Vibes, a social platform that gained 150+
          users on launch day, and developed tools like an Income Expense
          Tracker. With 400+ DSA problems solved and I enjoy breaking down
          complex logic.
          </p>
          <p>
            I have a passion for clean UI, maintainable code, and continuous
            learning. My current focus is on creating accessible, fast, and
            user-focused products.
          </p>
        </div>

        {/* Tech List */}
        <div className="text-[#8892b0] text-base sm:text-lg mt-6">
          Here are a few technologies I’ve been working with recently:
        </div>
        <div className="flex flex-wrap gap-6 mt-4">
          <ul className="list-none text-[#64ffda] font-mono space-y-1">
            <li>▸ JavaScript (ES6+)</li>
            <li>▸ React.js</li>
            <li>▸ Node.js</li>
          </ul>
          <ul className="list-none text-[#64ffda] font-mono space-y-1">
            <li>▸ Express.js</li>
            <li>▸ Tailwind CSS</li>
            <li>▸ Redux</li>
          </ul>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center lg:justify-end">
  <div className="relative group w-64 h-64 sm:w-72 sm:h-72">
    
    {/* Border Layer */}
    <div className="absolute top-0 left-0 w-full h-full rounded-md border-2 border-[#64ffda] transform translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300 ease-in-out z-0"></div>
    
    {/* Image Container with Green Tint */}
    <div className="relative z-10 w-full h-full overflow-hidden rounded-md bg-[#64ffda] group-hover:bg-transparent transition-all duration-300 ease-in-out">
      <img
        src={photo}
        alt="Gaurav's profile"
        className="w-full h-full object-cover rounded-md mix-blend-multiply filter grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
      />
    </div>
    
  </div>
</div>


      

    </section>
  );
};

export default About;
