import ContactImg from "../assets/profilepic.png";


const Contact = () => {
  return (
    <section className="contact_section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact_content_wrapper">
          <div className="contact_form">
            <div className="form-container">
              <div className="contact_form_title">
                <p>
                  Connect with me via phone: {" "}
                  <span>03166344640</span> or email: <span>muhammad.anas159@gmail.com</span>
                </p>
              </div>

              <div className="form">
                <div className="single_field">
                  <input type="text" placeholder="Your name" name="name" />
                </div>
                <div className="single_field">
                  <input type="email" placeholder="Your email" name="email" />
                </div>
                <div className="single_field">
                  <input type="text" placeholder="Subject" name="subject" />
                </div>
                <div className="single_field">
                  <textarea name="message" placeholder="Your message" rows="4"></textarea>
                </div>
                <div className="submit_button">
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
