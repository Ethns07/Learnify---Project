import React, { useEffect, useState } from "react";

const InstructorDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = JSON.parse(localStorage.getItem("user"));

    if (!token || !userData || userData.role !== "instructor") {
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
            <h2>Instructor Dashboard</h2>
            <button className="btn btn-outline-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>

          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <i className="bi bi-journal fs-1 text-primary"></i>
                  <h5 className="card-title mt-2">My Courses</h5>
                  <p className="card-text">Manage your courses</p>
                  <a href="/manage-courses" className="btn btn-primary">
                    Manage Courses
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <i className="bi bi-people fs-1 text-success"></i>
                  <h5 className="card-title mt-2">Students</h5>
                  <p className="card-text">View enrolled students</p>
                  <a href="/students" className="btn btn-success">
                    View Students
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <i className="bi bi-bar-chart fs-1 text-warning"></i>
                  <h5 className="card-title mt-2">Analytics</h5>
                  <p className="card-text">View course analytics</p>
                  <a href="/analytics" className="btn btn-warning">
                    View Analytics
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

export default InstructorDashboard;
