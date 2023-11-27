import "./../../styles/footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <p className="footer-tagline">Connect with me</p>

      <ul className="socials-container">
        <li>
          <a href="mailto:saumyagupta2025@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope socials-icon"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/saumyagupta2025" target="_blank">
            <i className="fa-brands fa-github socials-icon"></i>
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/saumya2029/" target="_blank">
            <i className="fa-brands fa-linkedin socials-icon"></i>
          </a>
        </li>

        <li>
          <a href="https://twitter.com/saumya_812" target="_blank">
            <i className="fa-brands fa-twitter socials-icon"></i>
          </a>
        </li>

        <li>
          <a href="https://www.instagram.com/saumyaa.gupta/" target="_blank">
            <i className="fa-brands fa-instagram socials-icon"></i>
          </a>
        </li>
      </ul>

      <hr className="horizontal-line"></hr>
      <p className="copyright">Copyright &copy;2023 Saumya Gupta</p>
    </div>
  );
}
