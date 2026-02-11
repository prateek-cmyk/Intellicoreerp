const testimonials = [
  {
    name: "Ananya Rao",
    initials: "AR",
    role: "Director of Operations",
    company: "Precision Manufacturing Co.",
    quote:
      "IntelliCoreERP transformed our Dynamics environment with automation and flawless execution. The team delivered measurable efficiency gains within the first quarter.",
    rating: 5,
    industry: "Manufacturing",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face",
    companyLogo: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="8" fill="#0078D4" opacity="0.1"/>
        <path d="M12 20h16M20 12v16" stroke="#0078D4" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="6" stroke="#0078D4" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    name: "Karan Mehta",
    initials: "KM",
    role: "Chief Financial Officer",
    company: "FinServe Holdings",
    quote:
      "From compliance automation to digital signatures, every workflow is now faster and fully auditable. Outstanding consulting partnership that exceeded our expectations.",
    rating: 5,
    industry: "Financial Services",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    companyLogo: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="8" fill="#5C2D91" opacity="0.1"/>
        <path d="M14 26V14h4l4 8 4-8h4v12" stroke="#5C2D91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Priya Sharma",
    initials: "PS",
    role: "IT Director",
    company: "RetailMax India",
    quote:
      "The LS Central implementation revolutionized our inventory management. Real-time visibility across 50+ stores has dramatically improved our forecasting accuracy.",
    rating: 5,
    industry: "Retail",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
    companyLogo: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="8" fill="#008575" opacity="0.1"/>
        <rect x="12" y="16" width="16" height="12" rx="2" stroke="#008575" strokeWidth="2"/>
        <path d="M16 12h8v4H16z" stroke="#008575" strokeWidth="2"/>
        <path d="M18 22h4" stroke="#008575" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Testimonials() {
  return (
    <section className="section section-alt" id="testimonials">
      <div className="container">
        <div className="section-header centered">
          <p className="eyebrow">Client Feedback</p>
          <h2>What Our Clients Say</h2>
          <p>
            Trusted by enterprise teams across India for ERP excellence and
            digital transformation.
          </p>
        </div>
        
        {/* Client Logos Preview */}
        <div className="client-logos-preview">
          {testimonials.map((t, i) => (
            <div key={i} className="client-logo-item">
              {t.companyLogo}
            </div>
          ))}
          <div className="client-logo-item client-logo-more">
            <span>+50</span>
          </div>
        </div>
        
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              {/* Industry badge */}
              <div className="testimonial-industry-badge">
                {testimonial.industry}
              </div>
              
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <img 
                  src={testimonial.photo} 
                  alt={testimonial.name}
                  className="testimonial-avatar-img"
                />
                <div className="testimonial-info">
                  <strong>{testimonial.name}</strong>
                  <span>
                    {testimonial.role}, {testimonial.company}
                  </span>
                  <div className="testimonial-rating">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <div className="testimonial-company-logo">
                  {testimonial.companyLogo}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
