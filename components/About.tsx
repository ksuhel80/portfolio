"use client";

import React from 'react';
import { personalInfo } from '../lib/data';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const sectionStyle: React.CSSProperties = {
    padding: '100px 10%',
    background: 'var(--bg-secondary)',
    position: 'relative',
    overflow: 'hidden',
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '60px',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const leftSideStyle: React.CSSProperties = {
    flex: '1 1 40%',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
  };

  const photoPlaceholderStyle: React.CSSProperties = {
    width: '280px',
    height: '280px',
    borderRadius: '50%',
    background: 'var(--gradient-1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '80px',
    fontWeight: 800,
    color: '#fff',
    boxShadow: 'var(--shadow-glow)',
    border: '4px solid var(--border-color)',
  };

  const infoRowStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
  };

  const locationBadgeStyle: React.CSSProperties = {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  };

  const socialLinksStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
  };

  const socialIconStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    transition: 'var(--transition)',
  };

  const rightSideStyle: React.CSSProperties = {
    flex: '1 1 50%',
    minWidth: '320px',
  };

  const sectionHeadingStyle: React.CSSProperties = {
    fontSize: '32px',
    fontWeight: 700,
    marginBottom: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  };

  const lineStyle: React.CSSProperties = {
    height: '2px',
    width: '50px',
    background: 'var(--accent)',
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: '16px',
    color: 'var(--text-secondary)',
    marginBottom: '20px',
    lineHeight: 1.8,
  };

  const factGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '20px',
    marginTop: '40px',
    marginBottom: '40px',
  };

  const factCardStyle: React.CSSProperties = {
    padding: '16px',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-md)',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  };

  const cardGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  };

  const miniCardStyle: React.CSSProperties = {
    padding: '24px',
    background: 'var(--bg-primary)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-lg)',
    transition: 'var(--transition)',
    textAlign: 'center',
  };

  return (
    <section id="about" style={sectionStyle} ref={targetRef} className="reveal">
      <div style={containerStyle}>
        <div style={leftSideStyle}>
          <div style={photoPlaceholderStyle}>
            {personalInfo.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div style={infoRowStyle}>
            <div style={locationBadgeStyle}>📍 {personalInfo.location}</div>
            <div style={{ ...locationBadgeStyle, color: 'var(--success)' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success)' }} />
              Available for new projects
            </div>
          </div>
          <div style={socialLinksStyle}>
            <a href={personalInfo.github} style={socialIconStyle}>GH</a>
            <a href={personalInfo.linkedin} style={socialIconStyle}>IN</a>
            {personalInfo.twitter && <a href={personalInfo.twitter} style={socialIconStyle}>TW</a>}
          </div>
        </div>

        <div style={rightSideStyle}>
          <div style={sectionHeadingStyle}>
            <div style={lineStyle} />
            About Me
          </div>

          <p style={paragraphStyle}>
            Hello! I'm {personalInfo.name}, a {personalInfo.title} passionate about creating products that solve real-world problems. My journey in tech started with a curiosity for how things work, which evolved into a career building complex web applications.
          </p>
          <p style={paragraphStyle}>
            Today, my focus is on the intersection of Full Stack Development and Artificial Intelligence. I believe AI is the most transformative tool of our generation, and I'm dedicated to integrating it into modern web workflows to create smarter, more efficient user experiences.
          </p>
          <p style={paragraphStyle}>
            When I'm not coding, you can find me exploring new AI research, contributing to open-source projects, or sharing my knowledge with the developer community.
          </p>

          <div style={factGridStyle}>
            <div style={factCardStyle}>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Location</span>
              <span style={{ fontWeight: 600 }}>{personalInfo.location}</span>
            </div>
            <div style={factCardStyle}>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Available</span>
              <span style={{ fontWeight: 600 }}>Immediately</span>
            </div>
            <div style={factCardStyle}>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Education</span>
              <span style={{ fontWeight: 600 }}>B.S. Computer Science</span>
            </div>
          </div>

          <div style={cardGridStyle}>
            <div style={miniCardStyle}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>🌐</div>
              <h4 style={{ marginBottom: '8px' }}>Full Stack</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Building robust web apps</p>
            </div>
            <div style={miniCardStyle}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>🤖</div>
              <h4 style={{ marginBottom: '8px' }}>AI Integration</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Smarter features with LLMs</p>
            </div>
            <div style={miniCardStyle}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>🚀</div>
              <h4 style={{ marginBottom: '8px' }}>Product Focus</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>From idea to production</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          #about { padding: 60px 5%; }
          .miniCardStyle { padding: 16px; }
        }
      `}</style>
    </section>
  );
}
