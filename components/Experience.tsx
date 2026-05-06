"use client";

import React from 'react';
import { experience } from '../lib/data';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Experience() {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const sectionStyle: React.CSSProperties = {
    padding: '100px 10%',
    background: 'var(--bg-primary)',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '36px',
    fontWeight: 800,
    textAlign: 'center',
    marginBottom: '80px',
  };

  const timelineStyle: React.CSSProperties = {
    maxWidth: '1000px',
    margin: '0 auto',
    position: 'relative',
  };

  const lineStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: '2px',
    background: 'var(--border-color)',
    transform: 'translateX(-50%)',
  };

  const itemContainerStyle = (index: number): React.CSSProperties => ({
    display: 'flex',
    justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
    paddingBottom: '60px',
    width: '100%',
    position: 'relative',
  });

  const dotStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '20px',
    width: '20px',
    height: '20px',
    background: 'var(--accent)',
    border: '4px solid var(--bg-primary)',
    borderRadius: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
    boxShadow: '0 0 10px var(--accent)',
  };

  const contentCardStyle = (index: number): React.CSSProperties => ({
    width: '45%',
    padding: '32px',
    background: 'var(--bg-card)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--border-color)',
    position: 'relative',
    textAlign: index % 2 === 0 ? 'right' : 'left',
  });

  const dateStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 700,
    color: 'var(--accent)',
    marginBottom: '8px',
    display: 'block',
  };

  const roleStyle: React.CSSProperties = {
    fontSize: '22px',
    fontWeight: 700,
    marginBottom: '4px',
  };

  const companyStyle: React.CSSProperties = {
    fontSize: '16px',
    color: 'var(--text-secondary)',
    marginBottom: '16px',
    display: 'block',
  };

  const descStyle: React.CSSProperties = {
    fontSize: '15px',
    color: 'var(--text-muted)',
    lineHeight: 1.6,
  };

  const techTagsStyle = (index: number): React.CSSProperties => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '20px',
    justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
  });

  return (
    <section id="experience" style={sectionStyle} ref={targetRef} className="reveal">
      <h2 style={titleStyle}>My Journey</h2>

      <div style={timelineStyle}>
        <div style={lineStyle} className="timeline-line" />
        
        {experience.map((item, index) => (
          <div key={index} style={itemContainerStyle(index)} className="timeline-item">
            <div style={dotStyle} />
            <div style={contentCardStyle(index)}>
              <span style={dateStyle}>{item.date}</span>
              <h3 style={roleStyle}>{item.title}</h3>
              <span style={companyStyle}>{item.company}</span>
              <p style={descStyle}>{item.description}</p>
              {item.tech && (
                <div style={techTagsStyle(index)}>
                  {item.tech.map(t => (
                    <span key={t} style={{ fontSize: '12px', color: 'var(--text-secondary)', padding: '4px 10px', background: 'var(--bg-primary)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>{t}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          #experience { padding: 60px 5%; }
          .timeline-line { left: 20px !important; transform: none !important; }
          .timeline-item { justify-content: flex-start !important; padding-left: 50px !important; }
          .timeline-item > div:first-child { left: 20px !important; transform: translateX(-50%) !important; }
          .timeline-item > div:nth-child(2) { width: 100% !important; text-align: left !important; }
          .timeline-item div[style*="justify-content: flex-end"] { justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
