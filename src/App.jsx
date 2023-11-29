import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import "./App.css";
import Footer from "./components/Footer/Footer";
import "./components/Footer/Footer.css";
import Navbar from "./components/Navbar/navbar";
import "./components/Navbar/Navbar.css";
import Home from "./components/home/Home";
import "./components/Home/Home.css";
import Productdetail from "./components/ShowProduct/ShowProduct";
import Video from "./components/Video/Walking.mp4";
import Shop from "./components/Shop/Shop";
import Success from "./components/success/Success";
import Cancel from "./components/Cancel/Cancel";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [showFooter, setShowFooter] = React.useState(true);

  React.useEffect(() => {
    const currentPath = window.location.pathname;
    const shouldShowFooter =
      currentPath !== "/success" &&
      currentPath !== "/cancel" &&
      currentPath !== "/contact";
    setShowFooter(shouldShowFooter);
  }, [window.location.pathname]);

  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:id" element={<Productdetail />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </BrowserRouter>
      {showFooter && <Footer />}
    </div>
  );
};

export default App;
