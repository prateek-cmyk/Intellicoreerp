import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section className="hero">
      {/* Gradient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content animate-in">
            {/* Microsoft Partner Badge */}
            <div className="partner-badge">
              <svg width="20" height="20" viewBox="0 0 23 23" fill="none">
                <rect width="11" height="11" fill="#F25022"/>
                <rect x="12" width="11" height="11" fill="#7FBA00"/>
                <rect y="12" width="11" height="11" fill="#00A4EF"/>
                <rect x="12" y="12" width="11" height="11" fill="#FFB900"/>
              </svg>
              <span>Microsoft Certified Gold Partner</span>
            </div>
            
            <h1>
              Transform Your Business with{" "}
              <span className="text-gradient">Microsoft Dynamics ERP</span>
            </h1>
            <p className="hero-subtitle">
              Expert Microsoft Dynamics Business Central consulting, AI automation,
              machine learning integration, and digital signature solutions that
              streamline your enterprise operations.
            </p>
            
            {/* Key highlights */}
            <div className="hero-highlights">
              <div className="hero-highlight-item">
                <div className="hero-highlight-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <strong>15+ Years</strong>
                  <span>Enterprise Experience</span>
                </div>
              </div>
              <div className="hero-highlight-item">
                <div className="hero-highlight-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <strong>500+</strong>
                  <span>Projects Delivered</span>
                </div>
              </div>
              <div className="hero-highlight-item">
                <div className="hero-highlight-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <strong>98%</strong>
                  <span>Success Rate</span>
                </div>
              </div>
            </div>
            
            <div className="hero-actions">
              <a className="btn btn-primary btn-lg" href="#contact">
                Start Your Transformation
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a className="btn btn-outline btn-lg" href="#services">
                Explore Solutions
              </a>
            </div>
            
            {/* Trusted by logos */}
            <div className="hero-trusted">
              <span className="hero-trusted-label">Trusted by leading enterprises</span>
              <div className="hero-trusted-logos">
                <div className="trusted-logo">
                  <svg width="80" height="24" viewBox="0 0 80 24" fill="none">
                    <rect width="80" height="24" rx="4" fill="#f1f5f9"/>
                    <text x="40" y="15" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="500">ENTERPRISE</text>
                  </svg>
                </div>
                <div className="trusted-logo">
                  <svg width="80" height="24" viewBox="0 0 80 24" fill="none">
                    <rect width="80" height="24" rx="4" fill="#f1f5f9"/>
                    <text x="40" y="15" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="500">FORTUNE 500</text>
                  </svg>
                </div>
                <div className="trusted-logo">
                  <svg width="80" height="24" viewBox="0 0 80 24" fill="none">
                    <rect width="80" height="24" rx="4" fill="#f1f5f9"/>
                    <text x="40" y="15" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="500">GLOBAL</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-visual animate-in">
            <HeroCarousel />
            
            {/* Floating trust badges */}
            <div className="hero-float-badge hero-float-badge-1">
              <div className="hero-float-badge-icon success">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <strong>ISO 27001</strong>
                <span>Certified</span>
              </div>
            </div>
            
            <div className="hero-float-badge hero-float-badge-2">
              <div className="hero-float-badge-rating">★★★★★</div>
              <div>
                <strong>4.9/5</strong>
                <span>Client Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
