import { useRef, useEffect } from "react";
import Logo from "../assets/logo3.png";

const Nav = () => {
  const burgerMenuRef = useRef();
  const listNavRef = useRef();
  const navRef = useRef();

  function ToggleNav() {
    const burgerMenu = burgerMenuRef.current;
    const listNav = listNavRef.current;

    if (burgerMenu && listNav) {
      listNav.classList.toggle("nav-active");
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
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array since we don't need to re-run this effect

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          background-color: black;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 5px rgb(0, 0, 0);
          transition: all 0.3s ease; /* Keep the general transition */
        }

        .stickyNav {
          background-color: black;
          box-shadow: 0 2px 5px rgb(0, 0, 0);
          transition: all 0.3s ease; /* Smooth transition for sticky */
        }

        .nav_left_content,
        .nav_right_content {
          display: flex;
          align-items: center;
        }

        .nav_logo_container img {
          height: 50px;
          margin-right: 20px;
        }

        .nav_links {
          list-style: none;
          display: flex;
          gap: 20px;
        }

        .nav_links li a {
          text-decoration: none;
          color: white;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav_links li a:hover {
          color: #f9004d;
        }

        .social_links {
          list-style: none;
          display: flex;
          gap: 10px;
        }

        .social_links li a {
          color: white;
          font-size: 18px;
          transition: color 0.3s ease;
        }

        .social_links li a:hover {
          color: #f9004d;
        }

        .bars {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          height: 25px;
          cursor: pointer;
          z-index: 101;
          position: relative;
          margin-right: 15px;
        }

        .bars div {
          width: 25px;
          height: 2px;
          margin: 4px 0;
          background: #f9004d;
          transition: 0.3s;
        }

        .nav-active {
          transform: translateX(0) !important;
          box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
        }

        .contact_button button {
          padding: 10px 20px;
          background-color: #f9004d;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .contact_button button:hover {
          background-color: #d4003f;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(249, 0, 77, 0.2);
        }

        @media (max-width: 768px) {
          .nav_links {
            display: none;
            flex-direction: column;
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 75%;
            background-color: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(10px);
            padding: 80px 30px;
            transition: right 0.3s ease;
            z-index: 100;
          }

          .nav_links li {
            margin: 15px 0;
          }

          .nav_links li a {
            font-size: 1.2rem;
            display: block;
            padding: 10px 0;
          }

          .nav-active {
            display: flex;
            right: 0;
          }

          .bars {
            display: flex;
            z-index: 200;
          }

          .toggle .line1 {
            transform: rotate(-45deg) translate(-5px, 6px);
          }

          .toggle .line2 {
            opacity: 0;
          }

          .toggle .line3 {
            transform: rotate(45deg) translate(-5px, -6px);
          }

          .contact_button button {
            padding: 8px 16px;
            font-size: 0.9rem;
          }

          .social_links {
            margin-top: 20px;
            justify-content: center;
          }

          .social_links li a {
            font-size: 1.4rem;
            padding: 10px;
          }
        }
      `}</style>

      <nav ref={navRef}>
        <div className="nav_left_content nav_content_container">
          <div className="nav_logo_container nav_container_item">
            <img id="logophoto" src={Logo} alt="Main Logo" />
          </div>

          <ul
            className="nav_links nav_text_links nav_container_item"
            ref={listNavRef}
          >
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="nav_right_content nav_content_container">
          <ul className="social_links nav_container_item nav_links">
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

          <div className="contact_button nav_container_item">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/muhammad-anas-fastnulhr/"
              rel="noopener noreferrer"
            >
              <button>Let's Talk</button>
            </a>
          </div>
        </div>

        <div className="bars" ref={burgerMenuRef} onClick={ToggleNav}>
          <div className="line1 line"></div>
          <div className="line2 line"></div>
          <div className="line3 line"></div>
        </div>
      </nav>
    </>
  );
};

export default Nav;