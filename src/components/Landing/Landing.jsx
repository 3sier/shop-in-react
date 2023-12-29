import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <nav className="landing-navbar"></nav>
      </header>
      <main className="landing-main">
        <section className="landing-hero"></section>
        <section className="landing-features"></section>
        <section className="landing-testimonials"></section>
        <section className="landing-footer"></section>
      </main>
    </div>
  );
};

export default Landing;
