import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-bar-container">
          <Link to="/" className="nav-logo">
            <i className="fas fa-hamsa" />
            Hermes
          </Link>
          <div className="menu" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"} />
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Philosophers
            </Link>
          </li>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
