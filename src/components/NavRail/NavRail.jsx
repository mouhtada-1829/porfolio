import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
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

function NavLinks({ active, onNavigate, ports = false }) {
  return (
    <ul className="rail__list">
      {nav.map((item, index) => {
        const isActive = active === item.id;

        return (
          <li key={item.id} style={{ "--i": index }}>
            <a
              className={`rail__link${isActive ? " is-active" : ""}`}
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              onClick={onNavigate}
            >
              {ports ? <span className="rail__port" aria-hidden="true" /> : null}
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
  const navRef = useRef(null);
  const active = useActiveSection(SECTION_IDS);
  const current = active === "senguichet" ? "projets" : active;

  const closeMenu = () => setOpen(false);

  const syncMarker = useCallback(() => {
    const navEl = navRef.current;

    if (!navEl) {
      return;
    }

    const link = navEl.querySelector(".rail__link.is-active");

    if (!link) {
      navEl.classList.remove("has-active");
      return;
    }

    navEl.style.setProperty(
      "--marker-y",
      `${link.offsetTop + link.offsetHeight / 2}px`
    );
    navEl.classList.add("has-active");
  }, []);

  useLayoutEffect(() => {
    syncMarker();
  }, [current, syncMarker]);

  useEffect(() => {
    const navEl = navRef.current;

    if (!navEl) {
      return undefined;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;

      navEl.style.setProperty("--progress", progress.toFixed(4));
    };

    const handleScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    const handleResize = () => {
      syncMarker();
      update();
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [syncMarker]);

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

        <nav className="rail__nav" aria-label="Sections" ref={navRef}>
          <span className="rail__track" aria-hidden="true">
            <span className="rail__track-fill" />
          </span>
          <span className="rail__marker" aria-hidden="true" />
          <NavLinks active={current} ports />
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
