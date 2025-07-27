import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import webImg from "../assets/courses/web.jpg";
import marketingImg from "../assets/courses/marketing.jpg";
import contentImg from "../assets/courses/content.jpg";
import antonioImg from "../assets/courses/antonio.jpg";
import lanaImg from "../assets/courses/lana.jpg";
import brandonImg from "../assets/courses/brandon.jpg";

const Courses = () => {
  return (
    <>
    <Navbar/>
    <main className="main">
      <br />

      {/* Page Title */}
      <div style={{ backgroundColor: "#092c77", padding: "40px 0", color: "#fff" }}>
        <Container className="text-center">
          <h2 className="mt-3">Courses</h2>
          <p className="mb-3 mx-auto" style={{ maxWidth: "700px" }}>
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint
            voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores.
            Quasi ratione sint. Sit quaerat ipsum dolorem.
          </p>
         
        </Container>
      </div>

     <section id="courses" className="courses section" style={{ marginTop: "35px" }}>
  <Container>
    
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

    </main>
    </>
  );
};

export default Courses;