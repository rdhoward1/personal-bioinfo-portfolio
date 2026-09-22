import { useState } from "react";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu}>
        <span className="initials">RH</span>
        <span>Rachel Howard</span>
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={menuOpen ? "navigation open" : "navigation"}>
        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#expertise" onClick={closeMenu}>
          Expertise
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#publications" onClick={closeMenu}>
          Publications
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navigation;