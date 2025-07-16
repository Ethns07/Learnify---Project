// src/pages/Trainers.jsx
import React from "react";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";

const trainersData = [
  {
    name: "Walter White",
    subject: "Business",
    description:
      "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow",
    image: "/assets/img/team/team-1.jpg",
    delay: 100,
  },
  {
    name: "Sarah Jhonson",
    subject: "Marketing",
    description:
      "Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut",
    image: "/assets/img/team/team-2.jpg",
    delay: 200,
  },
  {
    name: "William Anderson",
    subject: "Maths",
    description:
      "Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui",
    image: "/assets/img/team/team-3.jpg",
    delay: 300,
  },
  {
    name: "Amanda Jepson",
    subject: "Foreign Languages",
    description:
      "Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur",
    image: "/assets/img/team/team-4.jpg",
    delay: 400,
  },
  {
    name: "Brian Doe",
    subject: "Web Development",
    description:
      "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit",
    image: "/assets/img/team/team-5.jpg",
    delay: 500,
  },
  {
    name: "Josepha Palas",
    subject: "Business",
    description:
      "Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel",
    image: "/assets/img/team/team-6.jpg",
    delay: 600,
  },
];

const Trainers = () => {
  return (
    <main className="main">
      <br />
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Trainers</h1>
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
              <li className="current">Trainers</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* Trainers Section */}
      <section id="trainers" className="section trainers">
        <div className="container">
          <div className="row gy-5">
            {trainersData.map((trainer, index) => (
              <div
                className="col-lg-4 col-md-6 member"
                key={index}
                data-aos="fade-up"
                data-aos-delay={trainer.delay}
              >
                <div className="member-img">
                  <img
                    src={trainer.image}
                    className="img-fluid"
                    alt={trainer.name}
                  />
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>{trainer.name}</h4>
                  <span>{trainer.subject}</span>
                  <p>{trainer.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Navbar />
        </div>
      </section>
    </main>
  );
};

export default Trainers;
