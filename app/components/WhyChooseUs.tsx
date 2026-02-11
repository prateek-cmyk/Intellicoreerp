const reasons = [
  {
    title: "Certified Expertise",
    description: "Our team holds multiple Microsoft certifications with deep expertise in Dynamics 365 ecosystem.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="16" cy="16" r="12" fill="rgba(0,120,212,0.1)"/>
        <path d="M12 16l3 3 5-6"/>
      </svg>
    ),
    stat: "50+",
    statLabel: "Certifications",
  },
  {
    title: "Proven Track Record",
    description: "Successfully delivered 500+ projects across manufacturing, retail, finance, and services sectors.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="8" width="24" height="18" rx="3" fill="rgba(0,120,212,0.1)"/>
        <path d="M8 18l4-4 4 3 8-7"/>
      </svg>
    ),
    stat: "500+",
    statLabel: "Projects",
  },
  {
    title: "End-to-End Support",
    description: "From strategy and implementation to training and 24/7 support, we are with you every step.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="16" cy="16" r="12" fill="rgba(0,120,212,0.1)"/>
        <path d="M16 10v6l4 2"/>
      </svg>
    ),
    stat: "24/7",
    statLabel: "Support",
  },
  {
    title: "India-First Approach",
    description: "Deep understanding of Indian compliance, GST, and localization requirements for Dynamics ERP.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 4l-12 8v12l12 4 12-4V12z" fill="rgba(0,120,212,0.1)"/>
        <path d="M16 12v12M8 16h16"/>
      </svg>
    ),
    stat: "PAN",
    statLabel: "India",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section why-choose-section">
      <div className="container">
        <div className="why-choose-grid">
          {/* Left - Visual */}
          <div className="why-choose-visual">
            <div className="why-choose-image">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=640&fit=crop&crop=faces"
                alt="Business team in strategic meeting"
                className="wc-hero-image"
              />
            </div>
            
            {/* Floating elements */}
            <div className="wc-float-badge wc-float-badge-1">
              <svg width="20" height="20" viewBox="0 0 23 23" fill="none">
                <rect width="11" height="11" fill="#F25022"/>
                <rect x="12" width="11" height="11" fill="#7FBA00"/>
                <rect y="12" width="11" height="11" fill="#00A4EF"/>
                <rect x="12" y="12" width="11" height="11" fill="#FFB900"/>
              </svg>
              <span>Gold Partner</span>
            </div>
            
            <div className="wc-float-badge wc-float-badge-2">
              <div className="wc-rating">
                <span>★★★★★</span>
              </div>
              <span>4.9/5 Rating</span>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="why-choose-content">
            <div className="section-header">
              <p className="eyebrow">Why Choose Us</p>
              <h2>Your Trusted ERP Partner</h2>
              <p>
                We combine deep Microsoft expertise with local market knowledge to
                deliver solutions that drive real business outcomes.
              </p>
            </div>
            
            <div className="reasons-grid">
              {reasons.map((reason) => (
                <div className="reason-card" key={reason.title}>
                  <div className="reason-header">
                    <div className="reason-icon">
                      {reason.icon}
                    </div>
                    <div className="reason-stat">
                      <strong>{reason.stat}</strong>
                      <span>{reason.statLabel}</span>
                    </div>
                  </div>
                  <h4>{reason.title}</h4>
                  <p>{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
