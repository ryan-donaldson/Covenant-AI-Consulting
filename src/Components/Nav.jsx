import React, { useState } from "react";
import "./Nav.css";
import Logo from "../assets/Taglineless-removebg.png";
import { Link } from "react-router-dom";
import ContactPopup from "../UI/ContactPopup";

function Nav({ variant }) {
  const [showContact, setShowContact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={`nav nav__${variant}`}>
        <ContactPopup
          isOpen={showContact}
          onClose={() => setShowContact(false)}
        />
        <div className="nav__logo--wrapper">
          <img src={Logo} alt="Covenant AI Consulting" className="nav__logo" />
          <h1 className="nav__tagline">Ancient promises, modern results.</h1>
        </div>
        <div
          className={`nav__burger ${menuOpen ? "hidden" : ""}`}
          onClick={() => {
            setMenuOpen(true);
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className={`nav__links ${menuOpen ? "open" : ""}`}>
          <ul className="nav__links--list">
            <Link to="/" className="nav__link">
              Home
            </Link>
            <div className="nav__dropdown">
              <Link to="/services" className="nav__link nav__dropdown--trigger">
                Services
              </Link>

              <div className="nav__dropdown--menu">
                <Link to="/services#quickwins" className="nav__dropdown--item">
                  Quick Wins
                </Link>
                <Link to="/services#tiered" className="nav__dropdown--item">
                  Tiered Packages
                </Link>
                <Link to="/services#addons" className="nav__dropdown--item">
                  Add Ons
                </Link>
                <Link
                  to="/services#standalones"
                  className="nav__dropdown--item"
                >
                  Standalones
                </Link>
              </div>
            </div>
            <Link to="/casestudies" className="nav__link">
              Case Studies
            </Link>
            <Link to="/about" className="nav__link">
              About
            </Link>
            <button
              onClick={() => setShowContact(true)}
              className="nav__link nav__btn"
            >
              Schedule Now
            </button>
          </ul>
        </div>
        {menuOpen && (
          <div className="nav__mobile-modal">
            <button
              className="nav__mobile-close"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            <div className="nav__mobile-menu">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link to="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
              <Link to="/casestudies" onClick={() => setMenuOpen(false)}>
                Case Studies
              </Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>

              <button
                className="nav__mobile-btn"
                onClick={() => {
                  setMenuOpen(false);
                  setShowContact(true);
                }}
              >
                Schedule Now
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Nav;
