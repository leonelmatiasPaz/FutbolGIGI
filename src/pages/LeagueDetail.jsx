import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import leagues from '../data/leagues.json'

export default function LeagueDetail(){
  const { id } = useParams()
  const navigate = useNavigate()
  const league = leagues.find(l=>l.id===id)
  if(!league) return <div>Liga no encontrada</div>
  return (
    <section>
      <button className="back-btn" onClick={()=>navigate(-1)}>⬅ Volver</button>
      <h2>{league.name}</h2>
      <div className="card">
        <img src={league.shield} alt={league.name} className="img-rect" />
        <div style={{marginTop:8}}><strong>Campeón actual:</strong> {league.campeon}</div>
        <div style={{marginTop:8}}>
          <strong>Equipos participantes</strong>
          <ul>
            {league.teams.map(t=> <li key={t}>{t}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
