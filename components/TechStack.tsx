"use client";

import React from 'react';
import { techStack } from '../lib/data';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function TechStack() {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const sectionStyle: React.CSSProperties = {
    padding: '100px 10%',
    background: 'var(--bg-primary)',
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '60px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '36px',
    fontWeight: 800,
    marginBottom: '16px',
  };

  const subtitleStyle: React.CSSProperties = {
    color: 'var(--text-secondary)',
    fontSize: '18px',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '40px',
  };

  const categoryStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  };

  const categoryTitleStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 700,
    color: 'var(--accent)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  };

  const skillListStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
  };

  const skillBadgeStyle: React.CSSProperties = {
    padding: '8px 16px',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '100px',
    fontSize: '14px',
    fontWeight: 500,
    transition: 'var(--transition)',
    cursor: 'default',
  };

  const proficiencySectionStyle: React.CSSProperties = {
    marginTop: '80px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
  };

  const progressBarContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  };

  const progressLabelStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    fontWeight: 600,
  };

  const progressTrackStyle: React.CSSProperties = {
    height: '8px',
    background: 'var(--bg-card)',
    borderRadius: '4px',
    overflow: 'hidden',
  };

  const progressFillStyle = (width: number): React.CSSProperties => ({
    height: '100%',
    width: isIntersecting ? `${width}%` : '0%',
    background: 'var(--gradient-1)',
    borderRadius: '4px',
    transition: 'width 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)',
  });

  return (
    <section id="skills" style={sectionStyle} ref={targetRef} className="reveal">
      <div style={headerStyle}>
        <h2 style={titleStyle}>Technologies I Work With</h2>
        <p style={subtitleStyle}>My toolkit for building AI-powered applications</p>
      </div>

      <div style={gridStyle}>
        {techStack.map((category) => (
          <div key={category.title} style={categoryStyle}>
            <h3 style={categoryTitleStyle}>
              {category.title}
            </h3>
            <div style={skillListStyle}>
              {category.items.map((skill) => (
                <div
                  key={skill.name}
                  style={skillBadgeStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={proficiencySectionStyle}>
        {techStack.flatMap(c => c.items).filter(i => i.level).slice(0, 6).map((skill) => (
          <div key={skill.name} style={progressBarContainerStyle}>
            <div style={progressLabelStyle}>
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div style={progressTrackStyle}>
              <div style={progressFillStyle(skill.level || 0)} />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          #skills { padding: 60px 5%; }
        }
      `}</style>
    </section>
  );
}
