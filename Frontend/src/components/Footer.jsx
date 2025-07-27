
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white h-50"  >
      <Container  style={{ height: "200px", marginTop:"100px" }}>
        <Row className="gy-4 text-center text-md-start">
          <Col md={3}>
            <h5>Ethns</h5>
            <p>A308 Adam Street<br />New York, NY 535022</p>
            <p><strong>Phone:</strong> +1 5589 55488 55</p>
            <p><strong>Email:</strong> info@example.com</p>
            <div>
              <i className="bi bi-twitter me-2"></i>
              <i className="bi bi-facebook me-2"></i>
              <i className="bi bi-instagram me-2"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </Col>

          <Col md={3}>
            <h6 className="text-uppercase">Useful Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Home</a></li>
              <li><a href="#" className="text-decoration-none text-dark">About us</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Services</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Terms of service</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Privacy policy</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 className="text-uppercase">Our Services</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Web Design</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Web Development</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Product Management</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Marketing</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Graphic Design</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 className="text-uppercase">Our Newsletter</h6>
            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Your email"
                className="rounded-pill me-2"
              />
              <Button style={{ backgroundColor: "#092c77" }} className="rounded-pill">Subscribe</Button>
            </Form>
          </Col>
        </Row>

        <hr className="my-4" />

        <div className="text-center pb-3 text-black">
          &copy; Copyright <strong>Ethns</strong>. All Rights Reserved<br />
          Designed by <a href="#" className="text-decoration-none">BootstrapMade</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
