import RevealSection from '../RevealSection/RevealSection';
import './Experience.css';

const experiences = [
  {
    role: 'Stagiaire Développement Web',
    company: 'COREX',
    location: 'Rufisque',
    period: 'Stage de 45 jours',
    description: [
      'Conception et développement d\'une application web dynamique de gestion de matériel.',
      'Analyse des besoins fonctionnels.',
      'Mise en place d\'une logique de gestion des utilisateurs et affectations.'
    ]
  }
];

const Experience = () => {
  return (
    <RevealSection id="experience" className="experience" animation="fade-right">
      <div className="experience-container">
        <h2 className="section-title">
          Expérience <span className="text-gradient">Professionnelle</span>
        </h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-card stagger-item">
                <div className="timeline-header">
                  <h3 className="timeline-role">{exp.role}</h3>
                  <span className="timeline-company">{exp.company}</span>
                  <span className="timeline-location">{exp.location}</span>
                </div>
                <span className="timeline-period">{exp.period}</span>
                <ul className="timeline-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
};

export default Experience;
