import React from "react";
import "./ButtonClick.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];

const SIZES = ["btn--medium", "btn--large"];

const ButtonClick = ({ children, buttonSize, buttonStyle, onClick, type }) => {
  const checkButton = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  // Check if STYLES includes buttonStyle

  const checkSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButton} ${checkSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default ButtonClick;
