import { useEffect, useState } from 'react';
import './CursorGlow.css';

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="cursor-glow-wrapper" style={{ '--x': `${pos.x}px`, '--y': `${pos.y}px` }}>
      <div className="grid-overlay" />
      <div className="cursor-glow" />
    </div>
  );
};

export default CursorGlow;
