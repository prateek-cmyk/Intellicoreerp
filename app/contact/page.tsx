import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Contact IntelliCoreERP | Microsoft Dynamics ERP Consulting",
  description:
    "Connect with IntelliCoreERP for Microsoft Dynamics ERP consulting, AI automation, and digital signature solutions.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <p className="eyebrow">Contact Us</p>
                <h1>Let&apos;s Transform Your ERP Together</h1>
                <p>
                  Tell us about your Dynamics ecosystem, AI automation goals, or
                  compliance needs. Our experts will respond within one business
                  day with tailored recommendations.
                </p>
                <div style={{ marginTop: "32px", display: "grid", gap: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div className="trust-icon" style={{ width: "40px", height: "40px" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <strong style={{ display: "block" }}>Email</strong>
                      <span style={{ color: "var(--color-text-muted)" }}>hello@intellicoreerp.com</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div className="trust-icon" style={{ width: "40px", height: "40px" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <strong style={{ display: "block" }}>Phone</strong>
                      <span style={{ color: "var(--color-text-muted)" }}>+91 8292026272</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div className="trust-icon" style={{ width: "40px", height: "40px" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <strong style={{ display: "block" }}>Coverage</strong>
                      <span style={{ color: "var(--color-text-muted)" }}>PAN-India Support</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-card">
                <h3>Send Us a Message</h3>
                <p>
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>
                <form className="form-grid" aria-label="Contact form">
                  <div className="field">
                    <label htmlFor="contact-name">Full Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="contact-email">Business Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="contact-company">Company</label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your company name"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="contact-message">How Can We Help?</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell us about your ERP goals, challenges, or questions..."
                      required
                    />
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Request Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header centered">
              <p className="eyebrow">Our Expertise</p>
              <h2>How We Can Help</h2>
              <p>
                From initial strategy to ongoing support, we provide comprehensive
                ERP consulting services.
              </p>
            </div>
            <div className="grid grid-4">
              <div className="card">
                <div className="card-icon">BC</div>
                <h3>Business Central</h3>
                <p>
                  Implementation, customization, and optimization for growing
                  enterprises.
                </p>
              </div>
              <div className="card">
                <div className="card-icon">AI</div>
                <h3>AI Automation</h3>
                <p>
                  Intelligent workflows, predictive analytics, and process
                  automation.
                </p>
              </div>
              <div className="card">
                <div className="card-icon">DS</div>
                <h3>Digital Signatures</h3>
                <p>
                  Compliant e-signature solutions with USB tokens and Aadhaar
                  eSign.
                </p>
              </div>
              <div className="card">
                <div className="card-icon">INT</div>
                <h3>Integrations</h3>
                <p>
                  Connect Dynamics with Oracle, NetSuite, Salesforce, and more.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
