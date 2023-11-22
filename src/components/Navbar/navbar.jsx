import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://i.ibb.co/kqFV6f5/RSELL.png" alt="RSELL" />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/sell">Sell</a>
        </li>
        <li>
          <a href="/discover">Discover</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
