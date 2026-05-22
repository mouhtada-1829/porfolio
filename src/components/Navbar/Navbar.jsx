import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="text-gradient">MN</span>
        </div>
        <ul className="navbar-links">
          <li><a href="#about">À propos</a></li>
          <li><a href="#experience">Expérience</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact" className="btn-contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;
