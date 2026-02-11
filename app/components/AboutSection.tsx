const teamMembers = [
  { 
    initials: "RK", 
    name: "Rajesh Kumar", 
    role: "Founder & CEO", 
    color: "#0078D4",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
  },
  { 
    initials: "AP", 
    name: "Anjali Patel", 
    role: "Technical Director", 
    color: "#5C2D91",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
  },
  { 
    initials: "VS", 
    name: "Vikram Singh", 
    role: "Solutions Architect", 
    color: "#008575",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
  },
  { 
    initials: "PM", 
    name: "Priya Mehta", 
    role: "Client Success Lead", 
    color: "#E74C3C",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
  },
];

const achievements = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="24" height="24" rx="4" fill="rgba(0,120,212,0.1)"/>
        <path d="M12 16l3 3 5-6"/>
      </svg>
    ),
    title: "Microsoft Gold Partner",
    description: "Certified expertise in Dynamics 365",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="16" cy="16" r="12" fill="rgba(0,120,212,0.1)"/>
        <path d="M16 10v6l4 2"/>
      </svg>
    ),
    title: "15+ Years Experience",
    description: "Trusted enterprise partner",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="rgba(0,120,212,0.1)"/>
      </svg>
    ),
    title: "ISO 27001 Certified",
    description: "Enterprise security standards",
  },
];

export default function AboutSection() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left side - Content */}
          <div className="about-content">
            <div className="section-header">
              <p className="eyebrow">Who We Are</p>
              <h2>About IntelliCoreERP</h2>
              <p>
                IntelliCoreERP is a premier Microsoft Dynamics consulting and AI
                automation firm led by industry experts with 20+ years of
                experience delivering enterprise-grade ERP solutions across India.
              </p>
            </div>
            
            {/* Achievements */}
            <div className="about-achievements">
              {achievements.map((achievement) => (
                <div className="achievement-item" key={achievement.title}>
                  <div className="achievement-icon">
                    {achievement.icon}
                  </div>
                  <div className="achievement-content">
                    <strong>{achievement.title}</strong>
                    <span>{achievement.description}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Tags */}
            <div className="tag-list">
              <span className="tag">Business Central</span>
              <span className="tag">Finance & Operations</span>
              <span className="tag">AI Automation</span>
              <span className="tag">Digital Signatures</span>
              <span className="tag">ERP Integration</span>
              <span className="tag">Cloud Migration</span>
            </div>
          </div>
          
          {/* Right side - Visual */}
          <div className="about-visual">
            {/* Office/Team Image */}
            <div className="about-image-card">
              <div className="about-image-main">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=faces"
                  alt="Team collaboration in modern office"
                  className="about-hero-image"
                />
                <div className="about-image-overlay">
                  <div className="about-image-badge">
                    <svg width="20" height="20" viewBox="0 0 23 23" fill="none">
                      <rect width="11" height="11" fill="#F25022"/>
                      <rect x="12" width="11" height="11" fill="#7FBA00"/>
                      <rect y="12" width="11" height="11" fill="#00A4EF"/>
                      <rect x="12" y="12" width="11" height="11" fill="#FFB900"/>
                    </svg>
                    <span>Microsoft Partner</span>
                  </div>
                </div>
              </div>
              
              {/* Floating stat cards */}
              <div className="about-float-card about-float-card-1">
                <div className="about-float-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                  </svg>
                </div>
                <div>
                  <strong>500+</strong>
                  <span>Happy Clients</span>
                </div>
              </div>
              
              <div className="about-float-card about-float-card-2">
                <div className="about-float-icon" style={{ background: "rgba(34, 197, 94, 0.1)", color: "#22C55E" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                  </svg>
                </div>
                <div>
                  <strong>98%</strong>
                  <span>Success Rate</span>
                </div>
              </div>
            </div>
            
            {/* Team Preview */}
            <div className="team-preview">
              <span className="team-preview-label">Our Leadership Team</span>
              <div className="team-avatars">
                {teamMembers.map((member, index) => (
                  <img
                    key={member.name}
                    src={member.photo}
                    alt={member.name}
                    className="team-avatar-photo"
                    style={{ 
                      zIndex: teamMembers.length - index,
                    }}
                    title={`${member.name} - ${member.role}`}
                  />
                ))}
                <div className="team-avatar team-avatar-more">
                  +12
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
