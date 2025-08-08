import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import SobreMi from './components/SobreMi';
import Hero from './components/Hero';
import Carrusel from './components/Carrusel';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ScrollToTop from "react-scroll-to-top";
import ScrollTopButton from './components/ScrollTopButton';


function App() {
  const [lang, setLang] = useState('es');

  const toggleLang = () => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  return (
    <>
      <Header lang={lang} toggleLang={toggleLang} />
      <main>
        <div id="inicio">
          <Hero />
        </div>

        <SobreMi lang={lang} />
        <Carrusel lang={lang} />
        <Contacto lang={lang} />
      </main>
      
      <Footer lang={lang} />
       <ScrollToTop className="mi-boton-scroll"
      />
      
    </>
  );
}

export default App;
