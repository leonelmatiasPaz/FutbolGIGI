import React from 'react'
import { Link } from 'react-router-dom'
import leagues from '../data/leagues.json'

export default function Leagues(){
  return (
    <section>
      <h2>Ligas</h2>
      <h3>El formato liga es un sistema de competencia en el que todos los equipos se enfrentan entre sí, generalmente jugando partidos de local y visitante. Cada resultado otorga puntos (3 por ganar, 1 por empatar y 0 por perder), y al finalizar la temporada el equipo con más puntos es el campeón. Es un formato que premia la regularidad y el rendimiento sostenido a lo largo del torneo.</h3>
      <div className="row">
        {leagues.map(l=>(
          <Link to={`/league/${l.id}`} key={l.id} className="card col" style={{textDecoration:'none', color:'inherit'}}>
            <img src={l.shield} alt={l.name} className="img-rect" />
            <h3>{l.name}</h3>
            <div className="small">{l.country}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
