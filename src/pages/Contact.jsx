const Contact = () => {
    return (
      <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-around px-4 sm:px-6 md:px-8 lg:px-16 bg-[#0a192f]">
        <div className="max-w-2xl w-full text-center flex flex-col items-center justify-center gap-6">
          {/* Section number */}
          <p className="text-[#64ffda] font-mono text-sm sm:text-base">04. What’s Next?</p>
  
          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ccd6f6]">
            Get In Touch
          </h2>
  
          {/* Description */}
          <p className="text-[#8892b0] text-base sm:text-lg md:text-xl max-w-xl">
            Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </p>
  
          {/* CTA Button */}
          <a
            href="mailto:gauravjaiswal1098@gmail.com"
            className="mt-4 inline-block border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded hover:bg-[#112240] transition duration-300 font-mono text-sm"
          >
            Say Hello
          </a>
        </div>
  
        {/* Footer */}
        <footer className=" text-xs text-[#8892b0] text-center">
          <p>Designed & Built by Gaurav Jaiswal</p>
        </footer>
      </section>
    );
  };
  
  export default Contact;
  