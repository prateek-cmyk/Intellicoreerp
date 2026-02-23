"use client";

import { useState, useRef, FormEvent } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const WEB3FORMS_KEY = "c12c7174-7c62-406e-b474-2623e95b681f";
const HCAPTCHA_SITEKEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

export default function ResourceForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the captcha verification.");
      return;
    }

    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const jsonData: Record<string, string> = {
      access_key: WEB3FORMS_KEY,
      subject: "Resource Download Request - IntelliCoreERP",
      from_name: "IntelliCoreERP Website",
      "h-captcha-response": captchaToken,
    };
    formData.forEach((value, key) => {
      if (key !== "botcheck") jsonData[key] = value as string;
    });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonData),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
        setCaptchaToken(null);
        captchaRef.current?.resetCaptcha();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-card" style={{ textAlign: "center" }}>
        <div style={{ fontSize: "3rem", marginBottom: "16px" }}>&#10003;</div>
        <h3>Request Received!</h3>
        <p>We&apos;ll send the resource pack to your email shortly. A consultant will follow up with tailored guidance.</p>
        <button
          className="btn btn-primary"
          onClick={() => setStatus("idle")}
          style={{ marginTop: "16px" }}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="form-card">
      <h3>Download Free Resources</h3>
      <p>Fill in your details to receive our comprehensive resource pack.</p>

      {status === "error" && (
        <p style={{ color: "#EF4444", fontSize: "0.875rem", marginBottom: "8px" }}>
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <form className="form-grid" onSubmit={handleSubmit} aria-label="Resource download form">
        <input type="checkbox" name="botcheck" style={{ display: "none" }} />

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
        <HCaptcha
          sitekey={HCAPTCHA_SITEKEY}
          reCaptchaCompat={false}
          onVerify={(token) => setCaptchaToken(token)}
          onExpire={() => setCaptchaToken(null)}
          ref={captchaRef}
        />
        <button
          className="btn btn-primary"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Download Resources"}
        </button>
      </form>
    </div>
  );
}
