import React from "react";
import ButtonClick from "./ButtonClick";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/videos/buddha.mp4" autoPlay loop muted />
      <h1>Adventure Awaits</h1>
      <p> What are you waiting for?</p>
      <div className="hero-btns">
        <ButtonClick
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </ButtonClick>
      </div>
    </div>
  );
};

export default HeroSection;
