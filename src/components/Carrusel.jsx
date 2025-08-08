import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaGithub } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/Carrusel.css";


const proyectosData = {
  es: [
    {
      id: 1,
      titulo: "HostalApp",
      descripcion:
        "Aplicación web para manejo de reservas de hospedaje, alimentación y turismo.",
      imagen: "../imagenes/proyecto1.png",
      repo: "https://github.com/dcruzcastro/HostalApp",
    },
    {
      id: 2,
      titulo: "AppUniversidad",
      descripcion: "Aplicación en consola para administrar los cursos de una Universidad.",
      imagen: "../imagenes/proyecto2.png",
      repo: "https://github.com/dcruzcastro/AppUniversidad",
    },
    {
      id: 3,
      titulo: "Centro Educativo",
      descripcion:
        "Proyecto de escritorio creado en Netbeans para manejo de cursos en un centro educativo.",
      imagen: "../imagenes/proyecto3.png",
      repo: "https://github.com/dcruzcastro/CentroEducativo",
    },
    {
      id: 4,
      titulo: "MultaPro",
      descripcion: "Aplicación web para manejo de multas de tránsito.",
      imagen: "../imagenes/proyecto4.png",
      repo: "https://github.com/dcruzcastro/MultaPro",
    },
    {
      id: 5,
      titulo: "Farmacia",
      descripcion: "Aplicación web para manejo de ventas de medicamentos",
      imagen: "../imagenes/proyecto5.png",
      repo: "https://github.com/dcruzcastro/FarmaciaCanaria",
    },
  ],
  en: [
    {
      id: 1,
      titulo: "HostalApp",
      descripcion:
        "Web application for managing lodging, food, and tourism reservations.",
      imagen: "../imagenes/proyecto1.png",
      repo: "https://github.com/dcruzcastro/HostalApp",
    },
    {
      id: 2,
      titulo: "UniversityApp",
      descripcion: "Console application to manage university courses.",
      imagen: "../imagenes/proyecto2.png",
      repo: "https://github.com/dcruzcastro/AppUniversidad",
    },
    {
      id: 3,
      titulo: "Educational Center",
      descripcion:
        "Desktop project created in Netbeans to manage courses at an educational center.",
      imagen: "../imagenes/proyecto3.png",
      repo: "https://github.com/dcruzcastro/CentroEducativo",
    },
    {
      id: 4,
      titulo: "MultaPro",
      descripcion: "Web application for traffic fine management.",
      imagen: "../imagenes/proyecto4.png",
      repo: "https://github.com/dcruzcastro/MultaPro",
    },
    {
      id: 5,
      titulo: "Pharmacy",
      descripcion: "Web application for managing medication sales.",
      imagen: "../imagenes/proyecto5.png",
      repo: "https://github.com/dcruzcastro/FarmaciaCanaria",
    },
  ],
};

const Carrusel = ({ lang }) => {
  const proyectos = proyectosData[lang] || proyectosData.es;

  return (
    <section id="proyectos" className="proyectos-section">
      <h2 className="titulo">{lang === 'en' ? 'Projects' : 'Proyectos'}</h2>

      <div className="slider-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {proyectos.map((proyecto, index) => (
            <SwiperSlide key={proyecto.id}>
              <div
                className="slide-card"
                style={{
                  backgroundColor:
                    index % 2 === 0
                      ? "var(--color-dark)"
                      : "var(--color-accent)",
                }}
              >
                <img
                  src={proyecto.imagen}
                  alt={`Imagen de ${proyecto.titulo}`}
                  className="slide-img"
                />
                <div className="slide-content">
                  <h3 className="slide-title">{proyecto.titulo}</h3>
                  <p className="slide-description">{proyecto.descripcion}</p>
                  <a
                    href={proyecto.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <FaGithub size={40} />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Carrusel;
