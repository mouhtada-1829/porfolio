import { securityLayers } from "../../data/content";
import "./Security.css";

export function Security() {
  return (
    <section
      className="section dark security"
      id="securite"
      aria-labelledby="securite-title"
    >
      <div className="wrap">
        <div className="section-head security__head">
          <div className="security__heading">
            <h2 className="section-title" id="securite-title">
              Cybersécurité
            </h2>
            <p className="lede">
              La sécurité n'est pas une couche ajoutée : elle est dans le circuit.
            </p>
          </div>
          <span className="security__mark mono">4 couches</span>
        </div>

        <div className="security__grid">
          {securityLayers.map((layer, index) => (
            <article className="layer" key={layer.title} style={{ "--i": index }}>
              <div className="layer__top">
                <span className="status-led layer__led is-live" aria-hidden="true" />
                <h3 className="layer__title">{layer.title}</h3>
              </div>
              <p className="layer__lead">{layer.lead}</p>
              <ul className="layer__list">
                {layer.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
