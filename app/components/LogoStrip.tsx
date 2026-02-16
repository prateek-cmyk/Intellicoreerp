const technologies = [
  {
    name: "Microsoft Dynamics 365",
    color: "#0078D4",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="22" height="22" fill="#F25022"/>
        <rect x="26" width="22" height="22" fill="#7FBA00"/>
        <rect y="26" width="22" height="22" fill="#00A4EF"/>
        <rect x="26" y="26" width="22" height="22" fill="#FFB900"/>
      </svg>
    ),
  },
  {
    name: "Azure Cloud",
    color: "#0089D6",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M26.1 8.48L13.12 36.1a1 1 0 00.92 1.4h21.62a1 1 0 00.88-.52l7.82-14.62a1 1 0 00-.04-1.04L27.08 8.48a1 1 0 00-.98 0z" fill="#0089D6"/>
        <path d="M17.16 33.66L4.44 16.04a1 1 0 01.78-1.54h11.34a1 1 0 01.84.46l9.56 14.7H17.16z" fill="#0089D6" opacity="0.7"/>
      </svg>
    ),
  },
  {
    name: "Power Platform",
    color: "#742774",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="4" width="18" height="18" rx="4" fill="#742774"/>
        <rect x="26" y="4" width="18" height="18" rx="4" fill="#ED7D31"/>
        <rect x="4" y="26" width="18" height="18" rx="4" fill="#00B0F0"/>
        <rect x="26" y="26" width="18" height="18" rx="4" fill="#00A651"/>
      </svg>
    ),
  },
  {
    name: "Business Central",
    color: "#0078D4",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="6" fill="#0078D4"/>
        <path d="M14 16h20M14 24h20M14 32h12" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "LS Central",
    color: "#E74C3C",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" fill="#E74C3C"/>
        <path d="M16 16v16h4v-12h8v12h4V16H16z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Oracle Fusion",
    color: "#F80000",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="12" width="40" height="24" rx="12" fill="#F80000"/>
        <circle cx="24" cy="24" r="6" fill="none" stroke="white" strokeWidth="3"/>
      </svg>
    ),
  },
  {
    name: "NetSuite",
    color: "#125C8D",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="6" fill="#125C8D"/>
        <path d="M14 34V14l20 20V14" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Salesforce",
    color: "#00A1E0",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M20 13a9 9 0 0116.48 5A8 8 0 0136 34H14a10 10 0 01-1-19.94A9 9 0 0120 13z" fill="#00A1E0"/>
      </svg>
    ),
  },
  {
    name: "Odoo",
    color: "#714B67",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" fill="#714B67"/>
        <circle cx="24" cy="24" r="10" fill="white"/>
        <circle cx="24" cy="24" r="5" fill="#714B67"/>
      </svg>
    ),
  },
  {
    name: "Power BI",
    color: "#F2C811",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="10" y="24" width="6" height="16" rx="2" fill="#F2C811"/>
        <rect x="21" y="16" width="6" height="24" rx="2" fill="#F2C811"/>
        <rect x="32" y="8" width="6" height="32" rx="2" fill="#F2C811"/>
      </svg>
    ),
  },
  {
    name: "SAP",
    color: "#0FAAFF",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="10" width="40" height="28" rx="4" fill="#0FAAFF"/>
        <text x="24" y="29" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial">SAP</text>
      </svg>
    ),
  },
  {
    name: "Power Automate",
    color: "#0066FF",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="8" fill="#0066FF"/>
        <path d="M16 14l16 10-16 10V14z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Agentic AI",
    color: "#6D28D9",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" fill="#6D28D9"/>
        <circle cx="24" cy="18" r="6" fill="white" opacity="0.9"/>
        <path d="M14 36c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <circle cx="36" cy="14" r="4" fill="#A78BFA"/>
        <path d="M36 14l-6 4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function LogoStrip() {
  const items = [...technologies, ...technologies];

  return (
    <section className="logo-strip" aria-label="Technology partners">
      <div className="container">
        <p className="logo-strip-title">Trusted Technologies & Partnerships</p>
      </div>
      <div className="logo-marquee-wrapper">
        <div className="logo-marquee">
          {items.map((tech, index) => (
            <div className="logo-item" key={`${tech.name}-${index}`}>
              <span className="logo-icon-svg" aria-hidden="true">
                {tech.icon}
              </span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
