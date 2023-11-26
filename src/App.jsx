import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import "./App.css";
import Footer from "./components/Footer/Footer";
import "./components/Footer/Footer.css";
import Navbar from "./components/Navbar/Navbar";
import "./components/Navbar/Navbar.css";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />{" "}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
