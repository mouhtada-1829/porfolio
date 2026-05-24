import { useEffect, useRef, useState, createContext, useContext } from 'react';
import './RevealSection.css';

const RevealContext = createContext(false);

export const useReveal = () => useContext(RevealContext);

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

const RevealSection = ({ children, id, className = '', animation = 'fade-up' }) => {
  const [ref, isVisible] = useScrollReveal(0.05);

  return (
    <RevealContext.Provider value={isVisible}>
      <section
        id={id}
        ref={ref}
        className={`reveal-section reveal-${animation} ${isVisible ? 'is-visible' : ''} ${className}`}
      >
        {children}
      </section>
    </RevealContext.Provider>
  );
};

export default RevealSection;
