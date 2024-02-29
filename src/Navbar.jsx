import { useEffect, useState } from "react";

export default function Navbar() {
  const [opaque, setOpaque] = useState(false);
  useEffect(() => {
    window.onscroll = (event) => {
      // console.log(window.scrollY);
      if (window.scrollY > 220) {
        setOpaque(true);
      } else {
        setOpaque(false);
      }
    };
  }, []);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [closingAnimation, setClosingAnimation] = useState(false);
  const handleToggleClick = () => {
    setMobileNavOpen(!mobileNavOpen);
    setClosingAnimation(false);
  };

  // const handleCloseClick = () => {
  //   setMobileNavOpen(false);
  // };

  const handleCloseClick = () => {
    setClosingAnimation(true);
    setTimeout(() => {
      setMobileNavOpen(false);
      setClosingAnimation(false);
    }, 500); // Adjust timeout to match animation duration
  };

  const handleNavItemClick = () => {
    // Close mobile nav on any nav item click
    setMobileNavOpen(false);
  };

  return (
    <>
      <div
        className={`navbar-container flex justify-between items-center h-14 px-48 py-10 md:px-24 ${
          opaque && "bg-slate-950"
        }`}
        style={{
          position: "fixed",
          width: "100%",
          zIndex: "10000",
        }}
      >
        <div className="my-logo font-medium text-white">SG</div>
        <div className="toggle-icon text-white" onClick={handleToggleClick}>
          {mobileNavOpen ? (
            <i className="fa-solid fa-xmark"></i> // Cross icon for closing
          ) : (
            <i className="fa-solid fa-bars"></i> // Bar icon for opening
          )}
        </div>

        <div className="nav-links flex font-medium text-white justify-around gap-8">
          <a href="#" className="home">
            Home
          </a>
          <a href="#about-section" className="about">
            About
          </a>
          <a href="#skill-container" className="skill">
            Skills
          </a>
          <a href="#workex-container" className="workex">
            Work Exp
          </a>
          <a href="#projects-container" className="project">
            Projects
          </a>
          <a href="#publications-container" className="publication">
            Publications
          </a>

          <a href="#certifications-container" className="certification">
            Certifications
          </a>
          <a
            href="https://saumyagupta.hashnode.dev/"
            target="_blank"
            className="certification"
          >
            Blogs
          </a>
        </div>
      </div>

      <div
        className={`mobile-nav bg-slate-950 px-12 py-6 h-screen w-screen ${
          mobileNavOpen
            ? "slide-in-from-left block"
            : closingAnimation
            ? "slide-out-to-right" // Use 'slide-out-to-right' for right slide out:
            : " hidden"
        }`}
        style={{ zIndex: 1000, position: "fixed" }}
      >
        {/* <div className="flex justify-between">
          <div className="my-logo font-medium text-white mb-6">SG</div>
          <div
            className="close-btn text-white text-xl"
            onClick={handleCloseClick}
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div> */}
        <div className="nav-links-mobile flex flex-col font-small text-white justify-around gap-4 mt-10">
          <a href="#" className="home" onClick={handleNavItemClick}>
            Home
          </a>
          <a
            href="#about-section"
            className="about"
            onClick={handleNavItemClick}
          >
            About
          </a>
          <a
            href="#skill-container"
            className="skill"
            onClick={handleNavItemClick}
          >
            Skills
          </a>
          <a
            href="#workex-container"
            className="workex"
            onClick={handleNavItemClick}
          >
            Work Exp
          </a>
          <a
            href="#projects-container"
            className="project"
            onClick={handleNavItemClick}
          >
            Projects
          </a>
          <a
            href="#publications-container"
            className="publication"
            onClick={handleNavItemClick}
          >
            Publications
          </a>
          <a
            href="#certifications-container"
            className="certification"
            onClick={handleNavItemClick}
          >
            Certifications
          </a>
          <a
            href="https://saumyagupta.hashnode.dev/"
            className="blogs"
            target="_blank"
            onClick={handleNavItemClick}
          >
            Blogs
          </a>
        </div>
      </div>
    </>
  );
}
