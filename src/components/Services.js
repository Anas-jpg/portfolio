import SectionTitle from "./SectionTitle";
import ServiceData from "../data/ServiceData"

const Services = () => {
  return (
    <section className="services_section" id="service">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="service_content_wrapper">
          {ServiceData.map((service, index) => {
            return (
              <div className="single_service" key={index}>
                <div className="service-content">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
