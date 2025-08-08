import React from "react";
import "../styles/Footer.css";

const texts = {
  es: {
    sobreMi: "Sobre mí",
    proyectos: "Proyectos",
    contacto: "Contacto",
    copy: "Todos los derechos reservados.",
  },
  en: {
    sobreMi: "About Me",
    proyectos: "Projects",
    contacto: "Contact",
    copy: "All rights reserved.",
  },
};

const Footer = ({ lang = "es" }) => {
  const t = texts[lang] || texts.es;

  return (
    <footer className="footer">
      <a href="#inicio" className="footer-logo">
       <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="footer-logo-img" />

        <span className="footer-logo-text">DCC</span>
      </a>
      <nav className="footer-nav">
        <ul className="footer-nav-links">
          <li><a href="#sobre-mi">{t.sobreMi}</a></li>
          <li><a href="#proyectos">{t.proyectos}</a></li>
          <li><a href="#contacto">{t.contacto}</a></li>
        </ul>
      </nav>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Daniel Cruz. {t.copy}</p>
    </footer>
  );
};

export default Footer;
