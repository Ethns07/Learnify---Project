import React, { useState } from "react";
<<<<<<< HEAD
=======
import Navbar from "../components/Navbar.jsx";

>>>>>>> dd2eaa22100b05e1467785cbd98ed3326a40a639

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student", // Default role
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      setMessageType("error");
      return;
    }

    if (formData.password.length < 6) {
      setMessage("Password must be at least 6 characters!");
      setMessageType("error");
      return;
    }

    setLoading(true);
    setMessage("");
    setMessageType("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Registration successful! Redirecting...");
        setMessageType("success");
        localStorage.setItem("token", data.token);
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        setMessage(data.message || "Registration failed!");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setMessage(
        "Network error. Please make sure the backend server is running."
      );
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid min-vh-100 bg-gradient-primary">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
            <div className="row g-0">
              <div className="col-md-6 d-none d-md-block bg-primary position-relative">
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white p-4">
                  <i
                    className="bi bi-person-plus-fill"
                    style={{ fontSize: "4rem" }}
                  ></i>
                  <h3 className="mt-3 fw-bold">Join Our Community</h3>
                  <p className="opacity-75">
                    Create your account and connect with others
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body p-5">
                  <div className="text-center mb-4">
                    <h2 className="fw-bold text-dark mb-2">Create Account</h2>
                    <p className="text-muted">
                      Fill in your details to get started
                    </p>
                  </div>

                  {message && (
                    <div
                      className={`alert ${
                        messageType === "success"
                          ? "alert-success"
                          : "alert-danger"
                      } alert-dismissible fade show rounded-pill`}
                      role="alert"
                    >
                      <i
                        className={`bi ${
                          messageType === "success"
                            ? "bi-check-circle-fill"
                            : "bi-exclamation-triangle-fill"
                        } me-2`}
                      ></i>
                      {message}
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>
                  )}

                  <form onSubmit={handleRegister}>
                    <div className="mb-3">
                      <label className="form-label fw-semibold text-dark">
                        <i className="bi bi-person me-2"></i>Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg rounded-pill border-0 bg-light"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold text-dark">
                        <i className="bi bi-envelope me-2"></i>Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg rounded-pill border-0 bg-light"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold text-dark">
                        <i className="bi bi-briefcase me-2"></i>Role
                      </label>
                      <select
                        className="form-select form-control-lg rounded-pill border-0 bg-light"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                      >
                        <option value="student">Student</option>
                        <option value="instructor">Instructor</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold text-dark">
                        <i className="bi bi-lock me-2"></i>Password
                      </label>
                      <input
                        type="password"
                        className="form-control form-control-lg rounded-pill border-0 bg-light"
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        minLength="6"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold text-dark">
                        <i className="bi bi-shield-lock me-2"></i>Confirm
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control form-control-lg rounded-pill border-0 bg-light"
                        name="confirmPassword"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                      />
                    </div>

                    <div className="d-grid mb-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg rounded-pill shadow-sm"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Creating Account...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-person-plus me-2"></i>
                            Create Account
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-center">
                      <p className="mb-0 text-muted">
                        Already have an account?{" "}
                        <a
                          href="/login"
                          className="text-decoration-none fw-semibold text-primary"
                        >
                          Sign in here
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-white-50 small">
              © 2024 RedNote. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
