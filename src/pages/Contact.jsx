const Contact = () => {
  return (
    <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-32 bg-[#0a192f]">
      <div className="max-w-2xl text-center">
        <p className="text-[#64ffda] font-mono mb-4">04. What's Next?</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6] mb-6">
          Get In Touch
        </h2>
        <p className="text-[#8892b0] text-lg mb-10 max-w-lg mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll do my best to get back to you!
        </p>
        <a
          href="mailto:gauravjaiswal1098@gmail.com"
          className="inline-block border-2 border-[#64ffda] text-[#64ffda] px-8 py-4 rounded-lg hover:bg-[#64ffda]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#64ffda]/20 animate-pulse hover:animate-none"
        >
          Say Hello
        </a>
      </div>

      <footer className="mt-32 pt-8 border-t border-[#233554] w-full max-w-md text-center">
        <p className="text-[#8892b0] text-sm">
          Designed & Built by <span className="text-[#64ffda]">Gaurav Jaiswal</span>
        </p>
      </footer>
    </section>
  );
};

export default Contact;