import React from 'react'
import './Footer.css'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container-inner">
        <div>
          <strong>FútbolGIGI</strong>
          <p className="small">Sigue las ligas, jugadores y copas. Contacto abajo.</p>
        </div>
        <div className="contact-summary">
          <div>Correo: contacto@FutbolGIGI.local</div>
          <div>whatsapp: +54 1122344292</div>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} FútbolGIGI</div>
    </footer>
  )
}
