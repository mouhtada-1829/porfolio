import { Icon } from "../Icon/Icon";
import { projects } from "../../data/content";
import "./Projects.css";

function ProjectContent({ project }) {
  return (
    <>
      <div className="project__main">
        <h3 className="project__name">{project.name}</h3>
        <p className="project__description">{project.description}</p>
      </div>
      <div className="project__meta">
        <span className="project__tag mono">{project.tag}</span>
        <span className="project__stack mono">{project.stack}</span>
        {project.repo ? (
          <span className="project__arrow" aria-hidden="true">
            <Icon name="arrowUpRight" size={18} />
          </span>
        ) : null}
      </div>
    </>
  );
}

export function Projects() {
  return (
    <section className="section projects" id="projets" aria-labelledby="projets-title">
      <div className="wrap">
        <div className="section-head projects__head">
          <div className="projects__heading">
            <h2 className="section-title" id="projets-title">
              Autres projets
            </h2>
            <p className="lede">Projets académiques et d'équipe — code public sur GitHub.</p>
          </div>
          <span className="projects__count mono">06 projets</span>
        </div>

        <ul className="projects__list">
          {projects.map((project) => (
            <li key={project.name}>
              {project.repo ? (
                <a
                  className="project__link"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ProjectContent project={project} />
                </a>
              ) : (
                <div className="project__link project__link--static">
                  <ProjectContent project={project} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
