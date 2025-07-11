import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Left - Logo */}
        <Link className="navbar-brand fw-bold text-white fs-3" to="/">
          LEARNIFY
        </Link>

        {/* Center - Navigation Links */}
        {/* Center - Navigation Links */}
        <div className="d-flex justify-content-center flex-grow-1">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "nav-link text-warning mx-4 fw-bold"
                : "nav-link text-white mx-4"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "nav-link text-warning mx-4 fw-bold"
                : "nav-link text-white mx-4"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive
                ? "nav-link text-warning mx-4 fw-bold"
                : "nav-link text-white mx-4"
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/trainers"
            className={({ isActive }) =>
              isActive
                ? "nav-link text-warning mx-4 fw-bold"
                : "nav-link text-white mx-4"
            }
          >
            Trainers
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "nav-link text-warning mx-4 fw-bold"
                : "nav-link text-white mx-4"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Right - Register/Login Buttons */}
        <div className="d-flex">
          <Link className="btn btn-outline-light me-2" to="/register">
            Register
          </Link>
          <Link className="btn btn-light" to="/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
