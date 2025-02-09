import SectionTitle from "./SectionTitle"
import ProjectData from "../data/ProjectData"

const Projects = () => {
  return (
    <section className="projects_section" id="project">
      <div className="container">
        <h2 className="section-title">My Latest Projects</h2>
        <div className="projects_wrapper">
          {ProjectData.map((project) => {
            return (
              <div className="single_project" key={project.id}>
                <div className="project-content" 
                  style={{ 
                    backgroundImage: `url(${project.img})`,
                  }}>
                  <div className="project_desc">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <div className="linked_button">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
