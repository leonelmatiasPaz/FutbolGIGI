import React from 'react'
import players from '../data/players.json'

export default function Players(){
  return (
    <section>
      <h2>Jugadores destacados de la actualidad</h2>
      <div className="row">
        {players.map(p=>(
          <div key={p.id} className="card col">
            <img src={p.image} alt={p.name} className="img-rect" />
            <h3 style={{marginTop:8}}>{p.name}</h3>
            <div className="small">{p.country} • {p.position}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
