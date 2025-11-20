import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    const images = document.querySelectorAll('.carousel-image');
    let index = 0;

    function showNextImage() {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }
    if (images.length > 0) images[0].classList.add('active');

    const interval = setInterval(showNextImage, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <h1>FútbolGIGI</h1>
      <p className="small">
        Bienvenido a la plataforma para aprender futbol para principiantes. Explora ligas, jugadores, copas
        y aprende las reglas y el VAR en detalle.
      </p>

      <div style={{ marginTop: 16 }} className="row">
        <div className="card col">
          <h3>Qué hay aquí</h3>
          <ul className="small">
            <li>Listados de jugadores, ligas y países.</li>
            <li>Página extensa de reglas del fútbol con imágenes de ejemplo.</li>
            <li>Explicación detallada del VAR con ilustraciones.</li>
            <li>Memotest de botines para divertirte.</li>
          </ul>
          <Link to="/reglas" className="btn" style={{ marginTop: 8 }}>
            Leer reglas
          </Link>
        </div>

        <div className="card col">
          <h3>Contacto</h3>
          <p className="small">
            ¿Quieres colaborar o subir fotos? Usa la sección de contacto abajo.
          </p>
          <Link to="/contacto" className="btn">
            Ir a contacto
          </Link>
        </div>
      </div>
      <div className="image-carousel">
        <img src="/images/fotos menu/img1.jpg" className="carousel-image" />
        <img src="/images/fotos menu/img2.jpg" className="carousel-image" />
        <img src="/images/fotos menu/img3.jpg" className="carousel-image" />
      </div>
    </section>
  );
}
