import React, { useState } from 'react'

export default function Contacto(){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')
  const [sent,setSent]=useState(false)

  function handleSubmit(e){
    e.preventDefault()
    const contacts = JSON.parse(localStorage.getItem('futbol_contactos')||'[]')
    contacts.push({name,email,message,date:new Date().toISOString()})
    localStorage.setItem('futbol_contactos', JSON.stringify(contacts))
    setSent(true)
    setName(''); setEmail(''); setMessage('')
  }

  return (
    <section>
      <h2>Contacto</h2>
      <div className="card">
        <p className="small">queres mandar consejos y aportaciones?</p>

        <form onSubmit={handleSubmit} style={{marginTop:12}}>
          <label>Nombre</label>
          <input className="form-input" value={name} onChange={e=>setName(e.target.value)} required />
          <label>Correo</label>
          <input className="form-input" value={email} onChange={e=>setEmail(e.target.value)} type="email" required />
          <label>Mensaje</label>
          <textarea className="form-textarea" rows="6" value={message} onChange={e=>setMessage(e.target.value)} required />
          <div style={{marginTop:8}}>
            <button className="btn" type="submit">Enviar</button>
          </div>
          {sent && <div className="small" style={{marginTop:8}}>Gracias — tu mensaje fue enviado correctamente</div>}
        </form>
      </div>

      <div style={{marginTop:12}} className="card">
        <h3>todas las aportaciones seran consideradas,siempre y cuando cumplan requisitos</h3>
        <ol className="small">
          <li>nada de contenido explicito</li>
          <li>texto claro y desarrollado</li>
          <li>paciencia para esperar nuestra respuesta</li>
        </ol>
      </div>
    </section>
  )
}
