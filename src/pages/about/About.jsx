import Testimonial from "./Testimonial";
import Service from "./Service";

import {
  servicesData,
  aboutText,
  clientList,
  testimonials,
} from "../../constants/index";

const About = () => {
  return (
    <article className="about active">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>{aboutText[0]}</p>

        <p>{aboutText[1]}</p>
      </section>

      {/* Service */}

      <section className="service">
        <h3 className="h3 service-title">What i&lsquo;m doing</h3>

        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </ul>
      </section>

      {/* Testimonials */}

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </ul>
      </section>

      {/* Clients */}

      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          {clientList.map((client, index) => (
            <li key={index} className="clients-item">
              <a href={client.href}>
                <img src={client.src} alt={client.alt} />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
