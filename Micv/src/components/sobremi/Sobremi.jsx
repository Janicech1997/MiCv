import React from 'react'
import Header from "../Layout/Header"
import Footer from "../Layout/Footer"
import classes from "../sobremi/Sobremi.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const sobremi = () => {
  function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}
  return (
    <div>
      <Header/>
      <div>
  <section id="sobremi" className={classes.sobremi}>
    <div className="contenido-seccion">
      <h2>Sobre Mí</h2>
      <p><span>Hola, soy Nick Perez.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde soluta minima necessitatibus, voluptas consectetur vero officiis quas, explicabo deleniti repellendus aliquid debitis maiores numquam voluptate reprehenderit in delectus dolores.</p>
      <div className="fila">
        {/* datos personales */}
        <div className="col">
          <h3>Datos Personales</h3>
          <ul>
            <li>
              <strong>Cumpleaños</strong>
              15-01-1980
            </li>
            <li>
              <strong>Teléfono</strong>
              2555 5454545
            </li>
            <li>
              <strong>Email</strong>
              cw@example.com
            </li>
            <li>
              <strong>Website</strong>
              www.example.com
            </li>
            <li>
              <strong>Dirección</strong>
              123 San Luis, Argentina
            </li>
            <li>
              <strong>Cargo</strong>
              <span>FREELANCE</span>
            </li>
          </ul>
        </div>
        {/* intereses */}
        <div className="col">
          <h3>Intereses</h3>
          <div className={classes.contenedorintereses}>
            <div className={classes.interes}>
              <i className="fa-solid fa-gamepad" />
              <span>JUEGOS</span>
            </div>
            <div className={classes.interes}>
              <i className="fa-solid fa-headphones" />
              <span>MUSICA</span>
            </div>
            <div className={classes.interes}>
              <i className="fa-solid fa-plane" />
              <span>VIAJAR</span>
            </div>
            <div className={classes.interes}>
              <i className="fa-brands fa-apple" />
              <span>MAC OS</span>
            </div>
            <div className={classes.interes}>
              <i className="fa-solid fa-person-hiking" />
              <span>DEPORTE</span>
            </div>
            <div className={classes.interes}>
              <i className="fa-solid fa-book" />
              <span>LIBROS</span>
            </div>
            <div className={classes.interes}>
              <i className="fa-solid fa-car" />
              <span>AUTOS</span>
            </div>
            <div className={classes.interes}>
              <i className="fa-solid fa-camera" />
              <span>FOTOS</span>
            </div>
          </div>
        </div>
      </div>
      <button>
        Descargar CV <i className="fa-solid fa-download" />
        <span className={classes.overlay} />
      </button>
    </div>
  </section>
</div>



      <Footer/>
    </div>
  )
}

export default sobremi
