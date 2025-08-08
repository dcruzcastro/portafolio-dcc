import React from 'react';
import '../styles/Header.css';

export default function Header({ lang, toggleLang }) {
  return (
    <header className="header">
      <a href="#inicio" className="logo">
        <img src="/logo.png" alt="Logo" className="logo-img" />
        <span className="logo-text">DCC</span>
      </a>
      <div className="header-container">
        <nav>
          <ul className="nav-links">
            <li><a href="#sobre-mi">{lang === 'es' ? 'Sobre mí' : 'About Me'}</a></li>
            <li><a href="#proyectos">{lang === 'es' ? 'Proyectos' : 'Projects'}</a></li>
            <li><a href="#contacto">{lang === 'es' ? 'Contacto' : 'Contact'}</a></li>
            <button 
          className="btn-lang"
          onClick={toggleLang}
          aria-label="Toggle Language"
        >
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
          </ul>
        </nav>
        
      </div>
    </header>
  );
}
