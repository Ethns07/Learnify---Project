import React, { useState } from "react";
import Navbar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar.jsx";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setMessage("Please fill in all fields!");
      setMessageType("error");
      return;
    }

    setLoading(true);
    setMessage("");
    setMessageType("");

    try {
      // Use full backend URL - change this to your actual backend URL
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Login successful! Redirecting...");
        setMessageType("success");
        // Store token and user data in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        // Redirect to dashboard or home page
        setTimeout(() => {
          navigate("/dashboard"); // or your desired redirect path
        }, 1500);
      } else {
        setMessage(data.message || "Login failed!");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage(
        "Network error. Please make sure the backend server is running."
      );
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container-fluid min-vh-100 bg-light">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-body p-5">
              <div className="text-center mb-4">
                <div
                  className="bg-primary rounded-circle mx-auto mb-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i
                    className="fi fi-person-fill text-white"
                    style={{ fontSize: "2rem" }}
                  ></i>
                </div>
                <h2 className="fw-bold text-dark">Welcome Back</h2>
                <p className="text-muted">
                  Sign in to continue to your account
                </p>
              </div>

              {message && (
                <div
                  className={`alert ${
                    messageType === "success" ? "alert-success" : "alert-danger"
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

              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="form-label fw-semibold text-dark">
                    Email Address
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <i className="bi bi-envelope text-muted"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control border-start-0 ps-0"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold text-dark">
                    Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <i className="bi bi-lock text-muted"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control border-start-0 ps-0"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      minLength="6"
                    />
                  </div>
                  <div className="text-end mt-2">
                    {/* <a
                      href="/forgot-password"
                      className="text-decoration-none text-primary"
                    >
                      Forgot Password?
                    </a> */}
                  </div>
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
                        Logging in...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        Sign In
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center">
                  <p className="mb-0 text-muted">
                    Don't have an account?{" "}
                    <a
                      href="/register"
                      className="text-decoration-none fw-semibold text-primary"
                    >
                      Register here
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-muted small">
              © 2024 Learnify. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
