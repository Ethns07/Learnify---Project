import React, { useEffect, useState } from "react";

const StudentDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = JSON.parse(localStorage.getItem("user"));

    if (!token || !userData || userData.role !== "student") {
      window.location.href = "/login";
    } else {
      setUser(userData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
            <h2>Student Dashboard</h2>
            <button className="btn btn-outline-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>

          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <i className="bi bi-book fs-1 text-primary"></i>
                  <h5 className="card-title mt-2">My Courses</h5>
                  <p className="card-text">View enrolled courses</p>
                  <a href="/my-courses" className="btn btn-primary">
                    View Courses
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <i className="bi bi-clipboard fs-1 text-success"></i>
                  <h5 className="card-title mt-2">Assignments</h5>
                  <p className="card-text">Check assignments</p>
                  <a href="/assignments" className="btn btn-success">
                    View Assignments
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <i className="bi bi-graph-up fs-1 text-warning"></i>
                  <h5 className="card-title mt-2">Progress</h5>
                  <p className="card-text">Track your learning progress</p>
                  <a href="/progress" className="btn btn-warning">
                    View Progress
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
