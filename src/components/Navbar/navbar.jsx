import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import StyledButton from "../buttons/StyledButton";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar = () => {
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
          <Link to="/profile">Profile</Link>
        </li>
      </ul>

      <div className="navbar-search">
        <OutlinedInput
          placeholder="Search"
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <SearchOutlinedIcon />
              </IconButton>
            </InputAdornment>
          }
        />
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
