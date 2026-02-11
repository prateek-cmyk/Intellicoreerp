const caseStudies = [
  {
    industry: "Manufacturing",
    badge: "Manufacturing Excellence",
    challenge: "Disconnected production data and manual approvals were inflating operational costs by 35%.",
    solution: "Unified Business Central with shop-floor automation, real-time dashboards, and AI-driven exception alerts.",
    stats: [
      { value: "40%", label: "Cost Reduction" },
      { value: "65%", label: "Efficiency Gain" },
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop",
    gradient: "linear-gradient(135deg, #0078D4 0%, #00A4EF 100%)",
  },
  {
    industry: "Financial Services",
    badge: "Finance Automation",
    challenge: "Compliance-heavy workflows caused 3-week delays in invoice approvals and audit cycles.",
    solution: "Implemented AI automation with secure digital signature workflows and automated compliance checks.",
    stats: [
      { value: "90%", label: "Automation" },
      { value: "75%", label: "Faster Approvals" },
    ],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=300&fit=crop",
    gradient: "linear-gradient(135deg, #5C2D91 0%, #742774 100%)",
  },
  {
    industry: "Retail",
    badge: "Retail Transformation",
    challenge: "Forecasting errors and inventory mismatches reduced profitability across 50+ store locations.",
    solution: "Deployed LS Central analytics with integrated demand forecasting and real-time inventory sync.",
    stats: [
      { value: "85%", label: "Forecast Accuracy" },
      { value: "30%", label: "Inventory Savings" },
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop",
    gradient: "linear-gradient(135deg, #008575 0%, #00B294 100%)",
  },
];

export default function CaseStudies() {
  return (
    <section className="section" id="case-studies">
      <div className="container">
        <div className="section-header centered">
          <p className="eyebrow">Success Stories</p>
          <h2>Case Studies</h2>
          <p>
            Real-world results that demonstrate measurable business impact
            across industries.
          </p>
        </div>
        <div className="grid grid-3">
          {caseStudies.map((study) => (
            <article className="case-card" key={study.industry}>
              <div className="case-visual">
                <img 
                  src={study.image} 
                  alt={study.industry}
                  className="case-visual-image"
                />
                <div className="case-visual-overlay" style={{ background: study.gradient }} />
                <span className="case-badge">{study.badge}</span>
              </div>
              <div className="case-body">
                <h3>{study.industry}</h3>
                <p>
                  <span className="label">Challenge:</span> {study.challenge}
                </p>
                <p>
                  <span className="label">Solution:</span> {study.solution}
                </p>
                <div className="case-stats">
                  {study.stats.map((stat) => (
                    <div className="case-stat" key={stat.label}>
                      <div className="case-stat-value">{stat.value}</div>
                      <div className="case-stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
