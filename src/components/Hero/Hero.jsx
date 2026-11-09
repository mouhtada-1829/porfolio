import { Icon } from "../Icon/Icon";
import { Circuit } from "../Circuit/Circuit";
import { flagship, profile } from "../../data/content";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero__inner">
        <div className="hero__top">
          <div className="hero__plate">
            <h1 className="hero__name" id="hero-title">
              <span>{profile.firstName}</span>
              <span>{profile.lastName}</span>
            </h1>
            <p className="hero__role">{profile.role}</p>
            <p className="hero__school mono">{profile.school}</p>
            <span className="hero__screw hero__screw--tl" aria-hidden="true" />
            <span className="hero__screw hero__screw--tr" aria-hidden="true" />
            <span className="hero__screw hero__screw--bl" aria-hidden="true" />
            <span className="hero__screw hero__screw--br" aria-hidden="true" />
          </div>

          <div className="hero__status">
            <span className="hero__badge">
              <span className="status-led" aria-hidden="true" />
              {profile.availability}
            </span>
            <span className="hero__place mono">
              {profile.location} · {profile.year}
            </span>
          </div>
        </div>

        <div className="hero__circuit">
          <div className="hero__circuit-head">
            <span className="label">Senguichet — circuit produit</span>
            <span className="hero__circuit-line mono">Du paiement à la validation</span>
          </div>
          <Circuit />
          <p className="hero__flag mono">{flagship.kicker}</p>
        </div>

        <div className="hero__actions">
          <a className="btn" href="#senguichet">
            Voir la démo
            <Icon name="arrowDown" size={16} />
          </a>
          <a className="btn btn--ghost" href={profile.cv} download>
            Télécharger le CV
            <Icon name="download" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
