import { useEffect, useRef, useState } from "react";
import { circuit } from "../../data/content";
import "./Circuit.css";

export function Circuit() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const listRef = useRef(null);
  const node = circuit[active];

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return undefined;
    }

    const measure = () => {
      track.style.setProperty(
        "--pulse-travel",
        `${Math.max(track.clientWidth - 6, 0)}px`
      );
    };

    measure();

    if (typeof ResizeObserver === "undefined") {
      return undefined;
    }

    const observer = new ResizeObserver(measure);
    observer.observe(track);

    return () => observer.disconnect();
  }, []);

  const handleKeyDown = (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
      return;
    }

    event.preventDefault();

    const step = event.key === "ArrowRight" ? 1 : -1;
    const next = (active + step + circuit.length) % circuit.length;

    setActive(next);
    listRef.current?.querySelectorAll(".circuit__button")[next]?.focus();
  };

  return (
    <div className="circuit" role="group" aria-label="Circuit du produit Senguichet">
      <div className="circuit__track" ref={trackRef} aria-hidden="true">
        <span className="circuit__pulse" />
      </div>

      <ol className="circuit__nodes" ref={listRef} onKeyDown={handleKeyDown}>
        {circuit.map((item, index) => {
          const isActive = index === active;

          return (
            <li className="circuit__node" key={item.id} style={{ "--i": index }}>
              <button
                className={`circuit__button${isActive ? " is-active" : ""}`}
                type="button"
                aria-pressed={isActive}
                aria-controls="circuit-readout"
                tabIndex={isActive ? 0 : -1}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
              >
                <span className="circuit__port" aria-hidden="true" />
                <span className="circuit__label mono">{item.label}</span>
                <span className="circuit__meta mono">{item.meta}</span>
              </button>
            </li>
          );
        })}
      </ol>

      <p className="circuit__readout" id="circuit-readout" aria-live="polite">
        <span className="circuit__readout-index mono" key={`index-${node.id}`}>
          {node.index}
        </span>
        <span className="circuit__readout-text" key={node.id}>
          {node.detail}
        </span>
      </p>
    </div>
  );
}
