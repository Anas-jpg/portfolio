const Header = () => {
  return (
    <>
      <header>
        <div className="header-overlay"></div>
        <div className="container">
          <div className="header_desc">
            <p>Software Developer</p>
            <h1>
              Hello, I'm <span>Muhammad Anas</span>
              <br />
              Crafting Digital Solutions Through Code
            </h1>
          </div>
        </div>
      </header>

      <section className="experience-section">
        <h2>Career Journey</h2>
        <div className="experience-timeline">
          <div className="experience-item current">
            <div className="timeline-dot"></div>
            <div className="experience-content">
              <h3>Associate Full Stack Engineer</h3>
              <p className="company-info"><strong>TripleK Technologies</strong> • Apr 2025 - Present</p>
              <ul>
                <li>Built memory-based chatbots by customizing LLMs.</li>
                <li>Developed voice cloning features for user personalization.</li>
                <li>Performed web scraping for data collection and analysis.</li>
                <li>Managed client communications to ensure clear delivery.</li>
                <li>Contributed to project planning and task allocation.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-connector"></div>

          <div className="experience-item past">
            <div className="timeline-dot"></div>
            <div className="experience-content">
              <h3>Associate Software Engineer</h3>
              <p className="company-info"><strong>Grayphite</strong> • Nov'24 - Present</p>
              <ul>
                <li>Building scalable back-end solutions & optimizing system performance</li>
                <li>Leading code reviews & implementing agile methodologies</li>
                <li>Developed WebSocket notification system & integrated LLM solutions</li>
              </ul>
            </div>
          </div>

          <div className="timeline-connector"></div>

          <div className="experience-item past">
            <div className="timeline-dot"></div>
            <div className="experience-content">
              <h3>Python Django Developer Intern</h3>
              <p className="company-info"><strong>Grayphite</strong> • Aug'24 - Sept'24</p>
              <ul>
                <li>Mastered Python, Django & REST API development principles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
