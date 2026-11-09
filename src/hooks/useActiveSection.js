import { useEffect, useState } from "react";

const ROOT_MARGIN = "-35% 0px -55% 0px";
const THRESHOLDS = [0, 0.25, 0.5, 0.75, 1];

export function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!ids.length) {
      return undefined;
    }

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          setActive(visible[0].target.id);
          return;
        }

        const leaving = entries[0];

        if (leaving && leaving.boundingClientRect.top > 0) {
          setActive(null);
        }
      },
      { rootMargin: ROOT_MARGIN, threshold: THRESHOLDS }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
