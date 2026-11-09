import { Icon } from "../Icon/Icon";
import { VideoFrame } from "../VideoFrame/VideoFrame";
import { flagship } from "../../data/content";
import "./Senguichet.css";

export function Senguichet() {
  const [demo, mobile] = flagship.videos;

  return (
    <section
      className="section senguichet"
      id="senguichet"
      aria-labelledby="senguichet-title"
    >
      <div className="wrap">
        <div className="section-head senguichet__head">
          <div className="senguichet__heading">
            <h2 className="section-title" id="senguichet-title">
              Senguichet
            </h2>
            <p className="lede">{flagship.title}</p>
          </div>
          <span className="senguichet__status">
            <span className="status-led" aria-hidden="true" />
            {flagship.status} · {flagship.year}
          </span>
        </div>

        <div className="senguichet__main">
          <div className="senguichet__story">
            <p className="senguichet__context">{flagship.context}</p>
            <p className="senguichet__role">{flagship.role}</p>

            <dl className="spec">
              {flagship.spec.map((row) => (
                <div className="spec__row" key={row.term}>
                  <dt className="mono">{row.term}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>

            <ul className="senguichet__scope">
              {flagship.scope.map((item) => (
                <li key={item}>
                  <Icon name="check" size={15} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="senguichet__demo">
            <VideoFrame video={demo} featured />
          </div>
        </div>

        <div className="senguichet__secondary">
          <div className="senguichet__mobile">
            <VideoFrame video={mobile} portrait />
          </div>
        </div>

        <div className="senguichet__foot">
          <a className="link senguichet__contact" href="#contact">
            Discuter du projet
            <Icon name="arrowRight" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
