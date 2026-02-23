const services = [
  {
    title: "Microsoft Dynamics Business Central",
    badge: "BC",
    description: "End-to-end implementation, customization, and optimization for growing enterprises.",
    benefits: [
      "Accelerated month-end close and reporting",
      "Seamless data migration with minimal downtime",
      "Custom workflows and integrations",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        {/* Microsoft logo */}
        <rect x="2" y="2" width="11" height="11" fill="#F25022"/>
        <rect x="15" y="2" width="11" height="11" fill="#7FBA00"/>
        <rect x="2" y="15" width="11" height="11" fill="#00A4EF"/>
        <rect x="15" y="15" width="11" height="11" fill="#FFB900"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #0078D4 0%, #00A4EF 100%)",
  },
  {
    title: "AI & Machine Learning Automation",
    badge: "AI",
    description: "Intelligent automation that transforms manual processes into smart workflows.",
    benefits: [
      "Automated approvals and exception routing",
      "Predictive demand and cashflow modeling",
      "AI copilots for ERP users",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="1.5">
        {/* Brain/AI icon */}
        <circle cx="14" cy="14" r="10" fill="rgba(255,255,255,0.2)"/>
        <path d="M14 4v4M14 20v4M4 14h4M20 14h4" strokeLinecap="round"/>
        <path d="M7.5 7.5l2.8 2.8M17.7 17.7l2.8 2.8M7.5 20.5l2.8-2.8M17.7 10.3l2.8-2.8" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="4" fill="white"/>
        <circle cx="14" cy="14" r="2" fill="#5C2D91"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #5C2D91 0%, #B4009E 100%)",
  },
  {
    title: "Digital Signature Integration",
    badge: "DS",
    description: "Legally compliant e-signature solutions including USB tokens and Aadhaar eSign.",
    benefits: [
      "Compliance-first signing workflows",
      "Faster contract and vendor onboarding",
      "Seamless ERP document automation",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="1.5">
        {/* Document with signature */}
        <rect x="5" y="3" width="18" height="22" rx="2" fill="rgba(255,255,255,0.2)"/>
        <path d="M9 9h10M9 13h6" strokeLinecap="round"/>
        <path d="M8 20c2-3 4 1 6-2s3 2 6 0" strokeLinecap="round" fill="none"/>
        <circle cx="20" cy="8" r="4" fill="#22C55E" stroke="none"/>
        <path d="M18 8l1.5 1.5L22 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #008575 0%, #00CC6A 100%)",
  },
  {
    title: "LS Central Retail Solutions",
    badge: "LS",
    description: "Unified retail management from POS to back-office operations.",
    benefits: [
      "Real-time inventory visibility across stores",
      "Automated promotions and loyalty programs",
      "Comprehensive store analytics",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="1.5">
        {/* Retail/Store icon */}
        <rect x="4" y="10" width="20" height="14" rx="2" fill="rgba(255,255,255,0.2)"/>
        <path d="M4 10l3-6h14l3 6" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="10" y="16" width="8" height="8" rx="1" fill="rgba(255,255,255,0.3)"/>
        <path d="M14 4v2" strokeLinecap="round"/>
        <circle cx="8" cy="10" r="2" fill="white"/>
        <circle cx="14" cy="10" r="2" fill="white"/>
        <circle cx="20" cy="10" r="2" fill="white"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #E74C3C 0%, #FF6B6B 100%)",
  },
  {
    title: "Oracle Fusion + OIC Integration",
    badge: "OF",
    description: "Enterprise-grade integration between Oracle Cloud and your ERP ecosystem.",
    benefits: [
      "Bi-directional data orchestration",
      "Secure API and middleware design",
      "Reduced reconciliation cycles",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        {/* Oracle-style integration icon */}
        <circle cx="14" cy="14" r="11" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="1.5"/>
        <circle cx="8" cy="14" r="3" fill="white"/>
        <circle cx="20" cy="14" r="3" fill="white"/>
        <path d="M11 14h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="8" r="2" fill="rgba(255,255,255,0.6)"/>
        <circle cx="14" cy="20" r="2" fill="rgba(255,255,255,0.6)"/>
        <path d="M14 10v2M14 16v2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #C74634 0%, #F80000 100%)",
  },
  {
    title: "Dynamics 365 Finance & Operations",
    badge: "F&O",
    description: "GST compliance, tax configuration, and localization for Indian enterprises.",
    benefits: [
      "Automated GST reporting and filing",
      "Tax configuration and compliance review",
      "India localization best practices",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="1.5">
        {/* Finance/Chart icon */}
        <rect x="3" y="5" width="22" height="18" rx="2" fill="rgba(255,255,255,0.2)"/>
        <path d="M7 17l4-4 3 2 7-6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="21" cy="9" r="2" fill="#22C55E" stroke="none"/>
        <path d="M7 9h4M7 12h3" strokeLinecap="round" opacity="0.6"/>
        <rect x="17" y="15" width="4" height="4" rx="1" fill="rgba(255,255,255,0.4)"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #0078D4 0%, #00BCF2 100%)",
  },
  {
    title: "SAP ERP Consulting",
    badge: "SAP",
    description: "End-to-end SAP implementation, migration, and support for large-scale enterprises.",
    benefits: [
      "SAP S/4HANA migration and deployment",
      "Business process re-engineering",
      "Custom ABAP development and integration",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="6" width="24" height="16" rx="3" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="1.5"/>
        <text x="14" y="18" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial">SAP</text>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #0FAAFF 0%, #006BD6 100%)",
  },
  {
    title: "Power BI Analytics & Dashboards",
    badge: "PBI",
    description: "Transform raw data into actionable insights with interactive dashboards and real-time reporting.",
    benefits: [
      "Custom KPI dashboards for leadership",
      "Real-time data visualization and drill-downs",
      "Seamless integration with ERP and CRM data",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="6" y="16" width="4" height="8" rx="1" fill="white" opacity="0.6"/>
        <rect x="12" y="10" width="4" height="14" rx="1" fill="white" opacity="0.8"/>
        <rect x="18" y="4" width="4" height="20" rx="1" fill="white"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #F2C811 0%, #E8A000 100%)",
  },
  {
    title: "Odoo ERP Solutions",
    badge: "ODO",
    description: "Flexible, modular ERP for SMEs covering sales, inventory, accounting, and HR.",
    benefits: [
      "Rapid deployment with modular approach",
      "Customizable workflows for any industry",
      "Cost-effective alternative for growing businesses",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="6" fill="white"/>
        <circle cx="14" cy="14" r="3" fill="#714B67"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #714B67 0%, #9B6B8E 100%)",
  },
  {
    title: "Agentic AI Solutions",
    badge: "AGI",
    description: "Autonomous AI agents that reason, plan, and execute complex business tasks end-to-end.",
    benefits: [
      "Self-operating agents for procurement and finance",
      "Multi-step workflow automation with decision-making",
      "Human-in-the-loop oversight with AI-driven execution",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="1.5">
        <circle cx="14" cy="10" r="5" fill="rgba(255,255,255,0.3)"/>
        <path d="M7 24c0-3.9 3.1-7 7-7s7 3.1 7 7" strokeLinecap="round" fill="none"/>
        <circle cx="22" cy="8" r="3" fill="rgba(255,255,255,0.4)" stroke="white"/>
        <path d="M22 8l-4 3" strokeLinecap="round"/>
        <circle cx="6" cy="8" r="3" fill="rgba(255,255,255,0.4)" stroke="white"/>
        <path d="M6 8l4 3" strokeLinecap="round"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #6D28D9 0%, #A78BFA 100%)",
  },
];

export default function ServicesGrid() {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div className="section-header centered">
          <p className="eyebrow">What We Do</p>
          <h2>Enterprise ERP Solutions</h2>
          <p>
            Strategic consulting, implementation, and automation services designed
            to modernize Microsoft Dynamics environments and connected systems.
          </p>
        </div>
        
        {/* Services Stats Bar */}
        <div className="services-stats-bar">
          <div className="services-stat">
            <div className="services-stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="services-stat-content">
              <strong>500+</strong>
              <span>Projects Delivered</span>
            </div>
          </div>
          <div className="services-stat">
            <div className="services-stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
              </svg>
            </div>
            <div className="services-stat-content">
              <strong>50+</strong>
              <span>Expert Consultants</span>
            </div>
          </div>
          <div className="services-stat">
            <div className="services-stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <div className="services-stat-content">
              <strong>24/7</strong>
              <span>Support Available</span>
            </div>
          </div>
          <div className="services-stat">
            <div className="services-stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <div className="services-stat-content">
              <strong>98%</strong>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-3">
          {services.map((service) => (
            <article className="card service-card" key={service.title}>
              <div className="service-card-icon" style={{ background: service.gradient }}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
              <a className="card-link" href="#contact">
                Learn More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
