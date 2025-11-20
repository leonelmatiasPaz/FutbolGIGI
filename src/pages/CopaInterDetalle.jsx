import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import copas from '../data/copas.json'

export default function CopaInterDetalle(){
  const { id } = useParams()
  const navigate = useNavigate()
  const copa = copas.find(c=>c.id===id)
  if(!copa) return <div>Copa no encontrada</div>
  return (
    <section>
      <button className="back-btn" onClick={()=>navigate(-1)}>⬅ Volver</button>
      <h2>{copa.name}</h2>
      <div className="card">
        <img src={copa.image} alt={copa.name} className="img-rect" />
        <div style={{marginTop:8}}><strong>Historia</strong><p className="small">{copa.history}</p></div>
        <div style={{marginTop:8}}><strong>Campeones recientes</strong>
          <ul>{copa.winners.map(w=> <li key={w}>{w}</li>)}</ul>
        </div>
        <div style={{marginTop:8}}><strong>Máximos ganadores</strong>
          <ul>{copa.top_winners.map(t=> <li key={t.team}>{t.team} — {t.titles} títulos</li>)}</ul>
        </div>
      </div>
    </section>
  )
}
