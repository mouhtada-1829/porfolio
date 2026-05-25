import { useEffect, useState } from 'react';
import './CursorGlow.css';

const MODES = [
  { key: 'orbs', label: 'A', name: 'Orbes' },
  { key: 'glow', label: 'B', name: 'Lueur' },
  { key: 'gradient', label: 'C', name: 'Gradient' },
];

const CursorGlow = () => {
  const [mode, setMode] = useState('orbs');
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    if (mode !== 'glow') return;
    const handleMouseMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mode]);

  return (
    <>
      <div className={`bg-layer bg-${mode}`} style={{ '--x': `${pos.x}px`, '--y': `${pos.y}px` }}>
        {mode === 'orbs' && (
          <>
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />
            <div className="orb orb-4" />
          </>
        )}
      </div>

      <div className="bg-switcher">
        {MODES.map((m) => (
          <button
            key={m.key}
            className={`bg-switcher-btn ${mode === m.key ? 'active' : ''}`}
            onClick={() => setMode(m.key)}
          >
            {m.label}
            <span className="bg-switcher-label">{m.name}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default CursorGlow;
