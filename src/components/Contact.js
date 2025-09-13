import ContactImg from "../assets/profilepic.jpg";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    const button = e.target.querySelector('button');
    button.disabled = true;
    button.textContent = 'Sending...';

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log('Email sent successfully');
        form.current.reset();
        button.textContent = 'Message Sent!';
        setTimeout(() => {
          button.disabled = false;
          button.textContent = 'Send Message';
        }, 3000);
    }, (error) => {
        console.log('Failed to send email:', error);
        button.disabled = false;
        button.textContent = 'Send Message';
        alert('Failed to send message. Please try again.');
    });
  };

  const phoneNumber = '+923166344640';
  const email = 'muhammad.anas159@gmail.com';
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`;

  return (
    <section className="contact_section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact_content_wrapper">
          <div className="contact_form">
            <div className="form-container">
              <div className="contact_form_title">
                <p>
                  Connect with me via phone or WhatsApp:{" "}
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                      color: '#f9004d',
                      textDecoration: 'underline'
                    }}
                  >
                    {phoneNumber}
                  </a>
                  {" "}or email:{" "}
                  <a 
                    href={`mailto:${email}`}
                    style={{ 
                      color: '#fff',
                      textDecoration: 'none'
                    }}
                  >
                    {email}
                  </a>
                </p>
              </div>

              <div className="form">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="single_field">
                    <input type="text" placeholder="Your name" name="user_name" required />
                  </div>
                  <div className="single_field">
                    <input type="email" placeholder="Your email" name="user_email" required />
                  </div>
                  <div className="single_field">
                    <input type="text" placeholder="Subject" name="subject" required />
                  </div>
                  <div className="single_field">
                    <textarea name="message" placeholder="Your message" rows="4" required></textarea>
                  </div>
                  <div className="submit_button">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
