import { useEffect, useRef, useState } from "react";
import { Icon } from "../Icon/Icon";
import { nav, profile } from "../../data/content";
import { useActiveSection } from "../../hooks/useActiveSection";
import "./NavRail.css";

const SECTION_IDS = ["senguichet", ...nav.map((item) => item.id)];

function Brand({ onNavigate, label }) {
  return (
    <a
      className="rail__brand"
      href="#top"
      onClick={onNavigate}
      aria-label={label ?? `${profile.fullName} — retour en haut`}
    >
      <Icon name="bolt" size={18} className="rail__bolt" />
      <span>MMN.</span>
    </a>
  );
}

function NavLinks({ active, onNavigate }) {
  return (
    <ul className="rail__list">
      {nav.map((item) => {
        const isActive = active === item.id;

        return (
          <li key={item.id}>
            <a
              className={`rail__link${isActive ? " is-active" : ""}`}
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              onClick={onNavigate}
            >
              <span className="rail__label">{item.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function NavRail() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const active = useActiveSection(SECTION_IDS);
  const current = active === "senguichet" ? "projets" : active;

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 901px)");
    const handleChange = (event) => {
      if (event.matches) {
        setOpen(false);
      }
    };

    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previous = document.activeElement;
    const menu = menuRef.current;
    const closeButton = menu?.querySelector("[data-menu-close]");

    closeButton?.focus();
    document.body.classList.add("menu-open");

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !menu) {
        return;
      }

      const focusables = Array.from(
        menu.querySelectorAll('a[href], button:not([disabled])')
      );

      if (!focusables.length) {
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("menu-open");

      if (previous instanceof HTMLElement) {
        previous.focus();
      }
    };
  }, [open]);

  return (
    <>
      <aside className="rail">
        <div className="rail__top">
          <Brand />
          <button
            ref={toggleRef}
            className="rail__toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" size={20} />
            <span className="sr-only">Ouvrir le menu</span>
          </button>
        </div>

        <nav className="rail__nav" aria-label="Sections">
          <NavLinks active={current} />
        </nav>
      </aside>

      {open ? (
        <div
          id="mobile-menu"
          className="menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          ref={menuRef}
        >
          <div className="menu__head">
            <Brand onNavigate={closeMenu} label={`${profile.fullName} — fermer le menu`} />
            <button
              className="menu__close"
              type="button"
              data-menu-close
              onClick={closeMenu}
            >
              <Icon name="close" size={20} />
              <span className="sr-only">Fermer le menu</span>
            </button>
          </div>

          <nav aria-label="Sections">
            <NavLinks active={current} onNavigate={closeMenu} />
          </nav>

          <p className="menu__meta mono">
            {profile.location} · {profile.year}
          </p>
        </div>
      ) : null}
    </>
  );
}
