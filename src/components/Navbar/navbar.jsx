import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import StyledButton from "../buttons/StyledButton";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://i.ibb.co/4FXKB9d/3dgifmaker33254.gif" alt="RSELL" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/discover">Discover</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>

      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <StyledButton text="Search" size="small" />
      </div>
      <div className="navbar-login">
        <Link to="/login">
          <StyledButton text="Login" size="small" />
        </Link>
      </div>
      <div className="navbar-signup">
        <Link to="/register">
          <StyledButton text="Signup" size="small" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
