"use client";

import React, { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../lib/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 5%',
    zIndex: 900,
    backgroundColor: scrolled ? 'rgba(10, 10, 15, 0.85)' : 'transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
    transition: 'var(--transition)',
  };

  const logoStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    background: 'var(--gradient-1)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    cursor: 'pointer',
  };

  const menuItemsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
  };

  const linkStyle = (id: string): React.CSSProperties => ({
    fontSize: '15px',
    fontWeight: 500,
    color: activeSection === id ? 'var(--accent)' : 'var(--text-secondary)',
    transition: 'var(--transition)',
    position: 'relative',
  });

  const hireMeBtnStyle: React.CSSProperties = {
    padding: '10px 24px',
    borderRadius: 'var(--radius-md)',
    background: 'var(--accent)',
    color: '#fff',
    fontWeight: 600,
    fontSize: '14px',
    boxShadow: 'var(--shadow-glow)',
  };

  const mobileToggleStyle: React.CSSProperties = {
    display: 'none',
    flexDirection: 'column',
    gap: '6px',
    cursor: 'pointer',
  };

  const mobileMenuStyle: React.CSSProperties = {
    position: 'fixed',
    top: '80px',
    left: 0,
    right: 0,
    background: 'var(--bg-secondary)',
    padding: '20px',
    display: isOpen ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '20px',
    borderBottom: '1px solid var(--border-color)',
    zIndex: 800,
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle} onClick={() => window.scrollTo(0, 0)}>
        {personalInfo.name.split(' ')[0]}
        <span style={{ color: 'var(--text-primary)', WebkitTextFillColor: 'initial' }}>.</span>
        AI
      </div>

      {/* Desktop Menu */}
      <div className="desktop-menu" style={menuItemsStyle}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            style={linkStyle(link.href.replace('#', ''))}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = activeSection === link.href.replace('#', '') ? 'var(--accent)' : 'var(--text-secondary)')}
          >
            {link.name}
          </a>
        ))}
        <a href="#contact" style={hireMeBtnStyle}>Hire Me</a>
      </div>

      {/* Mobile Toggle */}
      <div className="mobile-toggle" style={{ ...mobileToggleStyle, display: 'flex' }} onClick={() => setIsOpen(!isOpen)}>
        <div style={{ width: '25px', height: '2px', background: 'var(--text-primary)', transition: '0.3s', transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
        <div style={{ width: '25px', height: '2px', background: 'var(--text-primary)', transition: '0.3s', opacity: isOpen ? 0 : 1 }}></div>
        <div style={{ width: '25px', height: '2px', background: 'var(--text-primary)', transition: '0.3s', transform: isOpen ? 'rotate(-45deg) translate(6px, -7px)' : 'none' }}></div>
      </div>

      {/* Mobile Menu */}
      <div style={mobileMenuStyle}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            style={{ ...linkStyle(link.href.replace('#', '')), fontSize: '18px' }}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a href="#contact" style={{ ...hireMeBtnStyle, textAlign: 'center' }} onClick={() => setIsOpen(false)}>Hire Me</a>
      </div>

      <style jsx>{`
        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
