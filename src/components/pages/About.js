import React from "react";
import "../../App.css";
import "./About.css";

const About = () => {
  return (
    <div className="about-section">
      <div className="inner-container">
        <h1>About us</h1>
        <p className="text">Hey There welcome</p>
        <div className="philosophers">
          <span>LinkedIn</span>
          <span>Github</span>
          <span>Coding</span>
        </div>
      </div>
    </div>
  );
};

export default About;
