import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contáctame</h2>
      <form>
        <input type="text" placeholder="Tu Nombre" />
        <input type="email" placeholder="Tu Email" />
        <textarea placeholder="Tu Mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
