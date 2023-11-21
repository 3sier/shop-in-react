import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Terms</a>
      </div>
      <div className="social-media">
        <img src="https://imgs.search.brave.com/3Pk3IOdxIjkHFc8m96wM_5ST2uaLKKRkZNdDD3fnO_Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ZWNlYzc4NjczZTQ0/NDAwMDRmMDllNzcu/cG5n" alt="instagram" />
        <img src="https://imgs.search.brave.com/LTQt0l9P4lWuIMiktMBeG_HrRXkgE-8e2snKSTIVn-A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzkz/My9QTkcvNTEyL3R3/aXR0ZXItbG9nby1v/bi1ibGFjay1iYWNr/Z3JvdW5kX2ljb24t/aWNvbnMuY29tXzcy/NTAzLnBuZw" alt="twitter" />
        <img src="https://imgs.search.brave.com/ZkPv_EZeGWA_dhQpuEobfF3k_MPeH7DRK8BW2bXxp60/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1NjUwMzgy/M2JsYWNrLXlvdXR1/YmUtbG9nby5wbmc" alt="youtube" />
      </div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;