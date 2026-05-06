"use client";

import React, { useState } from 'react';
import { projects } from '../lib/data';
import ProjectCard from './ProjectCard';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const categories = ['All', 'AI Apps', 'Full Stack', 'Automation'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.05 });

  const filteredProjects = projects.filter(p => 
    activeCategory === 'All' || p.category === activeCategory
  );

  const sectionStyle: React.CSSProperties = {
    padding: '100px 10%',
    background: 'var(--bg-secondary)',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '60px',
    flexWrap: 'wrap',
    gap: '32px',
  };

  const titleAreaStyle: React.CSSProperties = {
    maxWidth: '500px',
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

  const tabsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '8px',
    background: 'var(--bg-primary)',
    padding: '6px',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
  };

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: '10px 20px',
    borderRadius: 'var(--radius-sm)',
    fontSize: '14px',
    fontWeight: 600,
    background: active ? 'var(--accent)' : 'transparent',
    color: active ? '#fff' : 'var(--text-secondary)',
    transition: 'var(--transition)',
  });

  const featuredProject = projects.find(p => p.featured);

  const featuredCardStyle: React.CSSProperties = {
    width: '100%',
    marginBottom: '60px',
    background: 'var(--gradient-1)',
    borderRadius: 'var(--radius-xl)',
    padding: '40px',
    display: 'flex',
    gap: '40px',
    alignItems: 'center',
    flexWrap: 'wrap',
    color: '#fff',
    boxShadow: 'var(--shadow-glow)',
  };

  const featuredContentStyle: React.CSSProperties = {
    flex: '1 1 50%',
    minWidth: '300px',
  };

  const featuredImageStyle: React.CSSProperties = {
    flex: '1 1 40%',
    minWidth: '300px',
    height: '300px',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: 'var(--radius-lg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '100px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.2)',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '32px',
  };

  return (
    <section id="projects" style={sectionStyle} ref={targetRef} className="reveal">
      <div style={headerStyle}>
        <div style={titleAreaStyle}>
          <h2 style={titleStyle}>Featured Projects</h2>
          <p style={subtitleStyle}>A collection of AI-powered applications and tools I've built recently.</p>
        </div>

        <div style={tabsStyle}>
          {categories.map((cat) => (
            <button
              key={cat}
              style={tabButtonStyle(activeCategory === cat)}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {activeCategory === 'All' && featuredProject && (
        <div style={featuredCardStyle}>
          <div style={featuredContentStyle}>
            <span style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.8 }}>Featured Project</span>
            <h3 style={{ fontSize: '42px', fontWeight: 800, margin: '16px 0' }}>{featuredProject.name}</h3>
            <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '32px', lineHeight: 1.6 }}>{featuredProject.description}</p>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '40px' }}>
              {featuredProject.tech.map(t => (
                <span key={t} style={{ padding: '6px 16px', background: 'rgba(255,255,255,0.2)', borderRadius: '100px', fontSize: '14px' }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a 
                href={featuredProject.link} 
                style={{ padding: '14px 28px', background: '#fff', color: 'var(--accent)', borderRadius: 'var(--radius-md)', fontWeight: 700 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a 
                href={featuredProject.github} 
                style={{ padding: '14px 28px', border: '1px solid #fff', color: '#fff', borderRadius: 'var(--radius-md)', fontWeight: 700 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div style={featuredImageStyle}>
            🚀
          </div>
        </div>
      )}

      <div style={gridStyle}>
        {filteredProjects.filter(p => p.id !== featuredProject?.id || activeCategory !== 'All').map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          #projects { padding: 60px 5%; }
          .featured-card { padding: 24px; }
        }
      `}</style>
    </section>
  );
}
