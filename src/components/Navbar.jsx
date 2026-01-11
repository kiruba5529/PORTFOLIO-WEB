import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Kirubakaran</h2>

      {/* Burger */}
      <div
        className={open ? "burger toggle" : "burger"}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#about" onClick={closeMenu}>About</a>
        </li>
        <li>
          <a href="#skills" onClick={closeMenu}>Skills</a>
        </li>
        <li>
          <a href="#education" onClick={closeMenu}>Education</a>
        </li>
        <li>
          <a href="#projects" onClick={closeMenu}>Projects</a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
