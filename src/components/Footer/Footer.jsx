import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer__links">
          <div className="sb__footer__links__div">
            <h4>Social Media</h4>
            <div className="socialmedia">
              <p>
                <img
                  style={{ width: "10px", height: "10px" }}
                  src="https://static.vecteezy.com/system/resources/previews/023/986/739/original/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png"
                  alt="youtube"
                />
              </p>
              <p>
                <img
                  style={{ width: "10px", height: "10px" }}
                  src="https://media-assets.grailed.com/prd/misc/4RVKRZKGVV2AOOUVNYIXVXC6TKRYYVRCBRSR4A"
                  alt="instagram"
                />
              </p>
              <p>
                <img
                  style={{ width: "10px", height: "10px" }}
                  src="https://cdn-icons-png.flaticon.com/512/38/38401.png"
                  alt="github"
                />
              </p>
              <p>
                <img
                  style={{ width: "10px", height: "10px" }}
                  src="https://media-assets.grailed.com/prd/misc/ZHGE-Y7ODBF_GRHJH6DUUMJA_LN1KUX8KSSSSA"
                  alt="twitter"
                />
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>Asier © {new Date().getFullYear()} </p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/Terms">
              <div>
                <p>Terms of Use</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/about">
              <div>
                <p>About</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
