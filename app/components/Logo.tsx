interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  variant?: "light" | "dark";
}

export default function Logo({ size = "md", showText = true, variant = "dark" }: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: "1rem" },
    md: { icon: 40, text: "1.25rem" },
    lg: { icon: 48, text: "1.5rem" },
  };

  const { icon, text } = sizes[size];
  const textColor = variant === "dark" ? "var(--color-text)" : "#ffffff";

  return (
    <div className="company-logo" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {/* Minimal IC Logo Mark */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="IntelliCoreERP logo"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0078D4" />
            <stop offset="100%" stopColor="#00BCF2" />
          </linearGradient>
        </defs>
        
        {/* Clean rounded square */}
        <rect x="0" y="0" width="40" height="40" rx="10" fill="url(#logoGrad)" />
        
        {/* Minimal "I" */}
        <rect x="10" y="10" width="4" height="20" rx="2" fill="white" />
        
        {/* Minimal "C" */}
        <path 
          d="M30 14C30 14 27 10 22 10C17 10 16 15 16 20C16 25 17 30 22 30C27 30 30 26 30 26" 
          stroke="white" 
          strokeWidth="4" 
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      
      {showText && (
        <span
          style={{
            fontSize: text,
            fontWeight: 700,
            color: textColor,
            letterSpacing: "-0.02em",
          }}
        >
          Intelli<span style={{ color: "#0078D4" }}>Core</span>
        </span>
      )}
    </div>
  );
}
