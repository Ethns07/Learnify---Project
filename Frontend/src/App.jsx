import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/homePage.jsx";
import About from "./pages/aboutPage.jsx";
import Courses from "./pages/coursesPage.jsx";
import Trainers from "./pages/trainerPage.jsx";
import Contact from "./pages/contactPage.jsx";
import Register from "./pages/registerPage.jsx";
import Login from "./pages/loginPage.jsx";

const App = () => {
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
    </>
  );
};

export default App;
