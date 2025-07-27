import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/homePage.jsx";
import About from "./pages/aboutPage.jsx";
import Courses from "./pages/coursesPage.jsx";
import Trainers from "./pages/trainerPage.jsx";
import Contact from "./pages/contactPage.jsx";
import Register from "./pages/registerPage.jsx";
import Login from "./pages/loginPage.jsx";
import Footer from "./components/Footer.jsx";

import 'bootstrap-icons/font/bootstrap-icons.css';

import { useState } from "react";
import TechnicalSkillQuiz from "./components/TechnicalSkillQuiz/TechnicalSkillQuiz.jsx";

const App = () => {
<<<<<<< HEAD
  const [open, setOpen] = useState(false);
=======
  const location = useLocation();
  const hideFooterRoutes = ["/login", "/register"];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
>>>>>>> 5db98e298bec7c29a4ef991df1e5c177d4e2421e

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
<<<<<<< HEAD
      {/* <br />
      <br />
      <div className="container mt-5">
        <button className="btn btn-success" onClick={() => setOpen(true)}>
          Enrollment Test
        </button>
        {open && <TechnicalSkillQuiz onClose={() => setOpen(false)} />}
      </div> */}
=======

      {/* Show footer only on specific routes */}
      {!shouldHideFooter && <Footer />}
>>>>>>> 5db98e298bec7c29a4ef991df1e5c177d4e2421e
    </>
  );
};

export default App;
