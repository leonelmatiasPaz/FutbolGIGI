import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="brand">FútbolGIGI</div>
      <ul className="nav-list">
        <li><NavLink to="/" end>Inicio</NavLink></li>
        <li><NavLink to="/players">Jugadores</NavLink></li>
        <li><NavLink to="/leagues">Ligas</NavLink></li>
        <li><NavLink to="/countries">Países</NavLink></li>
        <li><NavLink to="/copas-internacionales">Copas</NavLink></li>
        <li><NavLink to="/memotest">Memotest</NavLink></li>
        <li><NavLink to="/reglas">Reglas</NavLink></li>
        <li><NavLink to="/var">¿Qué es VAR?</NavLink></li>
        <li><NavLink to="/contacto">Contacto</NavLink></li>
      </ul>
    </nav>
  )
}
