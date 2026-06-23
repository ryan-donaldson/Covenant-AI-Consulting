import React, { useState } from "react";
import "./ContactPopup.css";

export default function ContactPopup({ isOpen, onClose }) {
  if (!isOpen) return null;
  const [copied, setCopied] = useState(false);

  const email = "nathan@convenantaico.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="contact__overlay" onClick={onClose}>
      <div className="contact__modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="contact__title">Get in Touch</h2>

        <p className="contact__blurb">
          Feel free to reach out using the info below, whether to schedule a
          call or learn more.
        </p>

        <hr className="contact__divider" />

        <div className="contact__section">
          <p className="contact__label">
            <i className="fa-solid fa-phone"></i> Phone:
          </p>
          <p className="contact__value">(208) 244-2107</p>
        </div>

        <div className="contact__section">
          <p className="contact__label">📧 Email:</p>
          <p className="contact__value">{email}</p>
          <button className="contact__copy-btn" onClick={copyEmail}>
            Copy Email
          </button>
        </div>

        {/* ⭐ Calendly Link */}
        <div className="call__link--wrapper">
          <a
            href="https://calendly.com/nathan-covenantaico/covenant-ai-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="call__link"
          >
            Book a Free Discovery Call
          </a>
        </div>

        <button className="contact__close-btn" onClick={onClose}>
          Close
        </button>

        {copied && <div className="contact__toast">Email copied!</div>}
      </div>
    </div>
  );
}
