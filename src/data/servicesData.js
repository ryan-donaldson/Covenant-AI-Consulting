const servicesData = {
  quickWins: [
    {
      id: 1,
      title: "The AI Marketing Jumpstart 🚀",
      shortDesc: "Brand voice + 30 days content + email sequence",
      description:
        "Your brand voice, your content, your welcome sequence — Built and running in two weeks",
      intendedFor:
        "Small businesses that want their marketing working — content posted, emails going out — without spending months getting there. Best for service businesses, local retailers, and any client whose biggest pain point is inconsistent or nonexistent marketing.",
      included: [
        "Brand voice document capturing your tone, audience, and messaging guidelines",
        "30 days of social media content written and loaded into a scheduler",
        "3-email welcome sequence built and live in their email platform",
        "30-minute handoff call and simple SOP so they can manage it going forward",
      ],
      price: "$1,200 — $1,500",
      priceFrequency: "One-time",
      delivery: "10 business days",
    },
    {
      id: 2,
      title: "The AI Automation Starter 🦾",
      shortDesc: "Process audit + 3 Zapier automations + chatbot",
      description:
        "Stop doing manually what a machine can do automatically — Built and running in two weeks",
      intendedFor:
        "Business owners spending hours each week on tasks that should run automatically — follow-ups that never get sent, leads that slip through the cracks, manual work that repeats every single day. If the first thing they say is 'I feel like I'm always behind,' this is their offer.",
      included: [
        "45-minute processing audit to identify the highest-impact automation opportunities",
        "3 Zapier automations built, tested, and live (e.g., lead form → CRM → email follow-up)",
        "AI-powered chatbot installed and configured on your website for lead capture and FAQs",
        "30-minute walkthrough so you understand what runs automatically and what to watch for",
      ],
      price: "$1,500 — $1,800",
      priceFrequency: "One-time",
      delivery: "10 business days",
    },
    {
      id: 3,
      title: "Bonus Offer: The Reactivation Campaign 📮",
      shortDesc: "3-email sequence to dormant contacts",
      description:
        "A targeted 3-email sequence sent to a dormant contact list to recover lost revenue fast — Built and sent within one week",
      price: "$800 — $1,200",
      intendedFor:
        "Best used as a standalone entry point for price-sensitive prospects or as an upsell to any existing engagement.",
      delivery: "1 week",
    },
  ],

  tiered: [
    {
      id: 1,
      title: "Tier 1 — Starter Package 🌱",
      shortDesc: "1 service area + 2-3 weeks + no retainer",
      description: "One focused area. Fast results. Low risk.",
      intendedFor:
        "Small businesses brand new to AI with a limited budget who want a low-risk, defined first engagement. They are not ready to commit to a retainer but want to see what you can do.",
      included: [
        "One focused service area — marketing, automation, or customer service (client's choice)",
        "Clear deliverables agreed upon before work begins",
        "Delivered in 2—3 weeks with a defined end date",
        "One-time engagement — no ongoing commitment required",
      ],
      price: "$1,000 — $1,500 one-time",
      delivery: "2-3 weeks w/ set end date",
    },
    {
      id: 2,
      title: "Tier 2 — Growth Package 🪴",
      shortDesc: "2-3 areas + 4-6 weeks + monthly retainer",
      description:
        "Multiple service areas. Ongoing optimization. Recurring revenue.",
      intendedFor:
        "Business owners ready to invest seriously who want AI working across multiple areas of their business, not just one. They understand the value and want a real ongoing partnership.",
      included: [
        "Business assessment across all six service areas to identify highest-impact opportunities",
        "Full implementation across 2—3 service areas — typically Marketing plus Sales or Operations",
        "Delivered over 4—6 weeks with regular check-ins and client reviews",
        "Monthly retainer to manage, monitor, and optimize everything on an ongoing basis",
        "Monthly performance report summarizing results and next priorities",
      ],
      price: "$2,500 — $5,000 setup fee + $500 — $1,500/month retainer",
      delivery: "4-6 weeks w/ regular check ins and client reviews",
    },
    {
      id: 3,
      title: "Tier 3 — Partner Package 🌻",
      shortDesc: "All 6 areas + fully embedded + ongoing",
      description: "Fully embedded. Fully managed. Strategic and ongoing.",
      intendedFor:
        "Business owners who want you fully embedded — essentially a fractional AI director managing everything and providing ongoing strategic guidance across the entire business",
      included: [
        "Full audit and prioritization across all six service areas",
        "Complete implementation across marketing, sales, customer service, operations, and data.",
        "Full automation stack: 8—12+ Zapier workflows including conditional logic and AI-powered automations",
        "Dedicated Slack or Notion workspace for ongoing communication and project tracking",
        "Monthly AI-generated insights reports with strategic recommendations",
        "Ongoing optimization of all systems as tools and AI capabilities evolve",
        "Direct access for questions, strategy, and new initiatives",
        "Quarterly business review sessions to assess progress and plan ahead",
      ],
      price: "$5,000 — $10,000 setup fee + $2,000 — $4,000/month retainer",
      delivery: "6-8 weeks or more",
    },
  ],

  standalone: [
    {
      id: 1,
      automationType: "Simple 2-step Zap (e.g., Form → Email)",
      buildFee: "$150 — $250",
      maintenance: "$50/mo (optional)",
    },
    {
      id: 2,
      automationType: "Multi-step workflow (3-5 steps)",
      buildFee: "$250 — $400",
      maintenance: "$75/mo (optional)",
    },
    {
      id: 3,
      automationType: "AI-powered automation (e.g., Form → AI → Email)",
      buildFee: "$400 — $600",
      maintenance: "$100/mo (optional)",
    },
    {
      id: 4,
      automationType: "Complex workflow (conditional logic, webhooks)",
      buildFee: "$500 — $800",
      maintenance: "$100 — $150/mo (optional)",
    },
  ],

  addOn: [
    {
      id: 1,
      title: "AI Chatbot Build",
      investment: "$500 — $1,500",
      included: [
        "Full chatbot setup trained on their business",
        "FAQ workflows",
        "Lead capture",
        "Booking integration",
      ],
    },
    {
      id: 2,
      title: "Lead Nurture Sequence",
      investment: "$600 — $1,000",
      included: [
        "6—8 email nurture sequence for leads who don't convert immediately",
        "Lead scoring setup",
      ],
    },
    {
      id: 3,
      title: "CRM Setup & Pipeline Build",
      investment: "$500 — $1,200",
      included: [
        "HubSpot or Pipedrive CRM configured with a visual sales pipeline",
        "Lead stages",
        "Basic Automation",
      ],
    },
    {
      id: 4,
      title: "Monthly Insights Report",
      investment: "$300 — $500/mo",
      included: [
        "AI-generated business performance report delivered monthly with plain—English recommendations",
      ],
    },
    {
      id: 5,
      title: "Competitive Intelligence Setup",
      investment: "$400 — $800",
      included: [
        "Automated monitoring of key competitors — reviews, social, pricing, website changes — with weekly digest",
      ],
    },
    {
      id: 6,
      title: "Staff AI Training Workshop",
      investment: "$1,500 — $3,000",
      included: [
        "Live 2—3 hour workshop teaching their team to use AI tools effectively in their specific roles",
      ],
    },
    {
      id: 7,
      title: "Custom Prompt Library",
      investment: "$200 — $500",
      included: [
        "50—100 custom-built prompts for their most common business tasks, organized and documented",
      ],
    },
    {
      id: 8,
      title: "Quarterly Strategy Session",
      investment: "$500 — $1,000/qtr",
      included: [
        "90-minute deep dive reviewing results, identifying new opportunities, and adjusting strategy",
      ],
    },
    {
      id: 9,
      title: "Additional Zapier Automations",
      investment: "See automation pricing below",
      included: [
        "Additional workflows added to any existing engagement at standalone pricing",
      ],
    },
  ],
};

export default servicesData;
