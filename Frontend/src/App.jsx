import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";

import Home from "./pages/homePage.jsx";
import About from "./pages/aboutPage.jsx";
import Courses from "./pages/coursesPage.jsx";
import Trainers from "./pages/trainerPage.jsx";
import Contact from "./pages/contactPage.jsx";
import Register from "./pages/registerPage.jsx";
import Login from "./pages/loginPage.jsx";

import { useState } from "react";
import TechnicalSkillQuiz from "./components/TechnicalSkillQuiz/TechnicalSkillQuiz.jsx";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <br />
      <br />
      <div className="container mt-5">
        <button className="btn btn-success" onClick={() => setOpen(true)}>
          Enrollment Test
        </button>
        {open && <TechnicalSkillQuiz onClose={() => setOpen(false)} />}
      </div> */}
    </>
  );
};

export default App;
