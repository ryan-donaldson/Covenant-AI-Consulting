import React, { useEffect } from "react";
import Nav from "../Components/Nav";
import "./About.css";
import Grad from "../assets/grad.JPEG";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav variant="about" />
      <section id="about__page">
        <div className="about__wrapper">
          <h2 className="about__title">About Covenant AI Consulting</h2>
          <p className="about__intro">
            I'm Nathan, a Credit Analyst with a background in commercial banking
            and a certified AI professional through Columbia Business School,
            Wall Street Prep, and the Corporate Finance Institute. My career has
            been built around analyzing complex problems and finding the most
            efficient path forward, and that same instinct is what eventually
            led me here.
          </p>
          <p className="about__credentials">
            <a
              href="https://certificates.columbia.wallstreetprep.com/5aff85db-5e91-41e2-91c2-1fa1be4ff680#acc.35Fiq7af"
              className="about__credentials--link"
              target="_blank"
            >
              View credentials: Columbia Business School & Wall Street Prep — AI
              for Business & Finance
            </a>
          </p>
          <p className="about__credentials--two">
            <a
              href="https://credentials.corporatefinanceinstitute.com/e695584d-4875-467a-98fb-a4e2fa24caae#acc.ghQnX9o1"
              className="about__credentials--link"
              target="_blank"
            >
              View credentials: CFI — Commercial Banking & Credit Analyst
            </a>
          </p>
          <p className="about__desc--one">
            As AI tools began maturing into something genuinely powerful, I
            started seeing opportunity everywhere. Not for large corporations
            with dedicated tech teams, but for small business owners, the ones
            without all the time or money, doing manually what a well-built
            system could handle in seconds. I knew I could bridge that gap and I
            knew I really wanted to.
          </p>
          <p className="about__desc--two">
            Covenant AI Consulting exists to bring that bridge to you.
          </p>
          <p className="about__desc--three">
            The name "Covenant" isn't accidental. A covenant is a promise, a
            serious one. It's the word I chose because I wanted this business to
            stand for something beyond a transaction. When you work with
            Covenant AI, you're not just purchasing a service but also entering
            a commitment with someone who genuinely cares whether your business
            improves. I'm not here to hand you something and disappear. I'm here
            to deliver real, lasting results, and to make sure you feel that
            difference.
          </p>
          <p className="about__desc--four">
            Whether you're looking to automate time-consuming tasks, get clearer
            insight into your business data, or build systems that finally let
            you focus on what you do best, this is what I built Covenant AI
            Consulting to do.
          </p>
          <h2 className="about__closer">
            Let's build something that works for you.
          </h2>
        </div>
        <div className="about__img--wrapper">
          <img src={Grad} alt="Nathan Grad Photo" className="about__img" />
          <p className="about__img--desc">I majored in Finance and graduated with a Bachelor's of Business Administration.</p>
        </div>
      </section>
    </>
  );
}

export default About;
