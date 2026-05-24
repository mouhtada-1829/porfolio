import { useState } from 'react';
import RevealSection, { useReveal } from '../RevealSection/RevealSection';
import './Skills.css';

const skillCategories = [
  {
    title: 'Développement Web & logiciel',
    icon: '<\/>',
    skills: [
      { name: 'React.js / Next.js', level: 80 },
      { name: 'PHP / Laravel', level: 82 },
      { name: 'JavaScript / TypeScript', level: 78 },
      { name: 'HTML5 / CSS3 / Tailwind', level: 90 },
      { name: 'Python / FastAPI', level: 70 },
      { name: 'Java / POO', level: 72 },
    ]
  },
  {
    title: 'Cybersécurité',
    icon: '🔒',
    skills: [
      { name: 'Analyse des Risques & Menaces', level: 78 },
      { name: 'Sécurité des Applications Web', level: 75 },
      { name: 'OWASP Top 10 & Bonnes Pratiques', level: 80 },
      { name: 'Cryptographie & Sécurité Réseau', level: 70 },
      { name: 'Audit & Conformité', level: 68 },
    ]
  },
  {
    title: 'DevOps & Infrastructure',
    icon: '⚡',
    skills: [
      { name: 'Git / GitHub / CI/CD', level: 85 },
      { name: 'Docker / Conteneurisation', level: 72 },
      { name: 'Linux (Administration)', level: 75 },
      { name: 'Base de données (MySQL/PostgreSQL)', level: 80 },
      { name: 'Déploiement Cloud (Railway, Vercel)', level: 70 },
    ]
  },
  {
    title: 'Soft Skills & Méthodologies',
    icon: '💡',
    skills: [
      { name: 'Travail d\'équipe & Collaboration', level: 92 },
      { name: 'Résolution de problèmes complexes', level: 88 },
      { name: 'Communication technique', level: 82 },
      { name: 'Adaptabilité & Apprentissage continu', level: 90 },
      { name: 'Agile / Scrum', level: 75 },
    ]
  },
];

const SkillBar = ({ name, level }) => {
  const [hovered, setHovered] = useState(false);
  const visible = useReveal();

  return (
    <div
      className="skill-bar"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="skill-bar-info">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-level">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill ${hovered ? 'is-hovered' : ''} ${visible ? 'is-visible' : ''}`}
          style={{ '--level': `${level}%` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <RevealSection id="skills" className="skills" animation="zoom">
      <div className="skills-container">
        <h2 className="section-title">
          Mes <span className="text-gradient">Compétences</span>
        </h2>
        <p className="section-subtitle">
          Un aperçu des technologies et domaines que je maîtrise
        </p>
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category stagger-item">
              <div className="skill-category-header">
                <span className="skill-category-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-bars">
                {cat.skills.map((skill, i) => (
                  <SkillBar key={i} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
};

export default Skills;
