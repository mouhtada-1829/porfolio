import { useEffect, useState } from "react";
import "./Intro.css";

const STORAGE_KEY = "mmn-intro";

function hasPlayed() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function remember() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
    return true;
  } catch {
    return false;
  }
}

function shouldSkip() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return true;
  }

  return hasPlayed();
}

export function Intro() {
  const [visible, setVisible] = useState(() => !shouldSkip());
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!visible) {
      return undefined;
    }

    document.body.classList.add("intro-open");
    const hold = window.setTimeout(() => setLeaving(true), 1150);

    return () => {
      window.clearTimeout(hold);
      document.body.classList.remove("intro-open");
    };
  }, [visible]);

  useEffect(() => {
    if (!leaving) {
      return undefined;
    }

    const exit = window.setTimeout(() => {
      remember();
      setVisible(false);
    }, 660);

    return () => window.clearTimeout(exit);
  }, [leaving]);

  useEffect(() => {
    if (!visible) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setLeaving(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [visible]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`intro${leaving ? " is-leaving" : ""}`}
      aria-hidden="true"
      onClick={() => setLeaving(true)}
    >
      <div className="intro__inner">
        <span className="intro__top">
          <span className="intro__led" />
          <span className="intro__label mono">Salle des relais</span>
        </span>
        <span className="intro__wire">
          <span className="intro__spark" />
        </span>
        <span className="intro__name">MMN.</span>
        <span className="intro__meta mono">Mise sous tension</span>
      </div>
    </div>
  );
}
