import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import SideElement from "./components/SideElement";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#0a192f]" : "bg-gray-100"} transition-colors duration-300`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="px-4 sm:px-10 lg:px-20 mx-auto max-w-7xl">
        <SideElement />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;