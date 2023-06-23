import SectionTitle from "./SectionTitle";
import ServiceData from "../data/ServiceData"

const Services = () => {
  return (
    <section className="services_section" id="service">
      <SectionTitle
        title="Skills"
        desc="In a world hungry for greatness, your skills are the feast.

        ."
      />

      <div className="service_content_wrapper">
        {ServiceData.map((service, index) => {
          return (
            <div className="single_service" key={index}>
              <h2 className="icon">{service.icon}</h2>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Services;
