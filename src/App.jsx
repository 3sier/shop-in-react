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
import Home from "./components/home/Home";
import "./components/Home/Home.css";
import Productdetail from "./components/ShowProduct/ShowProduct";
import Video from "./components/Video/Walking.mp4";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<landing />} />{" "}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:id" element={<Productdetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
