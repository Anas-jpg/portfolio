import Logo from "../assets/logo.png"

const Footer = () => {
  return (
    <section className="footer_section" id="contact">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Main logo" />
        </div>

        <ul className="social_links">
          <li><a href="https://www.facebook.com/muhammad.anas.77312478/" target="_blank" rel="noopener noreferrer">
            <span className="social-letter" aria-hidden="true">f</span>
          </a></li>
          <li><a href="https://www.linkedin.com/in/muhammad-anas-fastnulhr/" target="_blank" rel="noopener noreferrer">
            <span className="social-letter" aria-hidden="true">in</span>
          </a></li>
        </ul>

        <div className="copyright">
          &copy; 2026. All rights reserved by Anas
        </div>
      </div>
    </section>
  )
}

export default Footer
