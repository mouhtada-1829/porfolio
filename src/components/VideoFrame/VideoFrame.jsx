import { useId, useState } from "react";
import { Icon } from "../Icon/Icon";
import "./VideoFrame.css";

export function VideoFrame({ video, featured = false, portrait = false }) {
  const [failed, setFailed] = useState(false);
  const titleId = useId();
  const modifiers = [
    featured ? "video--featured" : "",
    portrait ? "video--portrait" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <figure
      className={`video${modifiers ? ` ${modifiers}` : ""}`}
      aria-labelledby={titleId}
    >
      <figcaption className="video__head">
        <span className="video__title" id={titleId}>
          {video.title}
        </span>
        <span className="video__meta mono">
          <span>{video.duration}</span>
          <a className="video__download" href={video.download} download>
            <Icon name="download" size={14} />
            Télécharger
          </a>
        </span>
      </figcaption>

      <div className="video__frame">
        {failed ? (
          <div className="video__fallback">
            <p>Ce format n'est pas lu par votre navigateur. La vidéo reste téléchargeable.</p>
            <a className="btn btn--ghost" href={video.download} download>
              Télécharger la vidéo
            </a>
          </div>
        ) : (
          <video
            className="video__player"
            controls
            preload="none"
            playsInline
            aria-label={video.label}
            onError={() => setFailed(true)}
          >
            <source src={video.src} type={video.type} />
          </video>
        )}
      </div>
    </figure>
  );
}
