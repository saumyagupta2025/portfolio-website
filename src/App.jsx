import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Publications from "./Publication";
import Certifications from "./Certifications";
import WorkEx from "./WorkEx";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <WorkEx />
      <Projects />
      <Publications />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;
