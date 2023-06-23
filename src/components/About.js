import AboutImg from "../assets/profilepic.png";

const About = () => {
  return (
    <section className="about_section" id="about">
      <div className="container">
        <div className="about_section_content_wrapper">

          <div className="about_img">
            <img alt="about section image" src={AboutImg} />
          </div>

          <div className="about_desc">
            <h2>About Me</h2>
            <p>
              "I am a BS Software Engineering student currently in my final year and have experience in  HTML, CSS, JavaScript,React Js,Node Js,
              MySQL, and Python. I have a strong background in computer science, with a focus on object-oriented programming and web development.
              I am a problem solver and a creative thinker who is passionate about creating and building amazing projects. My experience in university
              semester projects has equipped me with a solid foundation in software development, which I have applied to my side projects".
            </p>
            <p>
              I am always
              eager to learn new technologies and stay up-to-date with the latest industry trends."
            </p>

            <div className="linked_button">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <button>Visit My Github</button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
