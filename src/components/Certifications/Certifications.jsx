import { Icon } from "../Icon/Icon";
import { certifications } from "../../data/content";
import "./Certifications.css";

export function Certifications() {
  const total = certifications.reduce((sum, group) => sum + group.items.length, 0);
  const formatted = String(total).padStart(2, "0");

  return (
    <section
      className="section certifications"
      id="certifications"
      aria-labelledby="certifications-title"
    >
      <div className="wrap">
        <div className="section-head certifications__head">
          <div className="certifications__heading">
            <h2 className="section-title" id="certifications-title">
              Certifications
            </h2>
            <p className="lede">Des fondamentaux du logiciel aux pratiques de sécurité.</p>
          </div>
          <span className="certifications__count mono">
            {formatted} / {formatted} validées
          </span>
        </div>

        <div className="certifications__grid">
          {certifications.map((group) => (
            <div className="cert-group" key={group.group}>
              <h3 className="cert-group__title mono">{group.group}</h3>
              <ul className="cert-list">
                {group.items.map((item) => (
                  <li className="cert" key={item.name}>
                    <span className="cert__check" aria-hidden="true">
                      <Icon name="check" size={15} />
                    </span>
                    <span className="cert__main">
                      <span className="cert__name">{item.name}</span>
                      <span className="cert__issuer mono">{item.issuer}</span>
                    </span>
                    <span className="cert__tag mono">Validé</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
