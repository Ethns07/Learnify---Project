// src/pages/Courses.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

const Courses = () => {
  return (
    <main className="main">
      <br />
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Courses</h1>
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
              <li className="current">Courses</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* Courses Section */}
      <section id="courses" className="courses section">
        <div className="container">
          <div className="row">
            {/* Course Item 1 */}
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="course-item">
                <img
                  src="/assets/img/course-1.jpg"
                  className="img-fluid"
                  alt="Course 1"
                />
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="category">Web Development</p>
                    <p className="price">$169</p>
                  </div>
                  <h3>
                    <a href="#">Website Design</a>
                  </h3>
                  <p className="description">
                    Et architecto provident deleniti facere repellat nobis iste.
                    Id facere quia quae dolores dolorem tempore.
                  </p>
                  <div className="trainer d-flex justify-content-between align-items-center">
                    <div className="trainer-profile d-flex align-items-center">
                      <img
                        src="/assets/img/trainers/trainer-1-2.jpg"
                        className="img-fluid"
                        alt="Antonio"
                      />
                      <a href="#" className="trainer-link">
                        Antonio
                      </a>
                    </div>
                    <div className="trainer-rank d-flex align-items-center">
                      <i className="bi bi-person user-icon"></i>&nbsp;50
                      &nbsp;&nbsp;
                      <i className="bi bi-heart heart-icon"></i>&nbsp;65
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Item 2 */}
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="course-item">
                <img
                  src="/assets/img/course-2.jpg"
                  className="img-fluid"
                  alt="Course 2"
                />
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="category">Marketing</p>
                    <p className="price">$250</p>
                  </div>
                  <h3>
                    <a href="#">Search Engine Optimization</a>
                  </h3>
                  <p className="description">
                    Et architecto provident deleniti facere repellat nobis iste.
                    Id facere quia quae dolores dolorem tempore.
                  </p>
                  <div className="trainer d-flex justify-content-between align-items-center">
                    <div className="trainer-profile d-flex align-items-center">
                      <img
                        src="/assets/img/trainers/trainer-2-2.jpg"
                        className="img-fluid"
                        alt="Lana"
                      />
                      <a href="#" className="trainer-link">
                        Lana
                      </a>
                    </div>
                    <div className="trainer-rank d-flex align-items-center">
                      <i className="bi bi-person user-icon"></i>&nbsp;35
                      &nbsp;&nbsp;
                      <i className="bi bi-heart heart-icon"></i>&nbsp;42
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Item 3 */}
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="course-item">
                <img
                  src="/assets/img/course-3.jpg"
                  className="img-fluid"
                  alt="Course 3"
                />
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="category">Content</p>
                    <p className="price">$180</p>
                  </div>
                  <h3>
                    <a href="#">Copywriting</a>
                  </h3>
                  <p className="description">
                    Et architecto provident deleniti facere repellat nobis iste.
                    Id facere quia quae dolores dolorem tempore.
                  </p>
                  <div className="trainer d-flex justify-content-between align-items-center">
                    <div className="trainer-profile d-flex align-items-center">
                      <img
                        src="/assets/img/trainers/trainer-3-2.jpg"
                        className="img-fluid"
                        alt="Brandon"
                      />
                      <a href="#" className="trainer-link">
                        Brandon
                      </a>
                    </div>
                    <div className="trainer-rank d-flex align-items-center">
                      <i className="bi bi-person user-icon"></i>&nbsp;20
                      &nbsp;&nbsp;
                      <i className="bi bi-heart heart-icon"></i>&nbsp;85
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Navbar />
        </div>
      </section>
    </main>
  );
};

export default Courses;
