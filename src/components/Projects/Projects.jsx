import { useRef } from "react";
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
  const listRef = useRef(null);
  const probeRef = useRef(null);
  const canHover = useRef(
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );

  const moveProbe = (event) => {
    const probe = probeRef.current;
    const list = listRef.current;

    if (!probe || !list) {
      return;
    }

    const rect = list.getBoundingClientRect();
    probe.style.setProperty("--probe-x", `${event.clientX - rect.left}px`);
    probe.style.setProperty("--probe-y", `${event.clientY - rect.top}px`);
  };

  const handleEnter = (event, project, index) => {
    const probe = probeRef.current;

    if (!probe || !canHover.current) {
      return;
    }

    probe.querySelector("[data-probe-index]").textContent = String(
      index + 1
    ).padStart(2, "0");
    probe.querySelector("[data-probe-name]").textContent = project.name;
    probe.querySelector("[data-probe-stack]").textContent = project.stack;
    moveProbe(event);
    probe.classList.add("is-on");
  };

  const handleLeave = () => {
    probeRef.current?.classList.remove("is-on");
  };

  return (
    <section className="section projects" id="projets" aria-labelledby="projets-title">
      <div className="wrap">
        <div className="section-head projects__head">
          <div className="projects__heading">
            <h2 className="section-title" id="projets-title" data-reveal="soft">
              Autres projets
            </h2>
            <p
              className="lede"
              data-reveal="soft"
              style={{ "--reveal-i": 1 }}
            >
              Projets académiques et d'équipe — code public sur GitHub.
            </p>
          </div>
          <span className="projects__count mono" data-reveal style={{ "--reveal-i": 2 }}>
            06 projets
          </span>
        </div>

        <div className="projects__stage">
          <ul className="projects__list" ref={listRef}>
            {projects.map((project, index) => {
              const reveal = { "--reveal-i": Math.min(index, 5) };
              const handlers = project.repo
                ? {
                    onMouseEnter: (event) => handleEnter(event, project, index),
                    onMouseMove: moveProbe,
                    onMouseLeave: handleLeave,
                  }
                : {};

              return (
                <li key={project.name} data-reveal style={reveal}>
                  {project.repo ? (
                    <a
                      className="project__link"
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      {...handlers}
                    >
                      <ProjectContent project={project} />
                    </a>
                  ) : (
                    <div className="project__link project__link--static">
                      <ProjectContent project={project} />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="projects__probe" aria-hidden="true" ref={probeRef}>
            <div className="projects__probe-card">
              <span className="projects__probe-index mono" data-probe-index />
              <span className="projects__probe-name" data-probe-name />
              <span className="projects__probe-stack mono" data-probe-stack />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
