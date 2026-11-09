import { profile } from "../../data/content";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer dark">
      <div className="wrap footer__inner">
        <p className="footer__name">{profile.fullName}</p>
        <p className="footer__meta mono">
          © {profile.year} · Fait à Dakar
        </p>
        <nav className="footer__links" aria-label="Liens">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </nav>
      </div>
    </footer>
  );
}
