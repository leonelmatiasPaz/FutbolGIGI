import React from 'react'
import { Link } from 'react-router-dom'
import countries from '../data/countries.json'

export default function Countries(){
  return (
    <section>
      <h2>Países campeones del mundo</h2>
      <h4>paises que ganaron la mayor competencia del futbol mundial</h4>
      <div className="row">
        {countries.map(c=>(
          <div className="card col" key={c.id}>
            <img src={c.flag} alt={c.name} className="img-rect" />
            <h3>{c.name}</h3>
            <Link className="btn" to={`/country/${c.id}`}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </section>
  )
}
