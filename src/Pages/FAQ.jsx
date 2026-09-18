import { useState } from "react";
import Nav from "../Components/Nav.jsx";
import FooterBanner from "../Components/FooterBanner.jsx";
import "./FAQ.css";

const faqSections = [
  {
    title: "About Covenant AI Consulting",
    items: [
      {
        question: "What is Covenant AI Consulting?",
        answer:
          "Covenant AI Consulting helps small businesses put AI and automation to work without the tech headache. I handle the setup, the tools, and the strategy so you get the benefits of AI in your marketing, sales, customer service, and operations, without having to become an expert yourself. Based in Pocatello, Idaho, and built specifically for small businesses that want simple, high-ROI solutions.",
      },
      {
        question: "Who is this for?",
        answer:
          "Small business owners who know they should be 'using AI' but don't have the time, technical background, or bandwidth to figure out where to start. If your biggest challenges sound like inconsistent marketing, leads that slip through the cracks, repetitive customer questions eating your day, manual busywork, or just not knowing how your business is actually performing, there's a service area built for that.",
      },
      {
        question:
          "Do I need to already understand AI or automation tools to work with you?",
        answer:
          "No. That's the whole point. I do the technical setup and hand you something that just works. If you'd rather learn the tools yourself instead of having someone else run them, that's an option too. See the AI Training & Education section below.",
      },
      {
        question: "Is my business too small for this?",
        answer:
          "Most of what I build is specifically designed for small, local businesses; not enterprise clients. If you have customers, leads, or repetitive tasks, there's almost always a fast, affordable starting point.",
      },
    ],
  },
  {
    title: "How It Works",
    items: [
      {
        question: "What does getting started look like?",
        answer:
          "It starts with a conversation. We talk through what's actually eating your time or holding your business back, and figure out which service area (or combination) makes the most sense. From there you get a clear, scoped proposal before any work begins, so you always know what you're getting and what it costs.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Most standalone projects are built and running within 2 to 3 weeks. Some focused quick-win engagements can be live in as little as 10 business days. Larger, multi-area builds take longer and are scoped up front so there are no surprises.",
      },
      {
        question: "Do I have to commit to an ongoing contract?",
        answer:
          "No. Many engagements are one-time projects with a defined start and end date. If you want ongoing management, optimization, or support after the initial build, monthly retainer options are available, but they're never required.",
      },
      {
        question: "What if I'm not sure which service I need?",
        answer:
          "That's normal, and it's exactly what the initial conversation is for. Most owners come in knowing they're 'behind' on something, not exactly which tool or system will fix it. I'll help you figure that out.",
      },
    ],
  },
  {
    title: "My Service Areas",
    items: [
      {
        question: "AI-Powered Marketing",
        answer:
          "You know you should be posting, emailing, and staying in front of customers consistently, but it never seems to happen. I build your marketing system once so it keeps running without you. That starts with capturing your brand voice so everything sounds like you, then setting up a content calendar and an automated email welcome sequence so new subscribers hear from you the moment they sign up. <span class='faq__answer--emphasis'>Where this helps:</span> A restaurant that wants consistent social posts without hiring a marketer. A retailer whose email list has never gotten a single automated message. Any business whose marketing happens in bursts, then goes quiet for months. <strong>Starting at:</strong> $1,200–$1,500 for a standalone quick-win build, or included in ongoing package pricing.",
      },
      {
        question: "Sales Automation & Lead Generation",
        answer:
          "Most businesses lose more sales to slow follow-up than to price or competition. I build a system that never drops the ball: a chatbot that captures leads on your website 24/7, and an organized pipeline so you always know exactly who to follow up with next. <span class='faq__answer--emphasis'>Where this helps:</span> A service business that gets inquiries after hours and loses them because nobody responds until the next day. Any owner who's ever said 'I meant to follow up with that lead and forgot.' <strong>Starting at:</strong> $500–$1,500 depending on scope, or included in Growth and Partner packages.",
      },
      {
        question: "Customer Service Automation",
        answer:
          "Every day, small business owners answer the same handful of questions over and over: hours, pricing, how to book, what to expect. I build a system that handles the routine automatically, so you only get pulled in for what actually needs you. <span class='faq__answer--emphasis'>Where this helps:</span> A clinic or med spa fielding the same booking questions all day. Any business where inquiries pile up after hours and reviews go unanswered for weeks. <strong>Starting at:</strong> $1,000–$1,500 for a standalone build, or included in larger packages.",
      },
      {
        question: "Operations & Workflow Automation",
        answer:
          "How many hours a week do you spend doing something a computer could handle? Sending the same confirmation email, manually entering leads, chasing unpaid invoices. I map out how your business actually runs, then build automations that quietly take those tasks off your plate. <span class='faq__answer--emphasis'>Where this helps:</span> A contractor manually confirming every appointment. A shop owner re-entering the same customer info into three different tools. <strong>Starting at:</strong> $1,500–$1,800 for a starter build, or individual automations priced by complexity.",
      },
      {
        question: "Data & Insights",
        answer:
          "Your business generates information every day: sales, website visits, bookings, email opens. Most owners never see it turned into something they can act on. I connect the tools you already use into one simple dashboard, and deliver a plain-English report each month telling you what's actually happening and what to pay attention to. <span class='faq__answer--emphasis'>Where this helps:</span> An owner who's never had a clear answer to 'how are we actually doing this month?' beyond checking the bank balance. <strong>Starting at:</strong> $1,000–$2,500 for a standalone build, or $300–$500/month as an add-on report.",
      },
      {
        question: "AI Training & Education",
        answer:
          "Some owners don't want it handed off; they want to learn to use the tools themselves. I teach you (and your team, if you have one) how to actually apply AI to the work you do every day, hands-on, not theoretical. <span class='faq__answer--emphasis'>Where this helps:</span> An owner who wants to stay in control of their own marketing or systems. A team that wants a shared skill set instead of relying on one person. <strong>Starting at:</strong> $97 per person for a workshop up to custom corporate training pricing, depending on format.",
      },
    ],
  },
  {
    title: "Pricing & Engagement",
    items: [
      {
        question: "How is pricing determined?",
        answer:
          "Every engagement is scoped to your specific business and needs, so final pricing depends on what's actually included. The ranges above reflect what most clients typically pay for that service area.",
      },
      {
        question: "Do you offer packages that combine multiple services?",
        answer:
          "Yes. Many clients start with one focused area and expand into a broader package once they see results. I'll always recommend the smallest engagement that solves your actual problem first.",
      },
      {
        question: "What's not included in standard pricing?",
        answer:
          "Highly specialized or client-specific work (custom integrations, advanced financial forecasting, paid ad management, etc.) is scoped and quoted separately once we understand exactly what you need.",
      },
    ],
  },
  {
    title: "Tools & Technical",
    items: [
      {
        question: "What tools do you use?",
        answer:
          "I work with a proven, small-business-friendly stack including Zapier, Mailchimp, Tidio, Looker Studio, and Notion, among others, chosen based on what fits your business and budget best.",
      },
      {
        question: "Who owns the tools and accounts once the work is done?",
        answer:
          "You do. Everything I build lives in your own accounts, so you're never locked into needing us to keep things running.",
      },
      {
        question: "Do I need to buy anything before we start?",
        answer:
          "Not usually. I'll tell you upfront if a project requires a paid tool subscription, and it's always your call whether to move forward.",
      },
    ],
  },
];

function FAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (sectionIndex, itemIndex) => {
    const key = `${sectionIndex}-${itemIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <Nav variant="FAQ" />
      <main className="faq__page">
        <header className="faq__header">
          <h1 className="faq__title">Frequently Asked Questions</h1>
          <p className="faq__subtitle">About Covenant AI Consulting</p>
        </header>

        {faqSections.map((section, sectionIndex) => (
          <section
            className="faq__section"
            id={
              section.title === "My Service Areas" ? "service-areas" : undefined
            }
            key={section.title}
          >
            <h2 className="faq__section--title">{section.title}</h2>
            <div className="faq__items">
              {section.items.map((item, itemIndex) => {
                const key = `${sectionIndex}-${itemIndex}`;
                const isOpen = Boolean(openItems[key]);

                return (
                  <div className="faq__item" key={item.question}>
                    <button
                      className="faq__question"
                      onClick={() => toggleItem(sectionIndex, itemIndex)}
                      type="button"
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <span className="faq__icon">{isOpen ? "-" : "+"}</span>
                    </button>
                    <div
                      className={`faq__answer ${isOpen ? "open" : ""}`}
                      dangerouslySetInnerHTML={{
                        __html: isOpen ? item.answer : "",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>
      <FooterBanner />
    </>
  );
}

export default FAQ;
