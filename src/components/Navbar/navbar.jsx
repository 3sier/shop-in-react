import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="" alt="RSELL" />
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Sell</a></li>
        <li><a href="#">Discover</a></li>
        <li><a href="#">Profile</a></li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;