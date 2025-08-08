import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/SobreMi.css';

const SobreMi = ({ lang }) => {
  const lottieRef1 = useRef(null);      
  const lottieRefCV = useRef(null);     
  const lottieRefRocket = useRef(null); 

  useEffect(() => {
    AOS.init({ once: true });

    const observers = [];

    const createObserver = (ref) => {
      if (!ref.current) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (ref.current && typeof ref.current.play === 'function') {
            entry.isIntersecting ? ref.current.play() : ref.current.stop();
          }
        },
        { threshold: 0.4 }
      );
      observer.observe(ref.current);
      return observer;
    };

    observers.push(createObserver(lottieRef1));
    observers.push(createObserver(lottieRefRocket)); 

    return () => {
      observers.forEach((obs) => {
        if (obs && obs.disconnect) obs.disconnect();
      });
    };
  }, []);

  const handleMouseEnter = () => {
    if (lottieRefCV.current && typeof lottieRefCV.current.play === 'function') {
      lottieRefCV.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (lottieRefCV.current && typeof lottieRefCV.current.stop === 'function') {
      lottieRefCV.current.stop();
    }
  };

  const textos = {
    es: {
      nombre: "Daniel Cruz",
      descripcion:
        "Ingeniero en Software con enfoque en desarrollo full stack, capaz de implementar soluciones robustas utilizando tecnologías como Java, C#, C++, Node.js, HTML, React y SQL. Orientado a resultados, buenas prácticas de desarrollo y mejora continua.",
      cvTexto: "Descargar CV",
      cvLink: "documentos/CV Español.pdf",
    },
    en: {
      nombre: "Daniel Cruz",
      descripcion:
        "Software Engineer with a focus on full-stack development, capable of implementing robust solutions using technologies such as Java, C#, C++, Node.js, HTML, React, and SQL. Results-oriented, committed to best development practices and continuous improvement.",
      cvTexto: "Download CV",
      cvLink: "documentos/CV Inglés.pdf",
    },
  };

  const t = textos[lang] || textos.es; 

  return (
    <section id="sobre-mi" className="sobre-mi-section section container">
      <div className="contenido" data-aos="fade-up" data-aos-delay="300">
        <h2 className="titulo">{t.nombre}</h2>
        <p>{t.descripcion}</p>

        <div
          className="botones-cv"
          style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href={`${import.meta.env.BASE_URL}${t.cvLink}`}
            download
            className="btn-descargar"
          >
            {t.cvTexto}
          </a>

          <lottie-player
            ref={lottieRefCV}
            src={`${import.meta.env.BASE_URL}animaciones/cv.json`}
            background="transparent"
            speed="4"
            style={{ width: '110px', height: '100px' }}
            loop={false}
            autoplay={true}
          />
        </div>
      </div>

      <div
        className="animacion-rocket"
        data-aos="fade-left"
        data-aos-delay="500"
      >
        <lottie-player
          ref={lottieRefRocket}
          src={`${import.meta.env.BASE_URL}animaciones/rocket.json`}
          background="transparent"
          speed="1"
          style={{ width: '300px', height: '300px' }}
          loop
          autoplay={false}
        />
      </div>
    </section>
  );
};

export default SobreMi;
