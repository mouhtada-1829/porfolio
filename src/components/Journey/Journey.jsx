import { education, experience } from "../../data/content";
import "./Journey.css";

function Timeline({ title, entries, variant }) {
  return (
    <div className="journey__column">
      <h3 className="journey__title mono">{title}</h3>
      <ol className="timeline">
        {entries.map((entry) => {
          const heading = variant === "experience" ? entry.role : entry.title;

          return (
            <li className="timeline__item" key={`${entry.period}-${heading}`}>
              <span className="timeline__node" aria-hidden="true" />
              <span className="timeline__period mono">{entry.period}</span>
              <span className="timeline__role">{heading}</span>
              <span className="timeline__org">
                {entry.org} · {entry.place}
              </span>
              {entry.details ? (
                <span className="timeline__details">{entry.details}</span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function Journey() {
  return (
    <section className="section journey" id="parcours" aria-labelledby="parcours-title">
      <div className="wrap">
        <div className="section-head journey__head">
          <h2 className="section-title" id="parcours-title">
            Parcours
          </h2>
          <p className="lede">
            Formation et expérience, dans l'ordre du terrain.
          </p>
        </div>

        <div className="journey__grid">
          <Timeline title="Expérience" entries={experience} variant="experience" />
          <Timeline title="Formation" entries={education} variant="education" />
        </div>
      </div>
    </section>
  );
}
