import RevealSection from '../RevealSection/RevealSection';
import './Projects.css';

const projects = [
  {
    title: 'TranspoBot',
    description: 'Système de gestion de transport urbain nouvelle génération avec assistant IA omnicanal (WhatsApp, Telegram, Web). Architecture complète alliant bases de données relationnelles avancées, chatbot intelligent Text-to-SQL (Gemini 2.0), dashboard temps réel avec cartographie Leaflet/OSRM, et déploiement Docker automatisé.',
    tags: ['FastAPI', 'React', 'Python', 'MySQL', 'IA', 'Docker'],
    repo: 'Daba004/TranspoBot',
    color: '#0ea5e9',
  },
  {
    title: 'SenSanté',
    description: 'Plateforme de santé communautaire intelligente connectant patients et professionnels de santé. Authentification sécurisée, base de données PostgreSQL optimisée avec Prisma, et agent IA basé sur Llama 3 pour l\'assistance médicale personnalisée.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'IA'],
    repo: 'Manse210/sensante',
    color: '#10b981',
  },
  {
    title: 'KHINTS',
    description: 'Application mobile cross-platform pour le partage de documents pédagogiques entre étudiants de l\'École Supérieure Polytechnique de Dakar. Architecture hybride avec Dart/Flutter et modules natifs pour iOS et Android.',
    tags: ['Flutter', 'Dart', 'C++', 'Mobile', 'iOS', 'Android'],
    repo: 'Manse210/KHINTS',
    color: '#f59e0b',
  },
  {
    title: 'Gestion de Bibliothèque',
    description: 'Application Laravel complète avec système d\'authentification, gestion CRUD des ouvrages et adhérents, suivi des emprunts en temps réel, et interface administrateur intuitive. Architecture MVC robuste avec base de données relationnelle.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap'],
    repo: 'Manse210/Bibliotheque',
    color: '#8b5cf6',
  },
  {
    title: 'Projet Sudoku',
    description: 'Application Java avec algorithmes avancés de génération et résolution de grilles de Sudoku. Architecture orientée objet, interface interactive, et documentation technique complète.',
    tags: ['Java', 'POO', 'Algorithmes'],
    repo: 'harouna-diarra/projet-sudoku',
    color: '#ef4444',
  },
  {
    title: 'Gestion de Matériel — COREX',
    description: 'Application web professionnelle développée en stage chez COREX pour la gestion complète du matériel et des affectations. Analyse fonctionnelle, modélisation BD et interface utilisateur responsive en PHP/MySQL.',
    tags: ['PHP', 'MySQL', 'CRUD', 'Stage'],
    repo: 'mouhtada-1829/projet_entreprise_corex',
    color: '#64748b',
  },
];

const Projects = () => {
  return (
    <RevealSection id="projects" className="projects" animation="flip">
      <div className="projects-container">
        <h2 className="section-title">
          Mes <span className="text-gradient">Projets</span>
        </h2>
        <p className="section-subtitle">
          Des projets concrets qui démontrent mon savoir-faire technique
        </p>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={`https://github.com/${project.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card stagger-dramatic"
              style={{ '--accent': project.color }}
            >
              <div className="project-card-header">
                <div className="project-folder-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <svg className="project-external-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </RevealSection>
  );
};

export default Projects;
