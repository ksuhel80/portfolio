"use client";

import React from "react";
import { testimonials } from "../lib/data";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Testimonial } from "../types";

export default function Testimonials() {
  const { targetRef } = useIntersectionObserver({ threshold: 0.1 });

  const sectionStyle: React.CSSProperties = {
    padding: "100px 10%",
    background: "var(--bg-secondary)",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "36px",
    fontWeight: 800,
    textAlign: "center",
    marginBottom: "16px",
  };

  const subtitleStyle: React.CSSProperties = {
    textAlign: "center",
    color: "var(--text-muted)",
    fontSize: "18px",
    marginBottom: "60px",
    maxWidth: "700px",
    marginInline: "auto",
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "32px",
  };

  const cardStyle: React.CSSProperties = {
    padding: "40px",
    background: "var(--bg-card)",
    borderRadius: "var(--radius-lg)",
    border: "1px solid var(--border-color)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    transition: "var(--transition)",
  };

  const quoteIconStyle: React.CSSProperties = {
    fontSize: "48px",
    color: "var(--accent)",
    opacity: 0.3,
    position: "absolute",
    top: "20px",
    left: "30px",
    fontFamily: "serif",
  };

  const quoteTextStyle: React.CSSProperties = {
    fontSize: "18px",
    lineHeight: 1.7,
    color: "var(--text-primary)",
    fontStyle: "italic",
    position: "relative",
    zIndex: 1,
  };

  const ratingStyle: React.CSSProperties = {
    color: "#ffb800",
    fontSize: "18px",
    letterSpacing: "2px",
  };

  const authorStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginTop: "auto",
  };

  const avatarStyle: React.CSSProperties = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "var(--gradient-2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: 700,
    color: "#fff",
  };

  const authorInfoStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  const nameStyle: React.CSSProperties = {
    fontSize: "16px",
    fontWeight: 700,
  };

  const roleStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "var(--text-muted)",
  };

  return (
    <section
      id="testimonials"
      style={sectionStyle}
      ref={targetRef}
      className="reveal"
    >
      <h2 style={titleStyle}>What Clients Say</h2>
      <p style={subtitleStyle}>
        Feedback from partners and clients I've worked with on AI and full-stack projects.
      </p>

      <div style={gridStyle}>
        {testimonials.map((t: Testimonial, index: number) => (
          <div key={index} style={cardStyle}>
            <div style={quoteIconStyle}>“</div>
            <p style={quoteTextStyle}>"{t.quote}"</p>
            <div style={ratingStyle}>★★★★★</div>
            <div style={authorStyle}>
              <div style={avatarStyle}>
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div style={authorInfoStyle}>
                <span style={nameStyle}>{t.name}</span>
                <span style={roleStyle}>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          #testimonials {
            padding: 70px 5%;
          }
        }
      `}</style>
    </section>
  );
}
