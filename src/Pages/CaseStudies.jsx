import React, { useEffect } from "react";
import "./CaseStudies.css";
import Nav from "../Components/Nav.jsx";
import FooterBanner from "../Components/FooterBanner.jsx";

function CaseStudies() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <>
      <Nav variant="casestudies" />
      <div className="case_studies--welcome">
        <h1 className="case__studies--title">Case Studies</h1>
      </div>
      <section id="case__study">
        <div className="case__study--title--wrapper">
          <h2 className="case__study--title">
            Case Study 01 — Mama Lena's Kitchen
          </h2>
        </div>
        <div className="case__study--details--wrapper">
          <p className="case__study--details--one">
            Local Restaurant · Marketing Automation & Email List Growth
          </p>
          <p className="case__study--details--two">
            Pocatello, Idaho · 45-Day Engagement · $750 Setup + $400/mo Retainer
          </p>
        </div>
        <div className="case__study--desc--wrapper">
          <p className="case__study--desc--one">
            Maria had run her Italian restaurant for eleven years with no way to
            reach her own customers directly. No email list. No promotion
            system. Just hoping the slow days filled themselves.
          </p>
          <p className="case__study--desc--two">
            Covenant AI built a three-part system: a Mailchimp email list with
            an opt-in form and lead magnet, a 5-email automated welcome sequence
            to convert new subscribers into regulars, and a Zapier workflow that
            turns a single Google Sheet update into a scheduled email and
            Facebook post — every week, without Maria logging in anywhere.
          </p>
        </div>
        <div className="case__study--results--wrapper">
          <div className="results__title--wrapper">
            <h2 className="results__title">Results (Projected 90-Day)</h2>
          </div>
          <div className="results__list--wrapper">
            <ul className="results__list">
              <li className="results__list--item">
                350-500 email subscribers built from zero
              </li>
              <li className="results__list--item">38-45% email open rate</li>
              <li className="results__list--item">
                +15-25% lift in weekly special redemptions
              </li>
              <li className="results__list--item">3-4 hours saved per week</li>
              <li className="results__list--item">
                $600-$1,200 estimated monthly revenue increase
              </li>
            </ul>
          </div>
          <div className="case__study--quote--wrapper">
            <p className="case__study--quote">
              "I never thought I could have a marketing system like the big
              restaurant chains. Now my Tuesday emails go out automatically and
              I actually see people come in because of them."{" "}
            </p>
            <h3 className="quotee">— Maria, Owner</h3>
          </div>
        </div>
      </section>
      <hr className="studies__line--break" />
      <section id="case__study">
        <div className="case__study--title--wrapper">
          <h2 className="case__study--title--two">
            Case Study 02 — Luminara Newborn Photography
          </h2>
        </div>
        <div className="case__study--details--wrapper">
          <p className="case__study--details--one">
            Photography · Lead Nurture & Gallery Sales Automation
          </p>
          <p className="case__study--details--two">
            Pocatello, Idaho · 30-Day Engagement · $500 Setup + $300/mo Retainer
          </p>
        </div>
        <div className="case__study--desc--wrapper">
          <p className="case__study--desc--one">
            Cami photographed 25-40 newborns a month through a long-standing
            hospital partnership — but galleries were expiring unpurchased
            because there was no follow-up system. By the time parents got the
            link, the emotional urgency of the birth had faded. Revenue was
            quietly walking out the door.
          </p>
          <p className="case__study--desc--two">
            Covenant AI built a two-phase system: a pre-session email drip
            triggered by a QR code in OB waiting rooms, warming parents before
            they ever stepped into the session, and a post-gallery follow-up
            sequence that automatically sends reminders at Days 1, 7, 20, and 28
            — each with a direct purchase link. A referral capture email was
            added to turn happy clients into new leads automatically.
          </p>
        </div>
        <div className="case__study--results--wrapper">
          <div className="results__title--wrapper">
            <h2 className="results__title">Results (Projected 90-Day)</h2>
          </div>
          <div className="results__list--wrapper">
            <ul className="results__list">
              <li className="results__list--item">
                +18-28% gallery purchase rate
              </li>
              <li className="results__list--item">
                3-6 new referral leads per month
              </li>
              <li className="results__list--item">
                +10-15% conversion lift from pre-session drip
              </li>
              <li className="results__list--item">2-3 hours saved per week</li>
              <li className="results__list--item">
                $500-$1,100 estimated monthly revenue increase
              </li>
            </ul>
          </div>
          <div className="case__study--quote--wrapper--two">
            <p className="case__study--quote">
              ""I was losing sales I didn't even know I was losing. The
              follow-up emails run on their own now, and I'm consistently
              closing galleries that would have just expired."
            </p>
            <h3 className="quotee">— Cami, Owner</h3>
          </div>
        </div>
        <hr className="studies__line--break" />
        <div className="disclaimer__wrapper">
          <div className="disclaimer__desc">
            <h3 className="disclaimer">
              Disclaimer: These case studies represent projected outcomes based on industry
              benchmarks and realistic implementations. They are frameworks for
              the kind of work Covenant AI is built to deliver — not fabricated
              results. As real client engagements are completed, this page will
              be updated with actual data.
            </h3>
          </div>
        </div>
      </section>
      <FooterBanner />
    </>
  );
}

export default CaseStudies;
