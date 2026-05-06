"use client";

import React, { useState, useEffect } from 'react';
import { personalInfo } from '../lib/data';

const codeSnippets = [
  {
    title: "rag_pipeline.py",
    code: `def query_rag(question):
    vector_db = Pinecone.load()
    context = vector_db.search(question)
    response = Gemini.generate(
        prompt=question,
        context=context
    )
    return response`
  },
  {
    title: "gemini_api.ts",
    code: `export async function getAIResponse(prompt) {
  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash" 
  });
  const result = await model.generateContent(prompt);
  return result.response.text();
}`
  },
  {
    title: "api/route.ts",
    code: `export async function POST(req: Request) {
  const { messages } = await req.json();
  const stream = await OpenAIStream(messages);
  return new StreamingTextResponse(stream);
}`
  }
];

export default function Hero() {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Full Stack Developer",
    "AI Engineer",
    "Chatbot Builder",
    "Problem Solver"
  ];

  useEffect(() => {
    const snippetInterval = setInterval(() => {
      setSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 5000);
    return () => clearInterval(snippetInterval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        if (displayText.length === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '0 10%',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '80px',
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    gap: '40px',
    flexWrap: 'wrap',
  };

  const leftSideStyle: React.CSSProperties = {
    flex: '1 1 60%',
    minWidth: '320px',
  };

  const rightSideStyle: React.CSSProperties = {
    flex: '1 1 35%',
    minWidth: '320px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 12px',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: '100px',
    fontSize: '14px',
    color: 'var(--text-secondary)',
    marginBottom: '24px',
  };

  const dotStyle: React.CSSProperties = {
    width: '8px',
    height: '8px',
    background: 'var(--success)',
    borderRadius: '50%',
    boxShadow: '0 0 10px var(--success)',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: 'clamp(40px, 5vw, 64px)',
    fontWeight: 800,
    lineHeight: 1.1,
    marginBottom: '24px',
  };

  const subtextStyle: React.CSSProperties = {
    fontSize: 'clamp(16px, 2vw, 20px)',
    color: 'var(--text-secondary)',
    maxWidth: '600px',
    marginBottom: '40px',
  };

  const btnGroupStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
    marginBottom: '60px',
  };

  const primaryBtnStyle: React.CSSProperties = {
    padding: '16px 32px',
    background: 'var(--accent)',
    color: '#fff',
    borderRadius: 'var(--radius-md)',
    fontWeight: 600,
    fontSize: '16px',
    boxShadow: 'var(--shadow-glow)',
  };

  const outlineBtnStyle: React.CSSProperties = {
    padding: '16px 32px',
    border: '1px solid var(--border-color)',
    color: 'var(--text-primary)',
    borderRadius: 'var(--radius-md)',
    fontWeight: 600,
    fontSize: '16px',
  };

  const statsRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '40px',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '32px',
  };

  const statItemStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  };

  const statValueStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'var(--text-primary)',
  };

  const statLabelStyle: React.CSSProperties = {
    fontSize: '14px',
    color: 'var(--text-muted)',
  };

  const editorStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '500px',
    background: 'var(--bg-card)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--border-color)',
    overflow: 'hidden',
    boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
    position: 'relative',
    zIndex: 2,
  };

  const editorHeaderStyle: React.CSSProperties = {
    height: '40px',
    background: 'var(--bg-secondary)',
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    gap: '8px',
  };

  const dotBtnStyle = (color: string): React.CSSProperties => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: color,
  });

  const tabStyle: React.CSSProperties = {
    background: 'var(--bg-card)',
    padding: '8px 16px',
    fontSize: '12px',
    color: 'var(--text-secondary)',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
    marginLeft: '10px',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    borderBottom: '2px solid var(--accent)',
  };

  const codeAreaStyle: React.CSSProperties = {
    padding: '24px',
    fontSize: '14px',
    fontFamily: 'monospace',
    color: 'var(--text-primary)',
    minHeight: '250px',
    whiteSpace: 'pre',
  };

  const floatingBadgeStyle = (top: string, left: string, delay: string): React.CSSProperties => ({
    position: 'absolute',
    top,
    left,
    padding: '8px 16px',
    background: 'rgba(26, 26, 36, 0.8)',
    backdropFilter: 'blur(4px)',
    border: '1px solid var(--border-color)',
    borderRadius: '100px',
    fontSize: '12px',
    fontWeight: 600,
    zIndex: 3,
    animation: `float 4s ease-in-out infinite ${delay}`,
  });

  return (
    <section id="hero" style={containerStyle}>
      {/* Subtle Background Mesh */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '50%',
        height: '50%',
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        zIndex: 0,
        filter: 'blur(60px)',
      }} />

      <div style={contentStyle}>
        <div style={leftSideStyle} className="animate-fadeInUp">
          <div style={badgeStyle}>
            <div style={dotStyle} />
            Available for Freelance
          </div>

          <h1 style={headingStyle}>
            Building Intelligent<br />
            Web Applications<br />
            with <span style={{ background: 'var(--gradient-1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI</span>
          </h1>

          <div style={{ fontSize: '24px', fontWeight: 500, marginBottom: '20px', height: '36px' }}>
            {displayText}<span style={{ borderRight: '2px solid var(--accent)', marginLeft: '2px', animation: 'shimmer 1s infinite' }}></span>
          </div>

          <p style={subtextStyle}>
            Full Stack Developer specializing in AI-powered applications. I build products that combine beautiful UI with powerful AI backends.
          </p>

          <div style={btnGroupStyle}>
            <a href="#projects" style={primaryBtnStyle}>View My Work</a>
            <a href="/resume.pdf" style={outlineBtnStyle}>Download CV</a>
          </div>

          <div style={statsRowStyle}>
            <div style={statItemStyle}>
              <span style={statValueStyle}>10+</span>
              <span style={statLabelStyle}>Projects</span>
            </div>
            <div style={statItemStyle}>
              <span style={statValueStyle}>3+</span>
              <span style={statLabelStyle}>Years Exp</span>
            </div>
            <div style={statItemStyle}>
              <span style={statValueStyle}>5+</span>
              <span style={statLabelStyle}>Happy Clients</span>
            </div>
          </div>
        </div>

        <div style={rightSideStyle} className="hero-right">
          <div style={editorStyle}>
            <div style={editorHeaderStyle}>
              <div style={dotBtnStyle('#ff5f56')} />
              <div style={dotBtnStyle('#ffbd2e')} />
              <div style={dotBtnStyle('#27c93f')} />
              <div style={tabStyle}>{codeSnippets[snippetIndex].title}</div>
            </div>
            <div style={codeAreaStyle}>
              {codeSnippets[snippetIndex].code.split('\n').map((line, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px' }}>
                  <span style={{ color: 'var(--text-muted)', width: '20px', textAlign: 'right' }}>{i + 1}</span>
                  <span style={{ color: line.includes('def') || line.includes('async') || line.includes('import') ? '#c678dd' : 
                                      line.includes('return') || line.includes('const') ? '#c678dd' :
                                      line.includes('"') ? '#98c379' :
                                      line.includes('(') ? '#61afef' : 'var(--text-primary)' }}>
                    {line}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Badges */}
          <div style={floatingBadgeStyle('10%', '-5%', '0s')}>React</div>
          <div style={floatingBadgeStyle('60%', '-10%', '1s')}>Python</div>
          <div style={floatingBadgeStyle('80%', '40%', '2s')}>Next.js</div>
          <div style={floatingBadgeStyle('20%', '85%', '1.5s')}>AI</div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .hero-right { display: none !important; }
          #hero { padding: 120px 5% 60px; text-align: center; }
          .animate-fadeInUp { display: flex; flex-direction: column; align-items: center; }
        }
      `}</style>
    </section>
  );
}
