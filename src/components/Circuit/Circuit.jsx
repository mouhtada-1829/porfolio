import { useState } from "react";
import { circuit } from "../../data/content";
import "./Circuit.css";

export function Circuit() {
  const [active, setActive] = useState(0);
  const node = circuit[active];

  return (
    <div className="circuit" role="group" aria-label="Circuit du produit Senguichet">
      <div className="circuit__track" aria-hidden="true">
        <span className="circuit__pulse" />
      </div>

      <ol className="circuit__nodes">
        {circuit.map((item, index) => {
          const isActive = index === active;

          return (
            <li className="circuit__node" key={item.id} style={{ "--i": index }}>
              <button
                className={`circuit__button${isActive ? " is-active" : ""}`}
                type="button"
                aria-pressed={isActive}
                aria-controls="circuit-readout"
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
