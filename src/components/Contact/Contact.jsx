import { Icon } from "../Icon/Icon";
import { profile } from "../../data/content";
import "./Contact.css";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "mail",
    external: false,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    icon: "linkedin",
    external: true,
  },
  {
    label: "GitHub",
    value: profile.githubLabel,
    href: profile.github,
    icon: "github",
    external: true,
  },
];

export function Contact() {
  return (
    <section
      className="section dark contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="wrap">
        <div className="section-head contact__head">
          <h2 className="section-title" id="contact-title">
            Brancher le circuit
          </h2>
          <p className="lede">
            Disponible pour un stage ou une alternance — Dakar, Sénégal.
          </p>
        </div>

        <ul className="contact__links">
          {links.map((link) => (
            <li key={link.label}>
              <a
                className="contact__link"
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                <span className="contact__icon" aria-hidden="true">
                  <Icon name={link.icon} size={20} />
                </span>
                <span className="contact__body">
                  <span className="contact__label mono">{link.label}</span>
                  <span className="contact__value">{link.value}</span>
                </span>
                <span className="contact__arrow" aria-hidden="true">
                  <Icon name="arrowUpRight" size={18} />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="contact__foot">
          <p className="contact__meta mono">
            {profile.location} · {profile.year}
          </p>
        </div>
      </div>
    </section>
  );
}
