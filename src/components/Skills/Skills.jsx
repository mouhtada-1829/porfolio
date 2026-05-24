import { useState, useRef, useEffect } from 'react';
import RevealSection from '../RevealSection/RevealSection';
import './Skills.css';

const CodeIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const TerminalIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const LightbulbIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
  </svg>
);

const skillCategories = [
  {
    title: 'Développement Web & logiciel',
    icon: <CodeIcon />,
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
    icon: <ShieldIcon />,
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
    icon: <TerminalIcon />,
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
    icon: <LightbulbIcon />,
    skills: [
      { name: 'Travail d\'équipe & Collaboration', level: 92 },
      { name: 'Résolution de problèmes complexes', level: 88 },
      { name: 'Communication technique', level: 82 },
      { name: 'Adaptabilité & Apprentissage continu', level: 90 },
      { name: 'Agile / Scrum', level: 75 },
    ]
  },
];

const SkillBar = ({ name, level, visible }) => {
  const [hovered, setHovered] = useState(false);

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

const SkillCategory = ({ cat, idx }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div key={idx} ref={ref} className="skill-category stagger-item" style={{ '--s-index': idx }}>
      <div className="skill-category-header">
        <span className="skill-category-icon">{cat.icon}</span>
        <h3>{cat.title}</h3>
      </div>
      <div className="skill-bars">
        {cat.skills.map((skill, i) => (
          <SkillBar key={i} name={skill.name} level={skill.level} visible={visible} />
        ))}
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
            <SkillCategory key={idx} cat={cat} idx={idx} />
          ))}
        </div>
      </div>
    </RevealSection>
  );
};

export default Skills;
