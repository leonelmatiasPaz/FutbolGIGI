import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import countries from '../data/countries.json'
import players from '../data/players.json'
import leagues from '../data/leagues.json'

export default function CountryDetail(){
  const { id } = useParams()
  const navigate = useNavigate()
  const country = countries.find(c=>c.id===id)
  if(!country) return <div>País no encontrado</div>
  const cPlayers = players.filter(p=>country.players.includes(p.id))
  const cLeagues = leagues.filter(l=>country.leagues.includes(l.id))
  return (
    <section>
      <button className="back-btn" onClick={()=>navigate(-1)}>⬅ Volver</button>
      <h2>{country.name}</h2>
      <div className="card">
        <div><strong>Años en el que salio campeon:</strong> {country.añocampeon}</div>
        <div><strong>cantidad de mundiales jugados:</strong> {country.mjugados}</div>
        <div style={{marginTop:8}}>
          <strong>Jugadores destacados</strong>
          <div className="row" style={{marginTop:8}}>
            {cPlayers.map(p=>(
              <div key={p.id} className="card col">
                <img src={p.image} alt={p.name} className="img-rect" />
                <div>{p.name}</div>
              </div>
            ))}
            {cPlayers.length===0 && <div className="small">Sin jugadores destacados en los datos de ejemplo.</div>}
          </div>
        </div>
      </div>
    </section>
  )
}
