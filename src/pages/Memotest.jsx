import React, { useState, useEffect } from 'react'
import boots from '../data/boots.json'
import './memotest.css'
import { useNavigate } from 'react-router-dom'

function shuffle(array){
  return array.slice().sort(()=>Math.random()-0.5)
}

export default function Memotest(){
  const [count, setCount] = useState(12)
  const [deck, setDeck] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [moves, setMoves] = useState(0)
  const navigate = useNavigate()

  useEffect(()=> reset(), [count])

  function reset(){
    const selection = boots.slice(0, count/2)
    const paired = shuffle([...selection, ...selection].map((b,i)=>({...b, uid:i})))
    setDeck(paired)
    setFlipped([])
    setMatched([])
    setMoves(0)
  }

  function handleFlip(card, idx){
    if(flipped.includes(idx) || matched.includes(card.name)) return
    const nf = [...flipped, idx]
    setFlipped(nf)
    if(nf.length===2){
      setMoves(m=>m+1)
      const [i1,i2] = nf
      const c1 = deck[i1], c2 = deck[i2]
      if(c1.name===c2.name){
        setMatched(m=>[...m, c1.name])
        setFlipped([])
      }else{
        setTimeout(()=> setFlipped([]), 700)
      }
    }
  }

  return (
    <section>
      <button className="back-btn" onClick={()=>navigate(-1)}>⬅ Volver</button>
      <h2>Memotest - Botines</h2>
      <h3>Los botines de fútbol profesional están diseñados especialmente para jugar en cancha, ofreciendo mejor agarre gracias a los tapones de la suela. Esto evita resbalones y permite correr, frenar y girar con más precisión. Además, son livianos, ayudan a controlar mejor la pelota y reducen el riesgo de lesiones.
</h3>
      <div style={{marginBottom:12}}>
        <label className="small">Cartas:</label>
        <select value={count} onChange={e=>setCount(Number(e.target.value))}>
          <option value={12}>12</option>
          <option value={16}>16</option>
          <option value={20}>20</option>
        </select>
        <button className="btn" style={{marginLeft:8}} onClick={reset}>Reiniciar</button>
        <span className="small" style={{marginLeft:12}}>Movimientos: {moves}</span>
      </div>

      <div className="mem-grid">
        {deck.map((card, idx)=> {
          const isFlipped = flipped.includes(idx) || matched.includes(card.name)
          return (
            <div key={idx} className={`mem-card ${isFlipped ? 'flipped':''}`} onClick={()=>handleFlip(card, idx)}>
              <div className="mem-front"></div>
              <div className="mem-back">
                <img src={card.image} alt={card.name} style={{width:'70%', height:'70%'}} />
                <div className="small">{card.name}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
