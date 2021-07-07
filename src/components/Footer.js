import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";
import Button from "./ButtonClick";
const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Hermes
          <i className="fas fa-hamsa and-more" />
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Hermes
              <i className="fas fa-hamsa" />
            </Link>
          </div>
          <small className="website-rights">© Hermes 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link linkedin"
              href="www.linkedIn.com/adam-faidy"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
