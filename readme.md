
**FútbolGIGI** es una plataforma web educativa desarrollada con **React + Vite**, orientada a personas que no saben nada de fútbol que quieren empezar a consumirlo.
El sitio explica conceptos básicos, reglas, ligas, jugadores y funcionamiento del VAR, mediante una interfaz clara y material visual de apoyo.

**Objetivo del proyecto**

El objetivo principal es ofrecer un entorno simple y accesible para que cualquier persona pueda:

* Entender los fundamentos del fútbol desde cero.
* Conocer jugadores, países, ligas y copas internacionales.
* Aprender las reglas del deporte con ejemplos visuales.
* Comprender el funcionamiento del VAR de manera detallada.
* Practicar concentración y memoria mediante un memotest temático.

FútbolGIGI está diseñado como **puerta de entrada al mundo del fútbol**, pensado para usuarios principiantes.

---

**Características principales**

**Arquitectura SPA (Single Page Application)**

Construida con **React Router**, sin recargas de página.

**Sistema modular por componentes**

Cada sección está construida como un componente o página independiente.

**Datos externos simulados (JSON)**

Información de jugadores, ligas, países y copas está organizada en archivos JSON dentro de `/src/data`.

**Imágenes alojadas en `/public/images`**

Todo el material visual se administra de forma ordenada.

**Memotest funcional**

Juego interactivo con lógica en React:

* Cartas duplicadas
* Mezclado automático
* Reinicio
* Diseño responsivo

**Secciones del sitio**

**Inicio**

Presentación del proyecto y navegación principal.
**Jugadores**

Listado con nombre, posición, país e imagen ilustrativa.

**Países**

Archivo de datos + vista detallada del país con selección nacional, jugadores destacados y ligas relacionadas.

**Ligas**

Listado general + página con:

* Equipos participantes
* Campeón actual
* Historia básica

**Copas Internacionales**

Incluye Champions, Libertadores, Sudamericana, europa league

Cada una posee vista detallada con:

* Historia
* Campeones
* Máximos ganadores

**Reglas del Fútbol**

Explicación extensa, con ejemplos visuales en columnas laterales.

Pensada especialmente para gente que 
**NO entiende nada de fútbol**.

**¿Qué es el VAR?**

Guía técnica detallada:

* Qué detecta
* Cómo funciona
* Tipos de jugadas revisables
* Proceso de revisión
* Ejemplos con imágenes

**Memotest**

Cartas de botines, cuadradas.

**Contacto**

Formulario básico para enviar sugerencias o colaborar con fotos. 

**Tecnologías utilizadas**

 **React 18**
 **Vite**
 **React Router DOM**
 **CSS modularizado**
 **JSON como base de datos local**
 **JavaScript ES Modules**

Proyecto realizado por **Leonel Matías Paz toloza**