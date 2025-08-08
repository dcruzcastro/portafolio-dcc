import React, { useState } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLink,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

import "../styles/Contacto.css";

const textos = {
  es: {
    titulo: "Contacto",
    lugar: "San José, Costa Rica",
    email: "dccsoftwaredevelopment@gmail.com",
    telefono: "+506 88860434",
    nombreLabel: "Nombre",
    emailLabel: "Correo electrónico",
    mensajeLabel: "Mensaje",
    nombrePlaceholder: "Tu nombre",
    emailPlaceholder: "tu@email.com",
    mensajePlaceholder: "Escribe tu mensaje aquí...",
    enviar: "Enviar",
    enviando: "Enviando...",
    exito: "Mensaje enviado correctamente. ¡Gracias!",
    error: "Error al enviar el mensaje. Intenta de nuevo.",
    ariaWhatsapp: "Chatear en WhatsApp",
    ariaGithub: "Perfil de Github",
    ariaLinkedin: "Perfil de Linkedin",
  },
  en: {
    titulo: "Contact",
    lugar: "San José, Costa Rica",
    email: "dccsoftwaredevelopment@gmail.com",
    telefono: "+506 88860434",
    nombreLabel: "Name",
    emailLabel: "Email",
    mensajeLabel: "Message",
    nombrePlaceholder: "Your name",
    emailPlaceholder: "your@email.com",
    mensajePlaceholder: "Write your message here...",
    enviar: "Send",
    enviando: "Sending...",
    exito: "Message sent successfully. Thank you!",
    error: "Error sending message. Please try again.",
    ariaWhatsapp: "Chat on WhatsApp",
    ariaGithub: "Github Profile",
    ariaLinkedin: "Linkedin Profile",
  },
};

const Contacto = ({ lang }) => {
  const t = textos[lang] || textos.es;

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [sending, setSending] = useState(false);
  const [resultMsg, setResultMsg] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setResultMsg(null);

    const serviceID = "service_ir2likb";
    const templateID = "template_z6f9ubq";
    const publicKey = "b2bMfOXRJI6QKm9iX";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setResultMsg(t.exito);
        setFormData({ nombre: "", email: "", mensaje: "" });
      })
      .catch(() => {
        setResultMsg(t.error);
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section id="contacto" className="contacto-section">
      <h2 className="titulo">{t.titulo}</h2>

      <div className="contacto-container">
        <img
          src={`${import.meta.env.BASE_URL}imagenes/contacto-banner.png`}
          alt={t.titulo}
          className="contacto-img"
        />

        <div className="info-contacto">
          <div className="info-item">
            <FaMapMarkerAlt className="icono" />
            <p>{t.lugar}</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="icono" />
            <p>{t.email}</p>
          </div>
          <div className="info-item">
            <FaPhone className="icono" />
            <p>{t.telefono}</p>
          </div>
          <div className="info-item">
            <FaLink className="icono" />
            <a
              href="https://wa.me/50688860434"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.ariaWhatsapp}
            >
              <FaWhatsapp className="icono" />
            </a>
            <a
              href="https://github.com/dcruzcastro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.ariaGithub}
            >
              <FaGithub className="icono" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-cruz-68a668350"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.ariaLinkedin}
            >
              <FaLinkedin className="icono" />
            </a>
          </div>
        </div>

        <form className="contacto-form" onSubmit={handleSubmit}>
          <label htmlFor="nombre">{t.nombreLabel}</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder={t.nombrePlaceholder}
          />

          <label htmlFor="email">{t.emailLabel}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder={t.emailPlaceholder}
          />

          <label htmlFor="mensaje">{t.mensajeLabel}</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            placeholder={t.mensajePlaceholder}
            rows="5"
          />

          <button type="submit" className="btn-enviar" disabled={sending}>
            {sending ? t.enviando : t.enviar}
          </button>
          {resultMsg && <p className="resultado-envio">{resultMsg}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contacto;
