import React from "react";
import "./FooterBanner.css";
import Logo from "../assets/Covenant AI Logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterBanner() {
  return (
    <>
      <div className="footer__banner">
        <div className="footer__banner--content">
          <div className="footer__banner--start">
            <div className="call__link--wrapper call__link--footer--wrap">
              <a
                href="https://calendly.com/nathan-covenantaico/covenant-ai-discovery-call"
                target="_blank"
                className="call__link call__link--footer"
              >
                Book a Free Discovery Call
              </a>
            </div>
          <div className="footer__copyright">
            &copy; Copyright 2026, Covenant AI Consulting
          </div>
          </div>
          <div className="banner__logo--wrapper">
            <img src={Logo} alt="" className="banner__logo" />
          </div>
          <div className="banner__contact">
            <h2 className="banner__contact--title">Get in touch</h2>
            <hr className="footer__banner--hr" />
            <p className="banner__contact--name">Name: Nathan Donaldson</p>
            <p className="banner__contact--number">Phone: (208) 244-2107</p>
            <p className="banner__contact--email">
              Email: nathan@covenantaico.com
            </p>
          </div>
          <div className="banner__media--links">
            <h2 className="banner__media--title">Connect with me</h2>
            <hr className="footer__banner--hr" />
            <ul className="media__links--list">
              {/* <li className="footer__banner--link">
                <FontAwesomeIcon icon={["fab", "square-facebook"]} />
              </li>
              <li className="footer__banner--link">
                <FontAwesomeIcon icon={["fab", "square-instagram"]} />
              </li> */}
              <a
                href="https://www.linkedin.com/in/nathan-donaldson-268259262"
                target="_blank"
                className="footer__banner--link"
              >
                <FontAwesomeIcon icon={["fab", "square-linkedin"]} />
              </a>
            </ul>
            
          </div>
          
        </div>
      </div>
    </>
  );
}

export default FooterBanner;
