import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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
          <li><a href="#about" onClick={closeMenu}>À propos</a></li>
          <li><a href="#experience" onClick={closeMenu}>Expérience</a></li>
          <li><a href="#skills" onClick={closeMenu}>Compétences</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projets</a></li>
          <li><a href="#contact" className="btn-contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;
