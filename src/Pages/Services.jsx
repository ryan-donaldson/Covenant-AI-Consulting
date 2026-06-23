import React, { useEffect } from "react";
import { useState } from "react";
import "./Services.css";
import Nav from "../Components/Nav.jsx";
import ServiceCard from "../Components/ServiceCard.jsx";
import ServiceModal from "../Components/ServiceModal.jsx";
import servicesData from "../data/servicesData.js";
import Footer from "../Components/Footer.jsx";
import FooterBanner from "../Components/FooterBanner.jsx";
import BackToTopButton from "../UI/BackToTopButton.jsx";
import ContactPopup from "../UI/ContactPopup.jsx";
import { useLocation } from "react-router-dom";

function Services() {
  const [activeService, setActiveService] = useState(null);
  const [showContact, setShowContact] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    const { hash } = window.location;

    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [useLocation()]);

  function explanation() {
    if (!showExplanation) {
      setShowExplanation(true);
    } else {
      setShowExplanation(false);
    }
  }

  return (
    <>
      <BackToTopButton />
      <Nav variant="services" />
      <div id="services" className="services__banner">
        <h1 className="services__title">Services Page</h1>
        <h2 className="services__title--desc">
          Done-for-you AI implementation
        </h2>
      </div>
      <div className="v-line"></div>
      <div id="quickwins" className="quick__wins">
        <h1 className="quick__wins--title">Quick-Win Entry Offers 🏆</h1>
        <div className="quick__win--offers">
          {servicesData.quickWins.map((service) => (
            <ServiceCard
              variant="quick"
              key={service.id}
              {...service}
              title={service.title}
              description={service.description}
              price={service.price}
              delivery={service.delivery}
              onClick={() => setActiveService(service)}
            />
          ))}
        </div>
      </div>

      <ServiceModal
        isOpen={!!activeService}
        onClose={() => setActiveService(null)}
        service={activeService}
      />

      <div className="v-line"></div>
      <div id="tiered" className="tiered__engagement">
        <h1 className="tiered__engagement--title">
          Tiered Engagement Packages 📊
        </h1>
        <div className="tiered__engagement--packages">
          {servicesData.tiered.map((service) => (
            <ServiceCard
              variant="tiered"
              key={service.id}
              {...service}
              title={service.title}
              shortDesc={service.shortDesc}
              price={service.price}
              delivery={null}
              onClick={() => setActiveService(service)}
            />
          ))}
        </div>
      </div>

      <div className="v-line"></div>
      <div id="addons" className="addOn__menu">
        <div className="addOn__menu--banner">
          <h1 className="addOn__menu--title">Add-On Menu 📃</h1>
          <p className="addOn__menu--desc">Bolt-on to any tier</p>
        </div>
      </div>
      <div className="addOns">
        {servicesData.addOn.map((service) => (
          <React.Fragment key={service.id}>
            <div className="item">
              <div className="item__title">{service.title}</div>
              <div className="item__investment">{service.investment}</div>
            </div>
            <hr className="list__line"></hr>
          </React.Fragment>
        ))}
      </div>

      <div className="v-line"></div>
      <div id="standalones" className="standalone__menu">
        <div className="standalone__menu--banner">
          <h1 className="standalone__menu--title">Standalone Automations 🧩</h1>
          <p className="standalone__menu--desc">If you want something simple</p>
        </div>
      </div>
      <div className="standalones">
        {servicesData.standalone.map((service) => (
          <React.Fragment key={service.id}>
            <div className="standalone__item">
              <div className="standalone__item--title">
                {service.automationType}
              </div>
              <div className="standalone__item--investment">
                {service.buildFee}
              </div>
              <div className="item__maintenance">{service.maintenance}</div>
            </div>
            <hr className="standalone__list--line"></hr>
          </React.Fragment>
        ))}
      </div>
      <div className="v-line"></div>
      <div className="explanation__wrapper">
        <div className="explanation">
          <h2 onClick={() => explanation()} className="explanation__title">
            Not sure what any of that means? Click here for the simple version.
          </h2>
          {showExplanation ? (
            <>
              <p className="explanation__desc--one">
                Zapier is a tool that connects the apps your business already
                uses, things like your email platform, scheduling software,
                spreadsheets, and CRM, and makes them work together
                automatically. Instead of your team manually copying information
                from one place to another, sending follow-up emails by hand, or
                remembering to update a spreadsheet after every new inquiry,
                Zapier handles it in the background the moment something
                happens.
              </p>
              <p className="explanation__desc--two">
                Every automation package above is a set of these connections,
                built and configured specifically for your business. You tell me
                what's slipping through the cracks or eating up your team's time
                and I'll build the system that takes it off your plate.
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <button onClick={() => setShowContact(true)} className="floating__cta">
        <i className="fa-solid fa-envelope"></i>
      </button>
      <ContactPopup
        isOpen={showContact}
        onClose={() => setShowContact(false)}
      />
      <FooterBanner />
    </>
  );
}

export default Services;
