import "./../../styles/navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img
          src="src/assets/diamond.svg"
          alt="diamond-logo"
          className="logo-img"
        />
      </div>

      <ul className="navbar-options">
        <li className="nav-items">
          <i className="fa-solid fa-house icon"></i> <a href="/home">Home</a>
        </li>
        <li className="nav-items">
          <i className="fa-solid fa-code icon"></i>
          <a href="/skills">Skills</a>
        </li>
        <li className="nav-items">
          <i className="fa-solid fa-laptop icon"></i>
          <a href="/projects">Projects </a>
        </li>
        <li className="nav-items">
          <i className="fa-solid fa-book icon"></i>
          <a href="/publications">Publications </a>
        </li>
        <li className="nav-items">
          <i className="fa-regular fa-newspaper icon"></i>
          <a href="/blogs">Blogs</a>
        </li>
        <li className="nav-items">
          <i className="fa-solid fa-briefcase icon"></i>
          <a href="/workExp">Work Experience</a>
        </li>
        <li className="nav-items">
          <i className="fa-solid fa-download icon"></i>
          <a
            href="https://drive.google.com/file/d/18KUyE6TVKxEjr5U-I6HmMyNxel712bz9/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </li>
        {/* <li className="nav-items">
          <i className="fa-solid fa-phone icon"></i>
          <a>Contact Me</a>
        </li> */}
      </ul>
    </div>
  );
}
