import { useScrollReveal } from '../../hooks/useScrollReveal';
import './RevealSection.css';

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
