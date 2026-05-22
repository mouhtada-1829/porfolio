import { useEffect, useRef, useState } from 'react';
import './RevealSection.css';

const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

const RevealSection = ({ children, id, className = '' }) => {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section
      id={id}
      ref={ref}
      className={`reveal-section ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </section>
  );
};

export default RevealSection;
