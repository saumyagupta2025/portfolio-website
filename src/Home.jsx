// import ParticleNew from "./ParticlesNew";

import { useState } from "react";
import Particle from "./Particle";
export default function Home() {
  return (
    <>
      <Particle />
      <div
        className="home flex flex-col items-center justify-center gap-4 h-screen align-center"
        // style={{ margin: "13rem auto 17rem auto" }}
      >
        <p className="name font-medium text-white text-8xl content-center">
          Saumya <span className="text-sky-500">Gupta</span>
        </p>
        <p className="title text-white text-2xl">
          Software Developer & Data Engineer
        </p>
        <p className="socials text-white text-3xl flex gap-x-6 mt-2">
          <a href="mailto:saumyagupta2025@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope text-white"></i>
          </a>
          <a
            href="https://drive.google.com/file/d/1jJToGehjuY-_k25PzDQHH9KDiEj8EFL_/view?usp=drive_link"
            target="_blank"
          >
            <i className="fa-solid fa-file-lines text-white"></i>
          </a>
          <a href="https://www.linkedin.com/in/saumya2029/" target="_blank">
            <i className="fa-brands fa-linkedin text-white"></i>
          </a>

          <a href="https://github.com/saumyagupta2025" target="_blank">
            <i className="fa-brands fa-github text-white"></i>
          </a>
          <a href="https://twitter.com/saumya_812" target="_blank">
            <i className="fa-brands fa-twitter text-white"></i>
          </a>

          <a href="https://saumyagupta.hashnode.dev/" target="_blank">
            <i className="fa-brands fa-hashnode text-white"></i>
          </a>
        </p>
      </div>
    </>
  );
}
