import React from "react";
<<<<<<< HEAD
=======
import { Card, Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar.jsx";
>>>>>>> 5db98e298bec7c29a4ef991df1e5c177d4e2421e
import { Link } from "react-router-dom";
import amandajepsonImg from "../assets/trainer/amandajepson.jpg";
import walterwhiteImg from "../assets/trainer/walterwhite.jpg";
import sarahjhonsonImg from "../assets/trainer/sarahjhonson.jpg";
import williamandersonImg from "../assets/trainer/williamanderson.jpg";
import briandoneImg from "../assets/trainer/briandone.jpg";
import josephapalasImg from "../assets/trainer/josephapalas.jpg";


const trainerPage = () => {
  return (
    <>
    <Navbar/>
      <main className="main">
        <br />
        {/* Page Title */}
        <div style={{ backgroundColor: "#092c77", padding: "40px 0", color: "#fff" }}>
          <Container className="text-center">
            <h2 style={{ marginTop: "20px" }}>Trainers</h2>
            <p className="mb-0" style={{ maxWidth: "700px", margin: "0 auto" }}>
              Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint
              voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores.
              Quasi ratione sint. Sit quaerat ipsum dolorem.
            </p>
            
          </Container>
        </div>

        {/* Trainers Section */}
       <section className="py-5 bg-light">
  <Container>
    <Row className="gy-4">
      <Col md={4}>
        <Card className="text-center h-100 shadow-sm border-0">
          <Card.Img
            variant="top"
            src={walterwhiteImg}
            alt="Walter White"
              className="img-fluid rounded-circle mx-auto mt-4"
            style={{ width: "180px", height: "180px", objectFit: "cover" }}
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
          className="img-fluid rounded-circle mx-auto mt-4"
            style={{ width: "180px", height: "180px", objectFit: "cover" }}
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
           className="img-fluid rounded-circle mx-auto mt-4"
            style={{ width: "180px", height: "180px", objectFit: "cover" }}
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
    <br /><br />
    <Row className="gy-4">
      <Col md={4}>
        <Card className="text-center h-100 shadow-sm border-0">
          <Card.Img
            variant="top"
            src={amandajepsonImg}
            alt="Amanda Jepson"
           className="img-fluid rounded-circle mx-auto mt-4"
            style={{ width: "180px", height: "180px", objectFit: "cover" }}
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
            src={briandoneImg}
            alt="Brian Done"
           className="img-fluid rounded-circle mx-auto mt-4"
            style={{ width: "180px", height: "180px", objectFit: "cover" }}
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
            src={josephapalasImg}
            alt="Josepha Palas"
           className="img-fluid rounded-circle mx-auto mt-4"
            style={{ width: "180px", height: "180px", objectFit: "cover" }}
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

export default trainerPage;
