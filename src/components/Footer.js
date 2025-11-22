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
            <i className="fab fa-facebook-f"></i>
          </a></li>
          <li><a href="https://www.linkedin.com/in/muhammad-anas-fastnulhr/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a></li>
        </ul>

        <div className="copyright">
          © 2025. All rights reserved by Anas
        </div>
      </div>
    </section>
  )
}

export default Footer
