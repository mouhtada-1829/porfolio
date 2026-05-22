import { useEffect, useState, useRef } from 'react';
import './CursorGlow.css';

const CursorGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isIdle, setIsIdle] = useState(false);
  const idleTimer = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // On met à jour la position
      setMousePos({ x: e.clientX, y: e.clientY });

      // On réinitialise l'état d'inactivité
      setIsIdle(false);

      // On nettoie le timer précédent
      if (idleTimer.current) clearTimeout(idleTimer.current);

      // On lance un nouveau timer : après 0.5s d'immobilité, on passe en mode idle
      idleTimer.current = setTimeout(() => {
        setIsIdle(true);
      }, 500);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  return (
    <div
      className={`cursor-glow-wrapper ${isIdle ? 'is-idle' : ''}`}
      style={{
        '--x': `${mousePos.x}px`,
        '--y': `${mousePos.y}px`
      }}
    >
      <div className="grid-overlay"></div>
      <div className="cursor-glow"></div>
    </div>
  );
};

export default CursorGlow;
