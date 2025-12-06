import { useRef, useEffect } from "react";
import Logo from "../assets/logo3.png";

const Nav = () => {
  const burgerMenuRef = useRef();
  const navMenuRef = useRef();
  const navRef = useRef();

  function ToggleNav() {
    const burgerMenu = burgerMenuRef.current;
    const navMenu = navMenuRef.current;

    if (burgerMenu && navMenu) {
      navMenu.classList.toggle("nav-active");
      burgerMenu.classList.toggle("toggle");
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const nav = navRef.current;
      if (nav) {
        if (window.scrollY > 0) {
          nav.classList.add("stickyNav");
        } else {
          nav.classList.remove("stickyNav");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navRef}>
      <div className="container">
        <div className="nav_logo_container">
          <img id="logophoto" src={Logo} alt="Main Logo" />
        </div>

        <div className="nav_menu" ref={navMenuRef}>
          <ul className="nav_links">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="nav_actions">
            <ul className="social_links">
              <li>
                <a
                  href="https://www.facebook.com/muhammad.anas.77312478/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/muhammad-anas-fastnulhr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
            <a
              href="/Muhammad_Anas_resume.pdf"
              download
              className="resume-download"
            >
              <button className="btn-primary">Download Resume</button>
            </a>
            <div className="contact_button">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/muhammad-anas-fastnulhr/"
                rel="noopener noreferrer"
              >
                <button className="btn-outline">Let's Talk</button>
              </a>
            </div>
          </div>
        </div>

        <div className="bars" ref={burgerMenuRef} onClick={ToggleNav}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;