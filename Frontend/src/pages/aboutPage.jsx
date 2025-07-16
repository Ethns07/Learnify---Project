// src/pages/About.jsx
import React from "react";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="main">
      <br />
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>About Us</h1>

                <p className="mb-0">
                  Odio et unde deleniti. Deserunt numquam exercitationem.
                  Officiis quo odio sint voluptas consequatur ut a odio
                  voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi
                  ratione sint. Sit quaerat ipsum dolorem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">About Us</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* About Us Section */}
      <section id="about-us" className="section about-us">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {/* <img
                src="/assets/img/about-2.jpg"
                className="img-fluid"
                alt="About"
              /> */}
            </div>

            <div
              className="col-lg-6 order-2 order-lg-1 content"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>Voluptatem dignissimos provident quasi corporis</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Duis aute irure dolor
                  in reprehenderit in voluptate velit.
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate trideta storacalaperda mastiro
                  dolore eu fugiat nulla pariatur.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Counts Section */}
      <section id="counts" className="section counts light-background">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {[
              { end: 1232, label: "Students" },
              { end: 64, label: "Courses" },
              { end: 42, label: "Events" },
              { end: 24, label: "Trainers" },
            ].map((item, idx) => (
              <div className="col-lg-3 col-md-6" key={idx}>
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end={item.end}
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>What are they saying</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper init-swiper">
            {/* Swiper config should be initialized in a separate JS/React logic */}
            <div className="swiper-wrapper">
              {/* Example Testimonial */}
              {[
                {
                  name: "Saul Goodman",
                  title: "Ceo & Founder",
                  text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus...",
                  img: "/assets/img/testimonials/testimonials-1.jpg",
                },
                {
                  name: "Sara Wilsson",
                  title: "Designer",
                  text: "Export tempor illum tamen malis malis eram quae irure esse labore...",
                  img: "/assets/img/testimonials/testimonials-2.jpg",
                },
              ].map((testimonial, i) => (
                <div className="swiper-slide" key={i}>
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src={testimonial.img}
                        className="testimonial-img"
                        alt={testimonial.name}
                      />
                      <h3>{testimonial.name}</h3>
                      <h4>{testimonial.title}</h4>
                      <div className="stars">
                        {[...Array(5)].map((_, idx) => (
                          <i className="bi bi-star-fill" key={idx}></i>
                        ))}
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>{testimonial.text}</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <Navbar />
        </div>
      </section>
    </main>
  );
};

export default About;
