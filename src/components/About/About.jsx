import RevealSection from '../RevealSection/RevealSection';
import './About.css';

const About = () => {
  const stats = [
    { number: 'L3', label: 'Génie Logiciel' },
    { number: 'L2', label: 'Cybersécurité' },
    { number: '3+', label: 'Projets Clés' }
  ];

  return (
    <RevealSection id="about" className="about" animation="fade-left">
      <div className="about-container">
        <div className="about-image">
          <div className="image-placeholder">
            <span className="code-icon">&lt;/&gt;</span>
          </div>
        </div>
        <div className="about-text">
          <h2 className="section-title">À propos de <span className="text-gradient">moi</span></h2>
          <p>
            Actuellement en 2e année de Licence en <strong>Cybersécurité</strong> et en 3e année de Licence en 
            <strong> Développement Logiciel</strong> à l'École Supérieure Polytechnique de Dakar.
          </p>
          <p>
            Passionné par le développement de solutions web robustes et sécurisées, je combine mes connaissances 
            en génie logiciel avec une approche rigoureuse de la sécurité.
          </p>
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item stagger-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
};

export default About;
