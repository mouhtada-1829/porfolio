import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (id) => activeSection === id ? 'is-active' : '';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <span className="text-gradient">MN</span>
        </a>
        <button
          className={`hamburger ${menuOpen ? 'is-active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
        <ul className={`navbar-links ${menuOpen ? 'is-open' : ''}`}>
          <li><a href="#about" className={isActive('about')} onClick={closeMenu}>À propos</a></li>
          <li><a href="#experience" className={isActive('experience')} onClick={closeMenu}>Expérience</a></li>
          <li><a href="#skills" className={isActive('skills')} onClick={closeMenu}>Compétences</a></li>
          <li><a href="#projects" className={isActive('projects')} onClick={closeMenu}>Projets</a></li>
          <li><a href="#contact" className={`btn btn-primary ${isActive('contact')}`} onClick={closeMenu} style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem', textTransform: 'none' }}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;
