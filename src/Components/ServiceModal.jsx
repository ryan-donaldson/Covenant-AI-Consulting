import React from "react";
import "./ServiceModal.css";

function ServiceModal({ isOpen, onClose, service }) {
  if (!isOpen || !service) return null;

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        {/* TITLE */}
        <h2 className="modal__title">
          {service.title}
        </h2>

        {/* SUBTITLE / DESCRIPTION */}
        <p className="modal__subtitle">
          {service.description}
        </p>

        <hr className="modal__divider" />

        {/* INCLUDED FEATURES */}
        {service.included && (
          <>
            <p className="modal__section-title">This package includes:</p>
            <ul className="modal__list">
              {service.included.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <hr className="modal__divider" />
          </>
        )}

        {/* DETAILS BLOCK */}
        <div className="modal__details">
          <p><strong>Package cost:</strong> {service.price}</p>

          {service.priceFrequency && (
            <p><strong>Payment frequency:</strong> {service.priceFrequency}</p>
          )}

          <p><strong>Delivered in:</strong> {service.delivery}</p>
        </div>

        <button className="modal__close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ServiceModal;
