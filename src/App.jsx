import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import SideElement from "./components/SideElement";

function App() {
  return (
    <div className="min-h-screen bg-[#0a192f]  scroll-smooth ">
      <div className="px-10 flex flex-col   relative ">
        <Header />
        <SideElement />
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
