import React from "react";
import ButtonClick from "./ButtonClick";
import "./HeroSection.css";
import "../App.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/videos/buddha.mp4" autoPlay loop muted />
      <h1>Adventure Awaits</h1>
      <p> What are you waiting for?</p>
      <div className="hero-btns">
        <ButtonClick
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Get Started
        </ButtonClick>
        <ButtonClick
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch Trailer <i className="far fa-play-circle" />
        </ButtonClick>
      </div>
    </div>
  );
};

export default HeroSection;
