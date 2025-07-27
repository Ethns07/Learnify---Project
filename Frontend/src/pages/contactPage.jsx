import React from "react";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
const Contact = () => {
  return (
    <main className="main">
      <br />
     {/* Page Title */}
      <div style={{ backgroundColor: "#092c77", padding: "40px 0", color: "#fff" }}>
        <Container className="text-center">
          <h2 className="mt-3">Contact</h2>
          <p className="mb-3 mx-auto" style={{ maxWidth: "700px" }}>
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint
            voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores.
            Quasi ratione sint. Sit quaerat ipsum dolorem.
          </p>
         
        </Container>
      </div>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        {/* Google Maps Embed */}
        <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
          <iframe
            style={{ border: 0, width: "100%", height: "300px" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

    <section id="contact" className="py-5 bg-light">
    <Container data-aos="fade-up" data-aos-delay="100">
    <Row className="gy-4">
      
      {/* Contact Info */}
      <Col lg={4}>
        <div className="bg-white p-4 rounded shadow-sm mb-3 d-flex align-items-start">
          <i className="bi bi-geo-alt fs-3 text-primary me-3"></i>
          <div>
            <h5 className="mb-1">Address</h5>
            <p className="mb-0">A108 Adam Street, New York, NY 535022</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow-sm mb-3 d-flex align-items-start">
          <i className="bi bi-telephone fs-3 text-primary me-3"></i>
          <div>
            <h5 className="mb-1">Call Us</h5>
            <p className="mb-0">+1 5589 55488 55</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow-sm d-flex align-items-start">
          <i className="bi bi-envelope fs-3 text-primary me-3"></i>
          <div>
            <h5 className="mb-1">Email Us</h5>
            <p className="mb-0">info@example.com</p>
          </div>
        </div>
      </Col>

      {/* Contact Form */}
      <Col lg={8}>
        <Form className="bg-white p-4 rounded shadow-sm" data-aos="fade-up" data-aos-delay="200">
          <Row className="gy-3">
            <Col md={6}>
              <Form.Control type="text" placeholder="Your Name" required />
            </Col>
            <Col md={6}>
              <Form.Control type="email" placeholder="Your Email" required />
            </Col>
            <Col md={12}>
              <Form.Control type="text" placeholder="Subject" required />
            </Col>
            <Col md={12}>
              <Form.Control as="textarea" rows={5} placeholder="Message" required />
            </Col>
            <Col md={12} className="text-center">
              <Button style={{backgroundColor:"#092c77"}} type="submit" className="px-4 py-2 rounded-pill">
                Send Message
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  </Container>
</section>

          <Navbar />
      
      </section>
    </main>
  );
};

export default Contact;
