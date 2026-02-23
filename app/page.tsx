import AboutSection from "./components/AboutSection";
import CaseStudies from "./components/CaseStudies";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import ResourceForm from "./components/ResourceForm";
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
      telephone: "+91 9035203994",
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
              <ResourceForm />
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
                      <span style={{ color: "var(--color-text-muted)" }}>sales@intellicoreerp.com</span>
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
                      <span style={{ color: "var(--color-text-muted)" }}>+91 9035203994</span>
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
              <ContactForm />
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
