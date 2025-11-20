import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Reglas(){
  const nav = useNavigate()
  return (
    <section>
      <button className="back-btn" onClick={()=>nav(-1)}>⬅ Volver</button>
      <h2>Reglas básicas del fútbol</h2>
      <p className="small">explicación extensa y práctica de las reglas fundamentales del fútbol.</p>

      <div className="card" style={{display:'flex', gap:12, alignItems:'flex-start'}}>
        <div style={{flex:2}}>
          <h3>1. Terreno de juego</h3>
          <p className="small">El campo debe ser rectangular, con marcas claras. Las dimensiones varían según la competición pero el formato y las zonas (área, círculo central, córners) son estándar.</p>

          <h3>2. Balón</h3>
          <p className="small">El balón reglamentario es esférico, homologado por la federación. El tamaño y presión dependen de la categoría.</p>

          <h3>3. Número de jugadores</h3>
          <p className="small">Cada equipo se compone de 11 jugadores en el campo (incluido el arquero). Sustituciones: las reglas oficiales permiten un número determinado según competición.</p>

          <h3>4. Duración del partido</h3>
          <p className="small">Un partido estándar tiene dos tiempos de 45 minutos cada uno, con descanso entre ambos. El árbitro añade tiempo por interrupciones.</p>

          <h3>5. Fuera de juego</h3>
          <p className="small">Un jugador está en fuera de juego si está más cerca de la línea de gol contraria que el balón y el penúltimo rival en el momento del pase, y participa en la jugada. Es una regla compleja y su interpretación es clave.</p>

          <h3>6. Faltas y conducta antideportiva</h3>
          <p className="small">Las faltas incluyen entradas peligrosas, empujar, sujetar o jugar de manera temeraria. El árbitro puede sancionar con tiros libres directos o indirectos, y mostrar tarjetas amarilla/roja según la gravedad.</p>

          <h3>7. Tiros libres, penales y saques</h3>
          <p className="small">Explicación de cómo se ejecutan tiros libres directos/indirectos, saques de esquina, de banda, y penales. En penales, el arquero debe permanecer sobre la línea hasta la ejecución.</p>

          <h3>8. Árbitro y asistentes</h3>
          <p className="small">El equipo arbitral aplica las reglas. Hoy en día el VAR asiste en revisiones (ver sección VAR).</p>
        </div>

        <div style={{flex:1}}>
          <img src="/public/images/reglas/lineas.jpg" alt="Campo" className="img-rect" />
          <p className="small center">Ejemplo: marcado del terreno</p>
          <img src="/public/images/reglas/fueradejuego.jpg" alt="Offside" className="img-rect" style={{marginTop:12}}/>
          <p className="small center">Ejemplo: posición de fuera de juego</p>
        </div>
      </div>

      <div style={{marginTop:12}} className="card">
        <h3>Consejos prácticos</h3>
        <ul className="small">
          <h3>Lo ideal es comenzar mirando partidos con relato y comentarios, ya que ayudan a entender lo que está pasando en cada jugada. Al principio no es necesario conocer todas las reglas: basta con comprender lo esencial, que son dos equipos tratando de marcar en el arco rival mientras defienden el propio.
              Elegir un equipo y seguirlo regularmente también ayuda, porque con el tiempo se empiezan a reconocer jugadores, estrategias y estilos de juego. Prestar atención al movimiento de los equipos, tanto al atacar como al defender, permite entender que el fútbol no es solo correr detrás de la pelota, sino un deporte con táctica y coordinación.
              Si hay algo que no se entiende, existen muchos videos y explicaciones simples que pueden aclararlo en pocos minutos. Mirar los partidos con alguien que sepa también acelera el aprendizaje. Lo más importante es no presionarse y disfrutar: con el tiempo, todo empieza a tener sentido.
          </h3>
       </ul>
      </div>
    </section>
  )
}
