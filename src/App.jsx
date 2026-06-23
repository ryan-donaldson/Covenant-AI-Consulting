import "./App.css";
import React, { useRef } from "react";
import Nav from "../src/Components/Nav.jsx";
import FooterBanner from "./Components/FooterBanner.jsx";
import { Link } from "react-router-dom";
import Photo from "../src/assets/1774408194683.jpg";
import emailjs from "@emailjs/browser";
import BackToTopButton from "./UI/BackToTopButton.jsx";

function App() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_35oi749",
        "template_bf5at6i",
        formRef.current,
        "tMu4s46L6GpNILWJd",
      )
      .then(
        () => {
          console.log("SUCCESS");
          alert("Message sent!");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Something went wrong.");
        },
      );
  };

  return (
    <>
      <BackToTopButton />
      <Nav variant="home" />
      <section id="hero">
        <div className="hero__content--wrapper">
          <div className="hero__text--wrapper">
            <div className="hero__title--wrapper">
              <h1 className="hero__title">Covenant AI Consulting</h1>
              <div className="hero__welcome">
                <h2 className="hero__welcome--text">
                  Your business deserves to run smarter - not just harder.
                </h2>
              </div>
              <div className="hero__text">
                <p className="hero__desc">
                  Practical AI automation for small businesses that want to save
                  time, increase revenue, and finally stop doing everything
                  manually.
                </p>
                <p className="hero__desc">
                  Note: If you're hesitant about AI, I offer many services that
                  don't use it.
                </p>
                <p className="hero__promise">
                  Ancient promises, modern results.
                </p>
              </div>
            </div>
          </div>

          <div className="hero__img--wrapper">
            <img
              src={Photo}
              alt="Picture of Nathan, Founder of Covenant AI Consulting"
              className="hero__img"
            />
            <div className="img__text">Nathan Donaldson, Founder</div>
          </div>
        </div>

        <div className="hero__next">
          <Link to="#problemstrip__break" className="hero__next--text">
            See What's Possible
          </Link>
        </div>
      </section>

      <hr className="home__line--break" id="problemstrip__break" />

      <section id="problem-strip">
        <div className="problem__welcome">
          <h2 className="problem__title">The Problem</h2>
          <p className="problem__text--one">
            You're good at what you do, but between managing customers, chasing
            leads, sending follow-ups, and keeping up with marketing, there
            aren't enough hours in the day. Every hour you spend on tasks that a
            system could handle is an hour you're not growing your business.
          </p>
          <p className="problem__text--two">There's a better way.</p>
        </div>
      </section>

      <hr className="home__line--break" />

      <section id="what-we-do">
        <div className="do__welcome--wrapper">
          <h2 className="do__welcome--title">The Solution - What I Can Do</h2>
          <p className="do__promise">
            The tools are out there. I'll make them work for you.
          </p>
        </div>
        <div className="item__cards--wrapper">
          <div className="item__card">
            <h3 className="item__card--title">Marketing Automation</h3>
            <p className="item__desc">
              Build email lists, run promotions, and stay in front of your
              customers — automatically. No marketing team required.
            </p>
          </div>
          <div className="item__card">
            <h3 className="item__card--title">Zapier Workflow Automation</h3>
            <p className="item__desc">
              Connect the apps you already use and eliminate the manual work in
              between. If you're copying data, sending reminders, or updating
              spreadsheets by hand — that's time I can give back to you.
            </p>
          </div>
          <div className="item__card">
            <h3 className="item__card--title">Reporting & Dashboards</h3>
            <p className="item__desc">
              Stop guessing how your business is performing. Get clear, visual
              dashboards that turn your data into decisions.
            </p>
          </div>
          <div className="item__card">
            <h3 className="item__card--title">AI Chatbots & Lead Capture</h3>
            <p className="item__desc">
              Capture leads and answer customer questions around the clock —
              even when you're not available.
            </p>
          </div>
        </div>
        <div className="do__services--btn">
          <Link to="/services" className="services__link">
            View Full Services and Pricing
          </Link>
        </div>
      </section>

      <hr className="home__line--break" />

      <section id="how-it-works">
        <div className="works__welcome--wrapper">
          <h2 className="works__welcome--title">How It Works</h2>
          <p className="works__promise">
            The tools are out there. I'll make them work for you.
          </p>
        </div>
        <div className="works__item--list">
          <div className="works__item">
            <h3 className="works__item--title">
              1 — I Learn About Your Business
            </h3>
            <p className="works__item--desc">
              We'll start with a <span className="bold">free</span> discovery
              call. I listen to what's eating your time, where revenue is
              slipping, and what a better-running business looks like for you.
            </p>
          </div>
          <div className="works__item">
            <h3 className="works__item--title">2 — I Build Your System</h3>
            <p className="works__item--desc">
              I design and build the automations, workflows, and tools that{" "}
              <span className="bold">fit your business</span> — not a generic
              template. You don't need to understand the technology. That's my
              job.
            </p>
          </div>
          <div className="works__item">
            <h3 className="works__item--title">3 — You Get Your Time Back</h3>
            <p className="works__item--desc">
              Your systems run in the background while you focus on what you do
              best. Less manual work. More consistent revenue. More room to
              grow.
            </p>
          </div>
        </div>
        <div className="call__link--wrapper call__link--wrapper--home">
          <a
            href="https://calendly.com/nathan-covenantaico/covenant-ai-discovery-call"
            target="_blank"
            className="call__link call__link--home"
          >
            Book a Free Discovery Call
          </a>
        </div>
      </section>

      <hr className="home__line--break" />

      <section id="case-studies">
        <div className="studies__welcome--wrapper">
          <h2 className="studies__welcome--title">Case Studies</h2>
          <p className="studies__promise">Real systems. Real results.</p>
        </div>
        <div className="case__study--wrapper--home">
          <h2 className="case__study--title--home--one">
            Mama Lena's Kitchen — Local Restaurant 🍔
          </h2>
          <p className="case__study--desc--home">
            Maria had eleven years of loyal customers and no way to reach them.
            I built a marketing system that now fills her slow days
            automatically — saving her 3-4 hours a week and generating an
            estimated $600-$1,200 in additional monthly revenue.
          </p>
          <p className="case__study--quote--home">
            "I never thought I could have a marketing system like the big
            chains. Nathan set it all up in one week."
          </p>
        </div>
        <div className="case__study--wrapper--home">
          <h2 className="case__study--title--home--two">
            Luminara Newborn Photography 📸
          </h2>
          <p className="case__study--desc--home">
            Cami was watching photo gallery sales expire with no follow-up
            system in place. I built an automated sequence that recovers lost
            sales and generates new referrals — adding an estimated $500-$1,100
            in monthly revenue with zero extra effort on her part.
          </p>
          <p className="case__study--quote--home quote__two">
            "I was losing sales I didn't even know I was losing. The follow-up
            emails run on their own now."
          </p>
        </div>
        <div className="studies__btn">
          <Link to="/casestudies" className="services__link">
            See the Full Case Studies
          </Link>
        </div>
      </section>

      <hr className="home__line--break" />

      <section id="about">
        <h2 className="about__title--home">About Me</h2>
        <p className="about__desc--home">
          I'm a Credit Analyst with a background in commercial banking and a
          certified AI professional through Columbia Business School and the
          Corporate Finance Institute. I started Covenant AI because I saw what
          these tools could do — and I knew small business owners deserved
          access to them without needing a tech team to make it happen.
        </p>
        <p className="about__desc--home  about__home--desc--two">
          When you work with Covenant AI, you're not just buying a service.
          You're working with someone who's genuinely committed to making your
          business better.
        </p>
        <div className="about__btn">
          <Link to="/about" className="services__link">
            More About Covenant AI
          </Link>
        </div>
      </section>

      <hr className="home__line--break" />

      <section id="final-call-to-action">
        <h2 className="call__to--action">
          Ready to see what's possible for your business?
        </h2>
        <p className="CTA__promise">
          You don't need to have it all figured out. Just tell me what's not
          working and I'll take it from there.
        </p>
        <p className="CTA__text">
          Fill out the form below or book a call directly if you'd like to get
          something on the calendar right away.
        </p>
        <div className="call__link--wrapper call__link--wrapper--home">
          <a
            href="https://calendly.com/nathan-covenantaico/covenant-ai-discovery-call"
            target="_blank"
            className="call__link call__link--home"
          >
            Book a Free Discovery Call
          </a>
        </div>
      </section>

      <hr className="home__line--break" />

      <section id="form">
        <form id="contact__form" ref={formRef} onSubmit={sendEmail}>
          <div className="form__item">
            <label className="form__item--label">Name</label>
            <input type="text" name="name" className="input" required></input>
          </div>
          <div className="form__item">
            <label className="form__item--label">E-mail</label>
            <input type="email" name="email" className="input" required></input>
          </div>
          <div className="form__item">
            <label className="form__item--label">Business Name</label>
            <input
              type="text"
              name="business_name"
              className="input"
              required
            ></input>
          </div>
          <div className="form__item">
            <label className="form__item--label">Message</label>
            <textarea
              type="text"
              name="message"
              className="input"
              required
            ></textarea>
          </div>
          <button id="contact__submit" className="form__submit">
            Send it my way
          </button>
        </form>
      </section>

      <FooterBanner />
    </>
  );
}

export default App;
