"use client";

import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav">
          <a className="logo-link" href="/" aria-label="IntelliCoreERP home">
            <Logo size="md" showText variant="dark" />
          </a>
          
          <div className={`nav-links ${isMenuOpen ? "nav-links-open" : ""}`}>
            <a href="/#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="/#case-studies" onClick={() => setIsMenuOpen(false)}>Case Studies</a>
            <a href="/#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a 
              className="btn btn-primary nav-cta-mobile" 
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
          
          <div className="nav-actions">
            <a className="btn btn-primary nav-cta" href="/#contact">
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            
            {/* Mobile menu button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <span className={`hamburger ${isMenuOpen ? "hamburger-open" : ""}`}>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
