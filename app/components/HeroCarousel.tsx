"use client";

import { useEffect, useState, useCallback } from "react";

const slides = [
  {
    id: 1,
    title: "Microsoft Dynamics Business Central",
    subtitle: "End-to-End ERP Implementation",
    description: "Transform your operations with cloud-first Business Central solutions",
    bgGradient: "linear-gradient(135deg, #0078D4 0%, #00A4EF 50%, #00BCF2 100%)",
    pattern: "erp",
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    subtitle: "Intelligent Automation",
    description: "Harness the power of AI to automate workflows and drive insights",
    bgGradient: "linear-gradient(135deg, #5C2D91 0%, #742774 50%, #B4009E 100%)",
    pattern: "ai",
  },
  {
    id: 3,
    title: "Digital Transformation",
    subtitle: "Enterprise Solutions",
    description: "Modernize your business with cutting-edge digital signature and compliance solutions",
    bgGradient: "linear-gradient(135deg, #008575 0%, #00B294 50%, #00CC6A 100%)",
    pattern: "digital",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="hero-carousel">
      <div className="carousel-slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
            style={{ background: slide.bgGradient }}
          >
            {/* Animated background pattern */}
            <div className={`carousel-pattern carousel-pattern-${slide.pattern}`} />
            
            {/* Floating elements */}
            <div className="carousel-floating-elements">
              {slide.pattern === "erp" && (
                <>
                  <div className="floating-card floating-card-1">
                    <div className="floating-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18M9 21V9" />
                      </svg>
                    </div>
                    <span>Finance</span>
                  </div>
                  <div className="floating-card floating-card-2">
                    <div className="floating-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 7h-9M14 17H5" />
                        <circle cx="17" cy="17" r="3" />
                        <circle cx="7" cy="7" r="3" />
                      </svg>
                    </div>
                    <span>Operations</span>
                  </div>
                  <div className="floating-card floating-card-3">
                    <div className="floating-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                      </svg>
                    </div>
                    <span>Inventory</span>
                  </div>
                </>
              )}
              {slide.pattern === "ai" && (
                <>
                  <div className="floating-card floating-card-1">
                    <div className="floating-icon ai-pulse">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                    </div>
                    <span>ML Models</span>
                  </div>
                  <div className="floating-card floating-card-2">
                    <div className="floating-icon ai-pulse" style={{ animationDelay: "0.5s" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <ellipse cx="12" cy="5" rx="9" ry="3" />
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                      </svg>
                    </div>
                    <span>Big Data</span>
                  </div>
                  <div className="floating-card floating-card-3">
                    <div className="floating-icon ai-pulse" style={{ animationDelay: "1s" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                      </svg>
                    </div>
                    <span>Analytics</span>
                  </div>
                </>
              )}
              {slide.pattern === "digital" && (
                <>
                  <div className="floating-card floating-card-1">
                    <div className="floating-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <path d="M9 15l2 2 4-4" />
                      </svg>
                    </div>
                    <span>e-Sign</span>
                  </div>
                  <div className="floating-card floating-card-2">
                    <div className="floating-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0110 0v4" />
                      </svg>
                    </div>
                    <span>Security</span>
                  </div>
                  <div className="floating-card floating-card-3">
                    <div className="floating-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <span>Compliance</span>
                  </div>
                </>
              )}
            </div>

            {/* Content overlay */}
            <div className="carousel-content">
              <p className="carousel-subtitle">{slide.subtitle}</p>
              <h2 className="carousel-title">{slide.title}</h2>
              <p className="carousel-description">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="carousel-arrow carousel-arrow-prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        className="carousel-arrow carousel-arrow-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots indicator */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
