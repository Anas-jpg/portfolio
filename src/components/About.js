import AboutImg from "../assets/profilepic.png";

const About = () => {
  return (
    <section className="about_section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about_section_content_wrapper">
          <div className="about_img">
            <div className="image-frame">
              <img alt="about section image" src={AboutImg} />
            </div>
          </div>

          <div className="about_desc">
            <div className="about-content">
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">DRF</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">MySQL</span>
              </div>
              
              <p>
                I am a graduate with a BS in software engineering from FAST NUCES, combining strong theoretical foundations with practical expertise in modern technologies.
              </p>
              
              <p>As a problem solver and creative thinker, I specialize in:</p>
              
              <div className="specialties">
                Full-stack Web Development
                <br />
                Object-Oriented Programming
                <br />
                Database Design & Management
                <br />
                RESTful API Development
              </div>

              <p>
                I am always eager to learn new technologies and stay up-to-date with the latest industry trends.
              </p>

              <div className="linked_button">
                <a href="https://github.com/Anas-jpg/" target="_blank" rel="noopener noreferrer">
                  <button>Visit My Github</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
