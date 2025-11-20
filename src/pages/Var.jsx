import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Var(){
  const nav = useNavigate()
  return (
    <section>
      <button className="back-btn" onClick={()=>nav(-1)}>⬅ Volver</button>
      <h2>¿Qué es el VAR (Video Assistant Referee)?</h2>
      <p className="small">El VAR es un sistema de asistencia arbitral por video que ayuda al árbitro principal a corregir errores claros y obvios en decisiones críticas.</p>

      <div className="card" style={{display:'flex', gap:12}}>
        <div style={{flex:2}}>
          <h3>Objetivos del VAR</h3>
          <p className="small">Revisar decisiones relacionadas con goles, penales, tarjetas rojas directas y errores de identidad. No sustituye al árbitro; solo lo asiste en circunstancias concretas.</p>

          <h3>Cómo funciona</h3>
          <ol className="small">
            <li>El equipo de VAR sigue el partido desde una sala de monitorización con múltiples cámaras.</li>
            <li>Si detectan una posible jugada clara y obvia, notifican al árbitro principal.</li>
            <li>El árbitro puede aceptar la información del VAR o solicitar una revisión en el campo (On-Field Review).</li>
            <li>Tras la revisión, el árbitro toma la decisión final.</li>
          </ol>

          <h3>Criterios de intervención</h3>
          <p className="small">Solo interviene en: goles, penales, tarjetas rojas directas y selección equivocada de jugador para amonestar/expulsar.</p>

          <h3>Limitaciones y controversias</h3>
          <p className="small">Decisiones de interpretación (por ejemplo, intensidad de una falta) siguen generando debate. El VAR reduce errores claros pero no elimina la subjetividad.</p>

          <h3>Impacto en el juego</h3>
          <p className="small">Ha aumentado la precisión en decisiones críticas, pero también ha modificado el ritmo y la percepción de la continuidad del juego. Las competiciones ajustan protocolos para agilizar revisiones.</p>
        </div>

        <div style={{flex:1}}>
          <img src="/public/images/var/var.jpg" alt="Sala VAR" className="img-rect" />
          <p className="small center">Sala de monitorización</p>
          <img src="/public/images/var/revision.avif" alt="Revisión" className="img-rect" style={{marginTop:12}}/>
          <p className="small center">Proceso de revisión en campo</p>
        </div>
      </div>

      <div style={{marginTop:12}} className="card">
        <h3>Proceso paso a paso (ejemplo de incidente)</h3>
        <ol className="small">
          <li>Se marca un gol y el VAR detecta posible fuera de juego en la jugada previa.</li>
          <li>VAR informa al árbitro y recomienda revisión.</li>
          <li>Árbitro realiza la revisión en un monitor y confirma o anula el gol.</li>
        </ol>
      </div>
    </section>
  )
}
