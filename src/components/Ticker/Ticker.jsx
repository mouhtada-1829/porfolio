import { tickerItems } from "../../data/content";
import "./Ticker.css";

function TickerGroup({ duplicate = false }) {
  return (
    <ul
      className="ticker__group"
      aria-hidden={duplicate ? "true" : undefined}
    >
      {tickerItems.map((item) => (
        <li className="ticker__item mono" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Ticker() {
  return (
    <div className="ticker" aria-hidden="true" data-reveal>
      <div className="ticker__track">
        <TickerGroup />
        <TickerGroup duplicate />
      </div>
    </div>
  );
}
