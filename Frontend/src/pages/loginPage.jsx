import React, { useState } from "react";
import Navbar from "../components/NavBar";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // TODO: add login API logic here
  };

  return (
    <div className="container mt-5 pt-5" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-4">Login</h3>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="btn btn-secondary w-100">
          Login
        </button>
      </form>
      <Navbar />
    </div>
  );
};

export default LoginPage;
