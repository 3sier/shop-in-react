import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import StyledButton from "../buttons/StyledButton";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar = () => {
  const [userName, setUserName] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    window.location.href = "/home";
  };

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      setUserName(localStorage.getItem("username"));
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">
          <img src="https://i.ibb.co/4FXKB9d/3dgifmaker33254.gif" alt="RSELL" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>

      {isLoggedIn ? (
        <div className="navbar-logout">
          <StyledButton text="Logout" handleClick={handleLogout} size="small" />
        </div>
      ) : (
        <>
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
        </>
      )}
    </nav>
  );
};

export default Navbar;
