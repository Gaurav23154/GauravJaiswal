const Body = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-40 bg-[#0a192f] pt-20">
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          {/* Greeting */}
          <div className="animate-fade-in">
            <p className="text-[#64ffda] font-mono text-sm">Hi, my name is</p>
          </div>

          {/* Name */}
          <div className="animate-slide-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ccd6f6]">
              Gaurav Jaiswal.
            </h1>
          </div>

          {/* Tagline */}
          <div className="animate-slide-up-delay">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#8892b0]">
              I build things for the web.
            </h2>
          </div>

          {/* Description */}
          <div className="animate-fade-in-delay">
            <p className="text-[#8892b0] max-w-2xl">
              I'm a software engineer specializing in building exceptional digital experiences.
              Currently, I'm focused on building accessible, human-centered products.
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-delay-2">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded-md hover:bg-[#112240] transition-all font-mono text-sm group"
            >
              <span>Get In Touch</span>
              <svg
                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-all"
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
