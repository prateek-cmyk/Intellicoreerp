import AboutSection from "./components/AboutSection";
import CaseStudies from "./components/CaseStudies";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import ServicesGrid from "./components/ServicesGrid";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IntelliCoreERP",
    url: "https://www.intellicoreerp.com",
    logo: "https://www.intellicoreerp.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 8292026272",
      contactType: "sales",
      areaServed: "IN",
    },
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "IntelliCoreERP",
    url: "https://www.intellicoreerp.com",
    description:
      "Microsoft Dynamics ERP consulting, AI automation, machine learning integration, and digital signature solutions.",
    areaServed: "IN",
    serviceType: [
      "Microsoft Dynamics Business Central Consulting",
      "AI Automation",
      "Machine Learning Integration",
      "Digital Signature Integration",
      "ERP Integration Services",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* Trust Bar */}
        <section className="trust-section">
          <div className="container">
            <div className="trust-grid">
              <div className="trust-item">
                <div className="trust-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className="trust-content">
                  <strong>Microsoft Partner</strong>
                  <span>Certified expertise</span>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="trust-content">
                  <strong>500+ Clients</strong>
                  <span>Across industries</span>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="trust-content">
                  <strong>15+ Years</strong>
                  <span>Enterprise delivery</span>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <div className="trust-content">
                  <strong>98% Success</strong>
                  <span>On-time delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LogoStrip />
        <ServicesGrid />
        <WhyChooseUs />
        <CaseStudies />
        <Testimonials />

        {/* Resources Section */}
        <section className="section" id="resources">
          <div className="container">
            <div className="grid grid-2" style={{ alignItems: "start" }}>
              <div>
                <div className="section-header">
                  <p className="eyebrow">Free Downloads</p>
                  <h2>Resources & Guides</h2>
                  <p>
                    Get practical tools and guides to accelerate your ERP roadmap
                    and AI transformation journey.
                  </p>
                </div>
                <div className="card" style={{ marginTop: "24px" }}>
                  <h3>Available Resources</h3>
                  <ul>
                    <li>Microsoft Dynamics Implementation Guide (PDF)</li>
                    <li>AI Automation ROI Calculator</li>
                    <li>ERP Selection Checklist</li>
                    <li>Digital Signature Compliance Whitepaper</li>
                  </ul>
                  <p style={{ marginBottom: 0 }}>
                    Receive the resource pack instantly and a consultant will
                    follow up with tailored guidance for your business.
                  </p>
                </div>
              </div>
              <div className="form-card">
                <h3>Download Free Resources</h3>
                <p>
                  Fill in your details to receive our comprehensive resource pack.
                </p>
                <form className="form-grid" aria-label="Resource download form">
                  <div className="field">
                    <label htmlFor="resource-name">Full Name</label>
                    <input
                      id="resource-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="resource-company">Company</label>
                    <input
                      id="resource-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your company name"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="resource-email">Business Email</label>
                    <input
                      id="resource-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Download Resources
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <AboutSection />

        {/* Contact Section */}
        <section className="section" id="contact">
          <div className="container">
            <div className="grid grid-2" style={{ alignItems: "start" }}>
              <div>
                <div className="section-header">
                  <p className="eyebrow">Get In Touch</p>
                  <h2>Start Your ERP Journey</h2>
                  <p>
                    Ready to transform your business operations? Our team of
                    Microsoft Dynamics experts is here to help you every step of
                    the way.
                  </p>
                </div>
                <div className="card" style={{ marginTop: "24px" }}>
                  <h3>Why Choose IntelliCoreERP?</h3>
                  <ul>
                    <li>Certified Microsoft Dynamics experts</li>
                    <li>Proven track record across industries</li>
                    <li>End-to-end implementation support</li>
                    <li>24/7 PAN-India customer support</li>
                  </ul>
                  <div style={{ marginTop: "16px", display: "grid", gap: "8px" }}>
                    <p style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: 0 }}>
                      <strong>Email:</strong> hello@intellicoreerp.com
                    </p>
                    <p style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: 0 }}>
                      <strong>Phone:</strong> +91 8292026272
                    </p>
                  </div>
                </div>
              </div>
              <div className="form-card">
                <h3>Send Us a Message</h3>
                <p>
                  Tell us about your project and we will get back to you within 24
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
                    <label htmlFor="contact-message">How Can We Help?</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell us about your ERP goals and challenges..."
                      required
                    />
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
