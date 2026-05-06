"use client";

import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  // Since we are dark by default, we just toggle the data-theme or similar if needed.
  // But the prompt says "Dark theme by default" and "inline styles ONLY".
  // For now, I'll just keep it as a placeholder icon since we are focusing on dark theme.
  
  return (
    <button
      style={{
        padding: '8px',
        borderRadius: 'var(--radius-sm)',
        background: 'var(--bg-card)',
        color: 'var(--text-primary)',
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--border-color)',
      }}
      aria-label="Toggle Theme"
    >
      🌙
    </button>
  );
}
