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

      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Hermes
              <i class="fas fa-hamsa" />
            </Link>
          </div>
          <small class="website-rights">Hermes © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link twitter"
              href="www.linkedIn.com/adam-faidy"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
