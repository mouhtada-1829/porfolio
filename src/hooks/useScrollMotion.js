import { useLayoutEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";
const PARALLAX_SELECTOR = "[data-parallax]";

export function useScrollMotion() {
  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduce.matches) {
      return undefined;
    }

    const root = document.documentElement;
    const reveals = Array.from(document.querySelectorAll(REVEAL_SELECTOR));
    const parallaxItems = Array.from(
      document.querySelectorAll(PARALLAX_SELECTOR)
    );
    const desktop = window.matchMedia("(min-width: 901px)");
    let frame = 0;

    root.classList.add("motion-armed");

    reveals.forEach((element) => {
      if (element.getBoundingClientRect().bottom < 0) {
        element.classList.add("is-in");
      }
    });

    const remaining = new Set(
      reveals.filter((element) => !element.classList.contains("is-in"))
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markRevealed(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    function markRevealed(element) {
      element.classList.add("is-in");
      remaining.delete(element);
      observer.unobserve(element);
    }

    function sweep() {
      if (!remaining.size) {
        return;
      }

      const limit = window.innerHeight * 0.92;

      remaining.forEach((element) => {
        const rect = element.getBoundingClientRect();

        if (rect.top < limit && rect.bottom > 0) {
          markRevealed(element);
        }
      });
    }

    remaining.forEach((element) => observer.observe(element));

    const paintParallax = () => {
      frame = 0;

      if (!parallaxItems.length) {
        return;
      }

      if (!desktop.matches) {
        parallaxItems.forEach((element) => {
          element.style.removeProperty("--parallax");
        });
        return;
      }

      const viewport = window.innerHeight;

      parallaxItems.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const speed = Number.parseFloat(element.dataset.parallax) || 24;
        const offset =
          ((rect.top + rect.height / 2 - viewport / 2) / viewport) * speed;

        element.style.setProperty("--parallax", `${offset.toFixed(2)}px`);
      });
    };

    const handleScroll = () => {
      sweep();

      if (!frame) {
        frame = window.requestAnimationFrame(paintParallax);
      }
    };

    sweep();
    paintParallax();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      root.classList.remove("motion-armed");
      reveals.forEach((element) => element.classList.remove("is-in"));
      parallaxItems.forEach((element) =>
        element.style.removeProperty("--parallax")
      );
    };
  }, []);
}
