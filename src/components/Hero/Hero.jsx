import RevealSection from '../RevealSection/RevealSection';
import './Hero.css';

const Hero = () => {
  return (
    <RevealSection id="home" className="hero">
      <div className="hero-content">
        <h2 className="hero-subtitle">Bonjour, je suis</h2>
        <h1 className="hero-title">Mouhamadou Mouhtada <span className="text-gradient">NDIAYE</span></h1>
        <p className="hero-description">
          Étudiant passionné en <strong>Génie Logiciel</strong> et <strong>Cybersécurité</strong>. 
          Je conçois des solutions web robustes et sécurisées pour répondre aux défis de demain.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">Voir mes projets</a>
          <a href="#about" className="btn-secondary">En savoir plus</a>
        </div>
      </div>
    </RevealSection>
  );
};

export default Hero;
