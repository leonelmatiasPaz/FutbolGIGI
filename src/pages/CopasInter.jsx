import React from 'react'
import { Link } from 'react-router-dom'
import copas from '../data/copas.json'

export default function CopasInter(){
  return (
    <section>
      <h2>Copas Internacionales</h2>
      <div className="row">
        {copas.map(c=>(
          <div key={c.id} className="card col">
            <img src={c.image} alt={c.name} className="img-rect" />
            <h3>{c.name}</h3>
            <div className="small">Año: {c.years}</div>
            <Link className="btn" to={`/copas-internacionales/${c.id}`}>Ver campeones</Link>
          </div>
        ))}
      </div>
    </section>
  )
}
