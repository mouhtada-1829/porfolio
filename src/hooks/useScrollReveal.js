import { useEffect, useRef, useState } from 'react';

/**
 * Custom Hook pour détecter quand un élément entre dans le champ de vision (viewport).
 * Utilise l'API native 'Intersection Observer'.
 */
export const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si l'élément est visible, on met l'état à true
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Une fois visible, on peut arrêter d'observer pour la performance
          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return [elementRef, isVisible];
};
