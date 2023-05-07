import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import classes from "../sobremi/Sobremi.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const sobremi = () => {
  return (
    <div>
      <Header />
      <div>
        <section id="sobremi" className={classes.sobremi}>
          <div className={classes.contenidoseccion}>
            <h2>Sobre Mí</h2>
            <p>
              <span>Me llamo Janice Chen.</span>Vivo en la ciudad de Riobamba -
              Ecuador, nací en Los Ángeles, California-Estados Unidos y tengo
              descendencia Taiwanesa, toda esta riqueza cultural me ha permitido
              hablar y desenvolverme ampliamente con 4 idiomas, con los cuales
              he podido realizar traducciones simultaneas alcanzando así
              conexiones con otras marcas internacionales y facilitando el
              desarrollo de nuevos negocios. Mi experiencia profesional está en
              el campo del diseño y desarrollo web, fotografía, diseño gráfico
              publicitario con herramientas como visual studio code, illustrador
              y photoshop, así como el branding y gestión del diseño. En mis
              tiempos libres me dedico a crear contenido de diseño y
              entretenimimento para la plataforma de Twitch.
            </p>
            <div className={classes.fila}>
              {/* datos personales */}
              <div className={classes.col}>
                <h3>Datos Personales</h3>
                <ul>
                  <li>
                    <strong>Fecha de nacimiento</strong>
                    31-07-1997
                  </li>
                  <li>
                    <strong>Celular</strong>
                    +593 960950555
                  </li>
                  <li>
                    <strong>Email</strong>
                    janicechen31997@hotmail.com
                  </li>
                  <li>
                    <strong>Website</strong>
                    www.example.com
                  </li>
                  <li>
                    <strong>Cargo</strong>
                    <span>Diseñadora y desarrolladora</span>
                  </li>
                </ul>
              </div>
              {/* intereses */}
              <div className={classes.col}>
                <h3>Intereses</h3>
                <div className={classes.contenedorintereses}>
                  <div className={classes.interes}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-controller"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
                      <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
                    </svg>
                    <span>JUGAR</span>
                  </div>
                  <div className={classes.interes}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-music-note-beamed"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
                      <path
                        fill-rule="evenodd"
                        d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"
                      />
                      <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
                    </svg>
                    <span>MUSICA</span>
                  </div>
                  <div className={classes.interes}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-airplane-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
                    </svg>
                    <span>VIAJAR</span>
                  </div>
                  <div className={classes.interes}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-code-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
                    </svg>
                    <span>CODIFICAR</span>
                  </div>
                  <div className={classes.interes}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-universal-access"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9V5.5Z" />
                    </svg>
                    <span>DEPORTES</span>
                  </div>
                  <div className={classes.interes}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-book"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                    </svg>
                    <span>LEER</span>
                  </div>
                  <div className={classes.interes}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-easel2"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 0a.5.5 0 0 1 .447.276L8.81 1h4.69A1.5 1.5 0 0 1 15 2.5V11h.5a.5.5 0 0 1 0 1h-2.86l.845 3.379a.5.5 0 0 1-.97.242L12.11 14H3.89l-.405 1.621a.5.5 0 0 1-.97-.242L3.36 12H.5a.5.5 0 0 1 0-1H1V2.5A1.5 1.5 0 0 1 2.5 1h4.691l.362-.724A.5.5 0 0 1 8 0ZM2 11h12V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11Zm9.61 1H4.39l-.25 1h7.72l-.25-1Z"
                      />
                    </svg>
                    <span>DISEÑAR</span>
                  </div>
                  <div className={classes.interes}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-camera"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                      <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                    </svg>
                    <span>FOTOGRÁFIA</span>
                  </div>
                </div>
              </div>
            </div>
            <button>
              Descargar CV{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-file-earmark-arrow-down"
                viewBox="0 0 16 16"
              >
                <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
              </svg>
              <span className={classes.overlay} />
            </button>
            <section>
              
  <div className={classes.user}>
  <h2>Kills</h2>
  {/* Technology Stack #1: Languages */}
  <h2>Design</h2>
  <div className={classes.tech}>
    <img src="https://icongr.am/devicon/illustrator-plain.svg?size=100&color=ff8b3d" alt="" />
    <img src="https://icongr.am/devicon/photoshop-plain.svg?size=100&color=3dbeff" alt="" />
    <img src="https://images.vexels.com/media/users/3/163292/isolated/lists/3087de3a36b76b94e9178fd791d7886e-premiere-pro-pr-icono-de-color.png" width={100}  height={100} />
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png" width={100}  height={100}/>
    <img src="https://cdn.freebiesupply.com/logos/large/2x/figma-1-logo-png-transparent.png" width={70}  height={100}/>

    <i className="devicon-javascript-plain colored" />
 <br />
  </div>
  <h2>Front-End</h2>
  <div className={classes.tech}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" width={125}  height={100}  />
    <img src="https://icongr.am/devicon/javascript-original.svg?size=100&color=currentColor" alt="" />
    <img src="https://icongr.am/devicon/react-original-wordmark.svg?size=100&color=f57575" alt="" />
    <img src="https://icongr.am/devicon/html5-original.svg?size=101&color=ffffff" alt="" />
    <img src="https://icongr.am/devicon/css3-original.svg?size=101&color=ffffff" alt="" />
    <i className="devicon-bootstrap-plain-wordmark colored" />
<br />
  </div>
  <h2>Back-End</h2>
  <div className={classes.tech}>
    <img src="https://icongr.am/devicon/express-original-wordmark.svg?size=101&color=f57575" alt="" />
    <img src="https://icongr.am/devicon/nodejs-original.svg?size=101&color=f57575" alt="" />
    <img src="https://icongr.am/devicon/mysql-plain-wordmark.svg?size=101&color=ffffff" alt="" />
    <img src="https://icongr.am/devicon/mongodb-plain-wordmark.svg?size=101&color=ffffff" alt="" />
<br />
  </div>
  </div>

            </section>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default sobremi;
