"use client";

import React, { useState } from 'react';
import { personalInfo } from '../lib/data';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

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

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '60px',
    flexWrap: 'wrap',
  };

  const leftSideStyle: React.CSSProperties = {
    flex: '1 1 35%',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  };

  const rightSideStyle: React.CSSProperties = {
    flex: '1 1 55%',
    minWidth: '320px',
  };

  const infoCardStyle: React.CSSProperties = {
    padding: '24px',
    background: 'var(--bg-card)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    transition: 'var(--transition)',
  };

  const iconCircleStyle: React.CSSProperties = {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    background: 'var(--bg-secondary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    color: 'var(--accent)',
  };

  const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const inputGroupStyle: React.CSSProperties = {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  };

  const inputStyle: React.CSSProperties = {
    flex: 1,
    minWidth: '240px',
    padding: '16px',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-md)',
    color: 'var(--text-primary)',
    fontSize: '15px',
    outline: 'none',
    transition: 'var(--transition)',
  };

  const textareaStyle: React.CSSProperties = {
    ...inputStyle,
    width: '100%',
    minHeight: '150px',
    resize: 'vertical',
  };

  const selectStyle: React.CSSProperties = {
    ...inputStyle,
    cursor: 'pointer',
  };

  const submitBtnStyle: React.CSSProperties = {
    padding: '16px 32px',
    background: 'var(--accent)',
    color: '#fff',
    borderRadius: 'var(--radius-md)',
    fontWeight: 700,
    fontSize: '16px',
    boxShadow: 'var(--shadow-glow)',
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
  };

  return (
    <section id="contact" style={sectionStyle} ref={targetRef} className="reveal">
      <div style={headerStyle}>
        <h2 style={titleStyle}>Let's Work Together</h2>
        <p style={subtitleStyle}>Have a project in mind? I'd love to hear about it.</p>
      </div>

      <div style={containerStyle}>
        <div style={leftSideStyle}>
          <div style={infoCardStyle}>
            <div style={iconCircleStyle}>✉️</div>
            <div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Email Me</div>
              <div style={{ fontWeight: 600 }}>{personalInfo.email}</div>
            </div>
          </div>
          <div style={infoCardStyle}>
            <div style={iconCircleStyle}>📍</div>
            <div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Location</div>
              <div style={{ fontWeight: 600 }}>{personalInfo.location}</div>
            </div>
          </div>
          <div style={infoCardStyle}>
            <div style={iconCircleStyle}>⚡</div>
            <div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Availability</div>
              <div style={{ fontWeight: 600, color: 'var(--success)' }}>Open to Work</div>
            </div>
          </div>
          <div style={{ ...infoCardStyle, background: 'var(--gradient-2)', color: '#fff', borderColor: 'transparent' }}>
            <div style={{ fontSize: '24px' }}>💬</div>
            <div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>Average Response</div>
              <div style={{ fontWeight: 600 }}>Within 24 Hours</div>
            </div>
          </div>
        </div>

        <div style={rightSideStyle}>
          {status === 'success' ? (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '20px', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--success)', padding: '40px' }}>
              <div style={{ fontSize: '60px', color: 'var(--success)' }}>✅</div>
              <h3 style={{ fontSize: '24px', fontWeight: 700 }}>Message Sent!</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out. I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form style={formStyle} onSubmit={handleSubmit}>
              <div style={inputGroupStyle}>
                <input type="text" placeholder="Your Name" required style={inputStyle} onFocus={(e) => e.target.style.borderColor = 'var(--accent)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'} />
                <input type="email" placeholder="Your Email" required style={inputStyle} onFocus={(e) => e.target.style.borderColor = 'var(--accent)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'} />
              </div>
              <div style={inputGroupStyle}>
                <select required style={selectStyle} defaultValue="" onFocus={(e) => e.target.style.borderColor = 'var(--accent)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}>
                  <option value="" disabled>Project Type</option>
                  <option value="web-app">Web Application</option>
                  <option value="ai-integration">AI Integration</option>
                  <option value="chatbot">Chatbot Development</option>
                  <option value="automation">Workflow Automation</option>
                  <option value="other">Other</option>
                </select>
                <select required style={selectStyle} defaultValue="" onFocus={(e) => e.target.style.borderColor = 'var(--accent)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}>
                  <option value="" disabled>Budget Range</option>
                  <option value="<500">&lt; $500</option>
                  <option value="500-2k">$500 - $2,000</option>
                  <option value="2k-5k">$2,000 - $5,000</option>
                  <option value="5k+">$5,000+</option>
                </select>
              </div>
              <textarea placeholder="Tell me about your project..." required style={textareaStyle} onFocus={(e) => e.target.style.borderColor = 'var(--accent)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}></textarea>
              <button type="submit" disabled={status === 'sending'} style={{ ...submitBtnStyle, opacity: status === 'sending' ? 0.7 : 1 }}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          #contact { padding: 60px 5%; }
        }
      `}</style>
    </section>
  );
}
