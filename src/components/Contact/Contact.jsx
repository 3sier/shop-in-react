import React from "react";
import "./Contact.css";
import StyledButton from "../buttons/StyledButton";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact Us</h1>
      <p className="contact-content">
        If you have any questions, feel free to send us a message. We strive to
        respond to all inquiries within 24 hours.
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Your name" className="contact-input" />
        <input
          type="email"
          placeholder="Your email"
          className="contact-input"
        />
        <textarea placeholder="Your message" className="contact-input" />
        <StyledButton text="Send" />
      </form>
    </div>
  );
};

export default Contact;
