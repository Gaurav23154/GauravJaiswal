const Body = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-40 bg-[#0a192f]"
    >
      <div className="max-w-4xl w-full flex flex-col items-start gap-6 text-left">
        <h1 className="text-[#64ffda] text-sm sm:text-base md:text-lg font-mono">
          Hi, my name is
        </h1>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#ccd6f6] leading-tight">
          Gaurav Jaiswal.
        </h2>

        <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#8892b0] leading-tight">
          I build things for the web.
        </h3>

        <p className="text-[#8892b0] text-sm sm:text-base md:text-lg max-w-2xl mt-2 sm:mt-4">
          I’m a  software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered projects.
        </p>

        <a
          href="#project"
          
          className="mt-6 inline-block border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded hover:bg-[#112240] transition duration-300 font-mono text-sm"
        >
          Check out my work!
        </a>
      </div>
    </section>
  );
};

export default Body;
