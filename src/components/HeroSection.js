import React from "react";
import ButtonClick from "./ButtonClick";
import "./HeroSection.css";
import "../App.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/videos/buddha.mp4" autoPlay loop muted />
      <h1>Esoterica</h1>
      <p>
        Learn about philosophy and explore the greatest philosophers of our past
      </p>
      <div className="hero-btns">
        <ButtonClick
          className="btns"
          buttonStyle="btn--outline"
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
