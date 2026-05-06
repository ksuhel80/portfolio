import React from 'react';
import { personalInfo, navLinks } from '../lib/data';

export default function Footer() {
  const footerStyle: React.CSSProperties = {
    padding: '80px 10% 40px',
    background: 'var(--bg-secondary)',
    borderTop: '1px solid var(--border-color)',
    textAlign: 'center',
  };

  const logoStyle: React.CSSProperties = {
    fontSize: '28px',
    fontWeight: 800,
    background: 'var(--gradient-1)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '12px',
    display: 'inline-block',
  };

  const taglineStyle: React.CSSProperties = {
    color: 'var(--text-secondary)',
    fontSize: '16px',
    maxWidth: '400px',
    margin: '0 auto 40px',
  };

  const navLinksStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '32px',
    marginBottom: '40px',
    flexWrap: 'wrap',
  };

  const socialRowStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '60px',
  };

  const socialIconStyle: React.CSSProperties = {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    transition: 'var(--transition)',
  };

  const copyrightStyle: React.CSSProperties = {
    color: 'var(--text-muted)',
    fontSize: '14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  };

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 16px',
    background: 'var(--bg-primary)',
    border: '1px solid var(--border-color)',
    borderRadius: '100px',
    fontSize: '12px',
    color: 'var(--success)',
    margin: '0 auto',
    width: 'fit-content',
  };

  return (
    <footer style={footerStyle}>
      <div style={logoStyle}>{personalInfo.name.split(' ')[0]}.AI</div>
      <p style={taglineStyle}>{personalInfo.tagline}</p>

      <div style={navLinksStyle}>
        {navLinks.map(link => (
          <a key={link.name} href={link.href} style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>
            {link.name}
          </a>
        ))}
      </div>

      <div style={socialRowStyle}>
        <a href={personalInfo.github} style={socialIconStyle}>GH</a>
        <a href={personalInfo.linkedin} style={socialIconStyle}>IN</a>
        {personalInfo.twitter && <a href={personalInfo.twitter} style={socialIconStyle}>TW</a>}
      </div>

      <div style={copyrightStyle}>
        <div style={badgeStyle}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--success)' }} />
          Available for freelance work
        </div>
        <p>© 2026 {personalInfo.name}. Built with Next.js and ❤️</p>
      </div>
    </footer>
  );
}
