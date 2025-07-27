import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroBg from "../assets/img/hero-bg.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="main">
        <br />

        {/* Hero Section */}
        <section id="hero" className="hero section dark-background">
          {/* <img src={heroBg} alt="Hero" data-aos="fade-in" /> */}

          <Container>
            <h2 data-aos="fade-up" data-aos-delay="100">
              Learning Today,
              <br />
              Leading Tomorrow
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              style={{ fontSize: "16px" }}
            >
              We are a Team of Talented, Providing Quality Education with Modern
              Technology
            </p>
            <div
              className="d-flex mt-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link to="/courses" className="btn-get-started">
                Get Started
              </Link>
            </div>
          </Container>
        </section>

        {/* About Section */}
        <section id="about" className="about section">
          <Container>
            <Row className="gy-4">
              <Col
                lg={6}
                className="order-1 order-lg-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/* <img src={aboutImg} className="img-fluid" alt="About" /> */}
              </Col>
              <Col
                lg={6}
                className="order-2 order-lg-1 content"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>
                  We Provide the Most Valuable Learning Experience That Inspires
                  Growth.
                </h3>
                <p className="fst-italic">
                  Our college is known for its excellent education system,
                  experienced faculty, and modern facilities...
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i> Every effort is
                    meaningful when it leads to real progress.
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> Challenges may seem
                    burdensome, but they pave the way for success.
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> We offer hands-on
                    learning experiences that open doors to real-world
                    opportunities.
                  </li>
                </ul>
                <Link to="/about" className="read-more">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Counts Section */}
        <section id="counts" className="section counts light-background">
          <Container data-aos="fade-up" data-aos-delay="100">
            <Row className="gy-4 text-center">
              {[
                { end: 2200, label: "Students" },
                { end: 50, label: "Courses" },
                { end: 42, label: "Events" },
                { end: 200, label: "Trainers" },
              ].map((item, idx) => (
                <Col key={idx} lg={3} md={6}>
                  <div className="stats-item w-100 h-100">
                    <span
                      className="purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end={item.end}
                      data-purecounter-duration="1"
                    >
                      {item.end}
                    </span>
                    <p>{item.label}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="section why-us">
          <Container>
            <Row className="gy-4">
              <Col lg={4} data-aos="fade-up" data-aos-delay="100">
                <div className="why-box">
                  <h3>Why Choose Our Products?</h3>
                  <p>
                    Lorem ipsum dolor sit amet... Tenetur quia eos. Autem
                    tempore quibusdam vel necessitatibus optio ad corporis.
                  </p>
                  <div className="text-center">
                    <Link to="#" className="more-btn">
                      <span>Learn More</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={8}>
                <Row className="gy-4" data-aos="fade-up" data-aos-delay="200">
                  {[
                    {
                      icon: "bi-clipboard-data",
                      title: "Corporis voluptates officia",
                      desc: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
                    },
                    {
                      icon: "bi-gem",
                      title: "Ullamco laboris",
                      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
                    },
                    {
                      icon: "bi-inboxes",
                      title: "Labore consequatur",
                      desc: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
                    },
                  ].map((item, idx) => (
                    <Col key={idx} xl={4}>
                      <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className={`bi ${item.icon}`}></i>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Features Section */}
        <section id="features" className="features section">
          <Container>
            <Row className="gy-4">
              {[
                { icon: "eye", title: "Lorem Ipsum", color: "#ffbb2c" },
                { icon: "infinity", title: "Dolor Sitema", color: "#5578ff" },
                {
                  icon: "mortarboard",
                  title: "Sed perspiciatis",
                  color: "#e80368",
                },
                { icon: "nut", title: "Magni Dolores", color: "#e361ff" },
                { icon: "shuffle", title: "Nemo Enim", color: "#47aeff" },
                { icon: "star", title: "Eiusmod Tempor", color: "#ffa76e" },
                { icon: "x-diamond", title: "Midela Teren", color: "#11dbcf" },
                { icon: "camera-video", title: "Pira Neve", color: "#4233ff" },
                { icon: "command", title: "Dirada Pack", color: "#b2904f" },
                { icon: "dribbble", title: "Moton Ideal", color: "#b20969" },
                { icon: "activity", title: "Verdo Park", color: "#ff5828" },
                {
                  icon: "brightness-high",
                  title: "Flavor Nivelanda",
                  color: "#29cc61",
                },
              ].map((feature, idx) => (
                <Col
                  key={idx}
                  lg={3}
                  md={4}
                  data-aos="fade-up"
                  data-aos-delay={100 * (idx + 1)}
                >
                  <div className="features-item">
                    <i
                      className={`bi bi-${feature.icon}`}
                      style={{ color: feature.color }}
                    ></i>
                    <h3>
                      <Link to="#" className="stretched-link">
                        {feature.title}
                      </Link>
                    </h3>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Home;
