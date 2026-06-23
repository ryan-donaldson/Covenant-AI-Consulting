import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer({ variant }) {
  return (
    <>
      <footer className={`${variant}__footer`}>
        <div className="footer__copyright">
          &copy; Copyright 2026, Covenant AI Consulting
        </div>
        <div className="footer__links">
          <ul className="footer__links--list">
            <Link to="/" className="footer__link">Home</Link>
            <Link to="/services" className="footer__link">Services</Link>
            <Link to="/casestudies" className="footer__link">Case Studies</Link>
            <Link to="/about" className="footer__link">About</Link>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
