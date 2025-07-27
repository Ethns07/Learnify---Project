import React from "react";
import { Container, Row, Col, Card,  } from "react-bootstrap";
import bg2Img from "../assets/about/bg2.jpg";
import saulgoodmanImg from "../assets/about/saulgoodman.jpg";
import sarawllssonImg from "../assets/about/sarawllsson.jpg";
import { FaStar } from "react-icons/fa";
// import Footer from "./components/pages/Footer.jsx";

const About = () => {
  return (
    <>
     {/* <Footer/> */}
    <main className="main">
      <br />
      {/* Top Blue Section */}
      <div style={{ backgroundColor: "#092c77", padding: "40px 0", color: "#fff" }}>
        <Container className="text-center">
         <h2 style={{ marginTop: "20px" }}>About</h2>
         <p className="mb-0" style={{ maxWidth: "700px", margin: "0 auto" }}>
             Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint
             voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores.
             Quasi ratione sint. Sit quaerat ipsum dolorem.
           </p>
         
        
        </Container>
      </div>

      {/* Info and Image Row */}
      <Container className="my-5">
        <Row className="align-items-center gx-5">
          <Col md={6} >
           <div style={{ marginTop: "-110px" }}> 
            <h4 className="fw-bold mb-4">Voluptatem dignissimos provident quasi corporis</h4>
            <p className="fst-italic text-muted  mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>✔ Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li>✔ Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li>✔ Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</li>
            </ul>
            </div>
          </Col>
          <Col md={6}>
            <img
              src={bg2Img}
              alt="bg"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>

      {/* Stats Row */}
      <Container className="text-center mb-5">
        <Row className="gy-4 bg-light">
          <Col xs={6} md={3}>
            <h3>259</h3>
            <p>Students</p>
          </Col>
          <Col xs={6} md={3}>
            <h3>13</h3>
            <p>Courses</p>
          </Col>
          <Col xs={6} md={3}>
            <h3>9</h3>
            <p>Events</p>
          </Col>
          <Col xs={6} md={3}>
            <h3>5</h3>
            <p>Trainers</p>
          </Col>
        </Row>
      </Container>

      {/* Testimonials */}
      <Container className="pb-5">
        <h5 className="text-uppercase text-muted ">Testimonials</h5>
        <h3 className="mb-4">What Are They Saying</h3>
        <Row className="gy-4">
          <Col md={6}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={saulgoodmanImg}
                    alt="saulgoodman"
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="mb-0">
                      Saul Goodman{" "}
                      <br />
                      {[...Array(5)].map((_, i) => (
                      <FaStar key={i} style={{ color: "#ffc107", fontSize: "14px" }} />
                       ))}</h6>
                    <small className="text-muted">CEO & Founder</small>
                  </div>
                </div>
                <p className="fst-italic">
                  "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus."
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={sarawllssonImg}
                    alt="sarawllsson"
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="mb-0">
                      Sara Wllsson{" "}
                      <br />
                      {[...Array(5)].map((_, i) => (
                      <FaStar key={i} style={{ color: "#ffc107", fontSize: "14px" }} />
                       ))}</h6>
                    <small className="text-muted">Designer</small>
                  </div>
                </div>
                <p className="fst-italic">
                  "Export tempor illum tamen malis eram quae irure esse labore quem cillum quid cillum eram malis."
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
    </>
  );
};

export default About;

