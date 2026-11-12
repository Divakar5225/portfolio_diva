import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Research", "/research"],
  ["Expertise", "/skills"],
  ["Contact", "/contact"],
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    "site-nav-link" + (isActive ? " is-active" : "");
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <div className="section-container site-nav-inner">
          <NavLink to="/" className="brand" onClick={closeMenu} aria-label="Divakar Guru, home">
            <span className="brand-name">Divakar <span>Guru</span></span>
          </NavLink>

          <div className="site-nav-links">
            {links.map(([name, path]) => (
              <NavLink key={path} to={path} end={path === "/"} className={linkClass}>
                {name}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            className="site-menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-navigation" id="mobile-navigation">
            <div className="section-container mobile-navigation-links">
              {links.map(([name, path]) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  className={linkClass}
                  onClick={closeMenu}
                >
                  {name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;


