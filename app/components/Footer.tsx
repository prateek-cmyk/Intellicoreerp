import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Partner Badges Section */}
        <div className="footer-partners">
          <div className="partner-logos">
            {/* Microsoft Partner Badge */}
            <div className="footer-partner-badge">
              <svg width="24" height="24" viewBox="0 0 23 23" fill="none">
                <rect width="11" height="11" fill="#F25022"/>
                <rect x="12" width="11" height="11" fill="#7FBA00"/>
                <rect y="12" width="11" height="11" fill="#00A4EF"/>
                <rect x="12" y="12" width="11" height="11" fill="#FFB900"/>
              </svg>
              <span>Microsoft Certified Partner</span>
            </div>
            {/* Azure Partner */}
            <div className="footer-partner-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13.05 4.24L6.56 18.05a.5.5 0 00.46.7h10.81a.5.5 0 00.44-.26l3.91-7.31a.5.5 0 00-.02-.52l-8.67-6.42a.5.5 0 00-.44 0z" fill="#0089D6"/>
                <path d="M8.58 16.83L2.22 8.02a.5.5 0 01.39-.77h5.67a.5.5 0 01.42.23l4.78 7.35H8.58z" fill="#0089D6" opacity="0.8"/>
              </svg>
              <span>Azure Solutions</span>
            </div>
            {/* Power Platform */}
            <div className="footer-partner-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="8" height="8" rx="2" fill="#742774"/>
                <rect x="13" y="3" width="8" height="8" rx="2" fill="#ED7D31"/>
                <rect x="3" y="13" width="8" height="8" rx="2" fill="#00B0F0"/>
                <rect x="13" y="13" width="8" height="8" rx="2" fill="#00A651"/>
              </svg>
              <span>Power Platform</span>
            </div>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <Logo size="md" showText variant="light" />
            <p>
              Premier Microsoft Dynamics consulting and AI automation firm
              delivering enterprise-grade ERP solutions across India.
            </p>
            {/* Social Links */}
            <div className="footer-social">
              <a href="https://linkedin.com" aria-label="LinkedIn" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="footer-title">Services</h4>
            <nav className="footer-links">
              <a href="/#services">Business Central</a>
              <a href="/#services">AI Automation</a>
              <a href="/#services">Digital Signatures</a>
              <a href="/#services">LS Central Retail</a>
              <a href="/#services">Oracle Integration</a>
            </nav>
          </div>
          <div>
            <h4 className="footer-title">Company</h4>
            <nav className="footer-links">
              <a href="/#about">About Us</a>
              <a href="/#case-studies">Case Studies</a>
              <a href="/#resources">Resources</a>
              <a href="/#contact">Contact</a>
            </nav>
          </div>
          <div>
            <h4 className="footer-title">Contact</h4>
            <div className="footer-contact">
              <p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                sales@intellicoreerp.com
              </p>
              <p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +91 9035203994
              </p>
              <p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                PAN-India Support
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 IntelliCoreERP. All rights reserved.</p>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
