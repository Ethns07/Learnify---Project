import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
import heroBg from "../assets/home/hero.jpg";
import sectionImg from "../assets/home/section.jpg";
import webImg from "../assets/courses/web.jpg";
import marketingImg from "../assets/courses/marketing.jpg";
import contentImg from "../assets/courses/content.jpg";
import antonioImg from "../assets/courses/antonio.jpg";
import lanaImg from "../assets/courses/lana.jpg";
import brandonImg from "../assets/courses/brandon.jpg";
import walterwhiteImg from "../assets/home/walterwhite.jpg";
import sarahjhonsonImg from "../assets/home/sarahjhonson.jpg";
import williamandersonImg from "../assets/home/williamanderson.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="main">
        <br />

        {/* Hero Section */}
        <section
          id="hero"
          className="hero section text-white"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "100px 0",
            marginTop:"42px",
            opacity: "0.8"
          }}
        >
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
               <button  style={{   border: "none", height:"30px", width:"120px", textAlign:"center"  }}className="rounded-pill text-black"> Get Started</button>
              </Link>
            </div>
          </Container>
        </section>
        {/* Info and Image Row */}
        <section>
              <Container className="my-5">
                <Row className="align-items-center gx-5">
                  <Col md={6} >
                   <div style={{ marginTop: "-25px" }}> 
                    <h4 className="fw-bold mb-4">  We Provide the Most Valuable Learning Experience That Inspires
                  Growth.</h4>
                    <h4 className="fw-bold  mb-4">
                       Our college is known for its excellent education system,
                  experienced faculty, and modern facilities...
                    </h4>
                    <ul>
                      <li>✔  Every effort is
                    meaningful when it leads to real progress.</li>
                      <li>✔ Challenges may seem
                    burdensome, but they pave the way for success.</li>
                      <li>✔ We offer hands-on
                    learning experiences that open doors to real-world
                    opportunities.</li>
                    </ul>

                     <button style={{ backgroundColor: "#092c77",  border: "none", height:"30px", width:"120px", textAlign:"center" }}className="rounded-pill text-white">Read More</button>
                  <i className="bi bi-arrow-right "></i>
                    </div>
                  </Col>
                  <Col md={6}>
                    <img
                      src={sectionImg}
                      alt="Section"
                      className="img-fluid rounded"
                    />
                  </Col>
                </Row>
                 
              </Container>
              </section>

        {/* Counts Section */}
        <section id="counts" className="section counts light-background" >
          {/* Stats Row */}
                <Container className="text-center mb-5">
                  <Row className="gy-4 bg-light">
                    <Col xs={6} md={3}>
                      <h3>2200</h3>
                      <p>Students</p>
                    </Col>
                    <Col xs={6} md={3}>
                      <h3>50</h3>
                      <p>Courses</p>
                    </Col>
                    <Col xs={6} md={3}>
                      <h3>42</h3>
                      <p>Events</p>
                    </Col>
                    <Col xs={6} md={3}>
                      <h3>200</h3>
                      <p>Trainers</p>
                    </Col>
                  </Row>
                </Container>
        </section>

       <section id="why-us" className="py-5">
  <Container>
    <Row className="gy-4">
      {/* Left Blue Box */}
      <Col lg={4} data-aos="fade-up" data-aos-delay="100">
        <div
          className="text-white p-4 h-100 d-flex flex-column justify-content-between"
          style={{ backgroundColor: "#092c77", borderRadius: "8px" }}
        >
          <div>
            <h4 className="fw-bold">Why Choose Our Products?</h4>
            <p className="mt-3" style={{ fontSize: "14px", lineHeight: "1.3" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
            </p>
          </div>
          <div className="text-start mt-3">
            <button
              className="btn btn-primary rounded-pill d-flex align-items-center gap-2"
              style={{ backgroundColor: "#81a1e5", border: "none" }}
            >
              Read More <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </Col>

      {/* Right Info Cards */}
      <Col lg={8} data-aos="fade-up" data-aos-delay="200">
        <Row className="g-4">
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
            <Col md={4} key={idx}>
              <div className="bg-white border rounded shadow-sm text-center p-4 h-100">
                <div
                  className="d-flex justify-content-center align-items-center mb-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#eef4ff",
                    borderRadius: "50%",
                    margin: "0 auto",
                  }}
                >
                  <i
                    className={`bi ${item.icon}`}
                    style={{ fontSize: "24px", color: "#0d6efd" }}
                  ></i>
                </div>
                <h6 className="fw-bold">{item.title}</h6>
                <p className="text-muted small">{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  </Container>
</section>


        {/* Features Section */}
       <section id="features" className="features section py-5">
  <Container>
    <Row className="gy-4">
      {[
        { icon: "eye", title: "Lorem Ipsum", color: "#ffbb2c" },
        { icon: "infinity", title: "Dolor Sitema", color: "#5578ff" },
        { icon: "mortarboard", title: "Sed perspiciatis", color: "#e80368" },
        { icon: "nut", title: "Magni Dolores", color: "#e361ff" },
        { icon: "shuffle", title: "Nemo Enim", color: "#47aeff" },
        { icon: "star", title: "Eiusmod Tempor", color: "#ffa76e" },
        { icon: "x-diamond", title: "Midela Teren", color: "#11dbcf" },
        { icon: "camera-video", title: "Pira Neve", color: "#4233ff" },
        { icon: "command", title: "Dirada Pack", color: "#b2904f" },
        { icon: "dribbble", title: "Moton Ideal", color: "#b20969" },
        { icon: "activity", title: "Verdo Park", color: "#ff5828" },
        { icon: "brightness-high", title: "Flavor Nivelanda", color: "#29cc61" },
      ].map((feature, idx) => (
        <Col
          key={idx}
          lg={3}
          md={4}
          sm={6}
          xs={12}
          data-aos="fade-up"
          data-aos-delay={100 * (idx + 1)}
        >
          <div className="shadow rounded text-center p-4 h-100 border">
            <i
              className={`bi bi-${feature.icon} mb-3`}
              style={{ color: feature.color, fontSize: "32px" }}
            ></i>
            <h6 className="mb-0">{feature.title}</h6>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</section>
<section id="courses" className="courses section" style={{ marginTop: "35px" }}>
  <Container>
    <h3 className="fw-bold mb-4">POPULAR COURSES</h3>
    <Row className="gy-4">
      {/* Course 1 */}
      <Col lg={4} md={6} data-aos="zoom-in" data-aos-delay="100">
        <Card className="h-100 shadow-sm border-0">
          <Card.Img variant="top" src={webImg} alt="Web" />
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="btn rounded-pill text-white px-3 py-1" style={{ backgroundColor: "#092c77" }}>
                Web Development
              </span>
              <span className="price fw-bold">$169</span>
            </div>
            <Card.Title>Website Design</Card.Title>
            <Card.Text>
              Et architecto provident deleniti facere repellat nobis iste.
              Id facere quia quae dolores dolorem tempore.
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src={antonioImg} className="rounded-circle me-2" width="50" height="50" alt="Antonio" />
                <h6 className="text-muted mb-0">Antonio</h6>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-person me-1"></i>50
                <span className="mx-2"></span>
                <i className="bi bi-heart text-danger me-1"></i>65
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Course 2 */}
      <Col lg={4} md={6} data-aos="zoom-in" data-aos-delay="200">
        <Card className="h-100 shadow-sm border-0">
          <Card.Img variant="top" src={marketingImg} alt="Marketing" />
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="btn rounded-pill text-white px-3 py-1" style={{ backgroundColor: "#092c77" }}>
                Marketing
              </span>
              <span className="price fw-bold">$250</span>
            </div>
            <Card.Title>Search Engine Optimization</Card.Title>
            <Card.Text>
              Et architecto provident deleniti facere repellat nobis iste.
              Id facere quia quae dolores dolorem tempore.
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src={lanaImg} className="rounded-circle me-2" width="50" height="50" alt="Lana" />
                <h6 className="text-muted mb-0">Lana</h6>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-person me-1"></i>35
                <span className="mx-2"></span>
                <i className="bi bi-heart text-danger me-1"></i>42
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Course 3 */}
      <Col lg={4} md={6} data-aos="zoom-in" data-aos-delay="300">
        <Card className="h-100 shadow-sm border-0">
          <Card.Img variant="top" src={contentImg} alt="Content" />
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="btn rounded-pill text-white px-3 py-1" style={{ backgroundColor: "#092c77" }}>
                Content
              </span>
              <span className="price fw-bold">$180</span>
            </div>
            <Card.Title>Copywriting</Card.Title>
            <Card.Text>
              Et architecto provident deleniti facere repellat nobis iste.
              Id facere quia quae dolores dolorem tempore.
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src={brandonImg} className="rounded-circle me-2" width="50" height="50" alt="Brandon" />
                <h6 className="text-muted mb-0">Brandon</h6>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-person me-1"></i>20
                <span className="mx-2"></span>
                <i className="bi bi-heart text-danger me-1"></i>85
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</section>

  <section className="py-5 bg-light">
  <Container>
    <Row className="gy-4">
      <Col md={4}>
        <Card className="text-center h-100 shadow-sm border-0">
          <Card.Img
            variant="top"
            src={walterwhiteImg}
            alt="Walter White"
            className="img-fluid"
          />
          <Card.Body>
            <h5 className="fw-bold">Walter White</h5>
            <small className="text-muted d-block mb-2">Web Development</small>
            <p className="text-muted small mb-0">
              Explicabo voluptatem mollitia et repellat qui dolorum quasi.
            </p>
          </Card.Body>
          <Card.Footer className="bg-white border-0">
            <div className="d-flex justify-content-center gap-3 fs-5">
              <i className="bi bi-twitter"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </Card.Footer>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="text-center h-100 shadow-sm border-0">
          <Card.Img
            variant="top"
            src={sarahjhonsonImg}
            alt="Sarah Jhonson"
            className="img-fluid"
          />
          <Card.Body>
            <h5 className="fw-bold">Sarah Jhonson</h5>
            <small className="text-muted d-block mb-2">Marketing</small>
            <p className="text-muted small mb-0">
              Aut maiores voluptates amet et quis praesentium qui senda para.
            </p>
          </Card.Body>
          <Card.Footer className="bg-white border-0">
            <div className="d-flex justify-content-center gap-3 fs-5">
              <i className="bi bi-twitter"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </Card.Footer>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="text-center h-100 shadow-sm border-0">
          <Card.Img
            variant="top"
            src={williamandersonImg}
            alt="William Anderson"
            className="img-fluid"
          />
          <Card.Body>
            <h5 className="fw-bold">William Anderson</h5>
            <small className="text-muted d-block mb-2">Content</small>
            <p className="text-muted small mb-0">
              Quisquam facilis cum velit laborum corrupti fuga rerum quia.
            </p>
          </Card.Body>
          <Card.Footer className="bg-white border-0">
            <div className="d-flex justify-content-center gap-3 fs-5">
              <i className="bi bi-twitter"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  </Container>
</section>

      </main>
    </>
  );
};

export default Home;
