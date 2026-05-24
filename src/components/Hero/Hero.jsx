import { useState, useEffect } from 'react';
import RevealSection from '../RevealSection/RevealSection';
import './Hero.css';

const roles = ['Génie Logiciel', 'Cybersécurité'];
const Typewriter = ({ texts }) => {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index, texts]);

  return <span className="typewriter-text">{display}<span className="typewriter-cursor">|</span></span>;
};

const Hero = () => {
  return (
    <RevealSection id="home" className="hero">
      <div className="hero-content">
        <div className="hero-badge">Portfolio — Étudiant Ingénieur</div>
        <h2 className="hero-subtitle">Bonjour, je suis</h2>
        <h1 className="hero-title">
          Mouhamadou Mouhtada <span className="text-gradient">NDIAYE</span>
        </h1>
        <p className="hero-description">
          Passionné par <Typewriter texts={roles} />, je conçois des solutions web robustes et sécurisées pour répondre aux défis de demain.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            Voir mes projets
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="/MouhamadouMouhtadaNdiaye-cv.pdf" className="btn-cv" download>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            CV
          </a>
          <a href="#about" className="btn-secondary">
            En savoir plus
          </a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </RevealSection>
  );
};

export default Hero;
