import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Memoize user data parsing
  const parseUserData = useCallback(() => {
    const token = localStorage.getItem("token");
    const userStr = localStorage.getItem("user");
    if (token && userStr) {
      try {
        return JSON.parse(userStr);
      } catch {
        return null;
      }
    }
    return null;
  }, []);

  // Initialize user data
  useEffect(() => {
    setUser(parseUserData());
  }, [parseUserData]);

  // Listen for storage changes (e.g., login/logout in other tabs)
  useEffect(() => {
    const handleStorageChange = () => {
      setUser(parseUserData());
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [parseUserData]);

  // Memoize logout handler
  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/login";
  }, []);

  // Memoize navigation items
  const navItems = useMemo(
    () => [
      { to: "/home", icon: "bi-house-door", label: "Home" },
      { to: "/about", icon: "bi-info-circle", label: "About" },
      { to: "/courses", icon: "bi-book", label: "Courses" },
      { to: "/trainers", icon: "bi-people", label: "Trainers" },
      { to: "/contact", icon: "bi-envelope", label: "Contact" },
    ],
    []
  );

  // Memoize auth buttons
  const authButtons = useMemo(
    () =>
      !user ? (
        <>
          <Link
            className="btn btn-outline-primary me-2 rounded-pill px-4 fw-medium"
            to="/register"
          >
            <i className="bi bi-person-plus me-1"></i> Register
          </Link>
          <Link
            className="btn btn-primary rounded-pill px-4 fw-medium"
            to="/login"
          >
            <i className="bi bi-box-arrow-in-right me-1"></i> Login
          </Link>
        </>
      ) : (
        <button
          className="btn btn-outline-danger rounded-pill px-4 fw-medium"
          onClick={handleLogout}
        >
          <i className="bi bi-box-arrow-right me-1"></i> Logout
        </button>
      ),
    [user, handleLogout]
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
      <div className="container">
        <Link
          className="navbar-brand fw-bold d-flex align-items-center"
          to="/home"
        >
          <span
            className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-2"
            style={{ width: "40px", height: "40px" }}
          >
            <i className="bi bi-mortarboard-fill text-white"></i>
          </span>
          <span className="text-primary">LEARNIFY</span>
        </Link>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navItems.map(({ to, icon, label }) => (
              <li className="nav-item" key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `nav-link mx-3 fw-medium ${
                      isActive ? "text-primary" : "text-white"
                    }`
                  }
                >
                  <i className={`bi ${icon} me-1`}></i> {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center">{authButtons}</div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
