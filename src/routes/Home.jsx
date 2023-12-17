import About from "../components/home/About";
import "./../styles/home.css";

export default function Home() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-greeting-container">
          <h1 className="hero-greeting">
            <span>👋🏻</span>
            &nbsp; Hi There! I'm
          </h1>
          <h1 className="hero-intro">
            <span>Saumya Gupta</span>
          </h1>

          {/* Typewriting */}
        </div>

        <div className="hero-image-container">
          <div className="image-wrapper">
            <img
              src="src/assets/hero-img.svg"
              alt="hero-img"
              className="hero-img"
            />
          </div>
        </div>

        {/* ABOUT ME */}
      </div>
      <div className="About-me-container">
        <About />
      </div>
    </>
  );
}
