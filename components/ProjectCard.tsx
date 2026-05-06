"use client";

import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardStyle: React.CSSProperties = {
    background: 'var(--bg-card)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--border-color)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'var(--transition)',
    height: '100%',
    position: 'relative',
  };

  const accentBarStyle: React.CSSProperties = {
    height: '4px',
    background: project.color,
    width: '100%',
  };

  const bodyStyle: React.CSSProperties = {
    padding: '24px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  };

  const idStyle: React.CSSProperties = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    fontSize: '14px',
    color: 'var(--text-muted)',
    fontWeight: 700,
  };

  const nameStyle: React.CSSProperties = {
    fontSize: '22px',
    fontWeight: 700,
    marginBottom: '12px',
    color: 'var(--text-primary)',
  };

  const descStyle: React.CSSProperties = {
    fontSize: '15px',
    color: 'var(--text-secondary)',
    marginBottom: '20px',
    lineHeight: 1.6,
  };

  const techStackStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: 'auto',
  };

  const techPillStyle: React.CSSProperties = {
    fontSize: '12px',
    padding: '4px 10px',
    background: 'var(--bg-secondary)',
    borderRadius: '100px',
    color: 'var(--text-secondary)',
    border: '1px solid var(--border-color)',
  };

  const footerStyle: React.CSSProperties = {
    padding: '20px 24px',
    borderTop: '1px solid var(--border-color)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const linkStyle = (primary: boolean): React.CSSProperties => ({
    fontSize: '14px',
    fontWeight: 600,
    color: primary ? 'var(--accent)' : 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  });

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
        e.currentTarget.style.borderColor = project.color;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'var(--border-color)';
      }}
    >
      <div style={accentBarStyle} />
      <div style={bodyStyle}>
        <span style={idStyle}>{project.id}</span>
        <h3 style={nameStyle}>{project.name}</h3>
        <p style={descStyle}>{project.description}</p>
        <div style={techStackStyle}>
          {project.tech.map((t) => (
            <span key={t} style={techPillStyle}>{t}</span>
          ))}
        </div>
      </div>
      <div style={footerStyle}>
        <a 
          href={project.link} 
          style={linkStyle(true)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo ↗
        </a>
        <a 
          href={project.github} 
          style={linkStyle(false)}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
