import React from 'react'
import Header from "../Layout/Header"
import Footer from "../Layout/Footer"
import { db } from "../../firebase/firebase"
import { addDoc,collection} from 'firebase/firestore'
import { useState } from 'react'
import classes from "../inicio/Inicio.module.css"
import { BsGithub, BsBehance, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const inicio = () => {
  
  const [nombre, setName] = useState("")
  const [email, setEmail] = useState("")
  const [asunto, setAsunto] = useState("")
  const [mensaje, setMensaje] = useState("")
  const useCollectionRef = collection(db, 'contactos-cv')
  
  const handleSubmit = () => {
      addDoc(useCollectionRef, {
        nombre:nombre,
        email:email,
        asunto:asunto,
        mensaje:mensaje
      })
  }
  return (
    <div className={classes.todo}>
      <Header/>
      <div className={classes.inicio} >
      <main id="inicio" className={classes.main} href="#inicio">
  <div className={classes.infocontent} >
    <h1>Me llamo <span className={classes.span}>Janice Chen</span></h1>
    <div className={classes.Iam}>
  <p>Soy</p>
  <b>
    <div className={classes.innerIam}>
      Diseñadora <br />
      Developer  <br />
    </div>
  </b>
  
    <div className={classes.redes}>
      <span className={classes.redes}><ul className={classes.titulu}>
         <li><a href="https://github.com/Janicech1997" target="_blank" className={classes.github}><BsGithub/></a></li>
         <li><a href="https://www.linkedin.com/in/janice-chen-31ab47152/" target="_blank" className={classes.github}><BsLinkedin/></a></li>
         <li><a href="https://www.behance.net/janicechen1997" target="_blank" className={classes.github}><BsBehance/></a></li>
         <li><a href="https://api.whatsapp.com/send?phone=593960950555" target="_blank" className={classes.github}><BsWhatsapp/></a></li>
      </ul></span>
    </div>
</div>
  </div>
  <img className={classes.img} src="/fotocircular.png" />
</main>
<div>
</div>
</div>
<div>
     <section id="portafolio" className={classes.portfolio}  href="#portafolio">
  <h3 className={classes.sobremi1}>Desarrollo web</h3>
  <div className={classes.fila}>
    <div className={classes.proyecto}>
      <div className={classes.overlay} />
      <img src="/proyecto1.png" />
      <div className={classes.info}>
      <a href="https://github.com/Janicech1997/Proyecto1.git" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className={classes.github} viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></a>
        <h4>Landing de Venta</h4>
        <p>HTML + CSS</p>
      </div>
    </div>
    <div className={classes.proyecto}>
      <div className={classes.overlay} />
      <img src="/proyecto2.png" />
      <div className={classes.info}>
      <a href="https://github.com/Janicech1997/Proyecto2.git" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className={classes.github} viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></a>
        <h4>Aplicación CRUD</h4>
        <p>HTML + CSS + JS</p>
      </div>
    </div>
    <div className={classes.proyecto}>
      <div className={classes.overlay} />
      <img src="/proyecto3.png" alt />
      <div className={classes.info}>
      <a href="https://github.com/team1proyecto3/Proyecto3team1.git" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className={classes.github} viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></a>
        <h4>Tablero de Datos "Dashboard"</h4>
        <p>HTML + CSS + JS</p>
      </div>
    </div>
  </div>
  <div className={classes.fila}>
    <div className={classes.proyecto}>
      <div className={classes.overlay} />
      <img src="/proyecto4.png" />
      <div className={classes.info}>
      <a href="https://github.com/Janicech1997/Proyecto4.git" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className={classes.github} viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></a>
        <h4>Restaurant App</h4>
        <p>REACT + HTML + CSS + VITE</p>
      </div>
    </div>
    <div className={classes.proyecto}>
      <div className={classes.overlay} />
      <img src="/proyecto5.png" />
      <div className={classes.info}>
      <a href="https://github.com/Janicech1997/PROYECTO5-GG.git" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className={classes.github} viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></a>
        <h4>Aplicación de Comercio Electrónico</h4>
        <p>FULLSTACK "NODE.JS , EXPRESS, MONGODB, REACT+VITE" </p>
      </div>
    </div>
    <div className={classes.proyecto}>
      <div className={classes.overlay} />
      <img src="/proyecto7.png" />
      <div className={classes.info}>
      <a href="https://drive.google.com/file/d/1NIrwbC7P7zCkSLxpw7JB12TaeiT86ukg/view?usp=sharing" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className={classes.github} viewBox="0 0 16 16">
  <path d="M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 0 0 .5-1.05 12.045 12.045 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 6.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"/>
  <path fill-rule="evenodd" d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.651 11.651 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.697 19.697 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"/>
</svg></a>
        <h4>Aplicación Educativo</h4>
        <p>Diseño Web</p>
      </div>
    </div>
    <div className={classes.proyecto}>
      <div className={classes.overlay} />
      <img src="/proyecto8.png" />
      <div className={classes.info}>
      <a href="https://hidra.com.mx" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className={classes.github} viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></a>
        <h4>Página web Hidra</h4>
        <p>"HTML-CSS-JS" </p>
      </div>
    </div>
  </div>
  <h3 className={classes.sobremi1}>Diseño</h3>
  <div className={classes.fila}>
    <div className={classes.proyecto}>
      <div className={classes.overlay} />
      <img src="/brand.png" />
      <div className={classes.info}>
      <a href="https://www.behance.net/gallery/92898527/Logofolio-JC" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className={classes.github} viewBox="0 0 16 16">
  <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285 2.827 2.827 0 0 1-1.137-.782 2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z"/>
</svg></a>
        <h4>Branding</h4>
        <p>Mis diseños</p>
      </div>
    </div>
    <div className={classes.proyecto}>
      <div className={classes.overlay} />
      <img src="/publi.png"  />
      <div className={classes.info}>
      <a href="https://www.behance.net/gallery/169942289/Publicidad-disenados" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className={classes.github} viewBox="0 0 16 16">
  <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285 2.827 2.827 0 0 1-1.137-.782 2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z"/>
</svg></a>
        <h4>Publicidad</h4>
        <p>Mis diseños</p>
      </div>
    </div>
    <div className={classes.proyecto}>
      <div className={classes.overlay} />
      
      <img src="/foto.png"  />
      <div className={classes.info}>
      <a href="https://www.behance.net/gallery/92879261/Photos-Ladys" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className={classes.github} viewBox="0 0 16 16">
  <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285 2.827 2.827 0 0 1-1.137-.782 2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z"/>
</svg></a>
        <h4>Fotografía</h4>
        <p>Mis diseños</p>
      </div>
    </div>
  </div>
</section>
  </div>
<div>
        <section id="sobremi" className={classes.sobremi} href="#sobremi">
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
                    https://mi-cv-iota.vercel.app/portafolio
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
                      className="bi bi-controller"
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
                      className="bi bi-music-note-beamed"
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
                      className="bi bi-airplane-fill"
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
                      className="bi bi-code-square"
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
                      className="bi bi-universal-access"
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
                      className="bi bi-book"
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
                      className="bi bi-easel2"
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
                      className="bi bi-camera"
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
            <a href="/CurriculumSpanish.pdf" target="_blank" className={classes.textodes}>Descargar CV Español </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-earmark-arrow-down"
                viewBox="0 0 16 16"
              >
                <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
              </svg>
              <span className={classes.overlay} />
            </button>
            <button>
            <a href="/CurriculumEnglish.pdf" target="_blank" className={classes.textodes}>Descargar CV Inglés </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-earmark-arrow-down"
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
    <div>
    <img src="https://icongr.am/devicon/illustrator-plain.svg?size=100&color=ff8b3d" />
    <p>Adobe Illustrador</p>
    </div>
    <div>
    <img src="https://icongr.am/devicon/photoshop-plain.svg?size=100&color=3dbeff"  />
    <p>Adobe Photoshop</p>
    </div>
    <div>
    <img src="https://images.vexels.com/media/users/3/163292/isolated/lists/3087de3a36b76b94e9178fd791d7886e-premiere-pro-pr-icono-de-color.png" width={100}  height={100} />
    <p>Adobe Premiere</p>
    </div>
    <div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png" width={100}  height={100}/>
    <p>Adobe XD</p>
    </div>
    <div>
    <img src="https://cdn.freebiesupply.com/logos/large/2x/figma-1-logo-png-transparent.png" width={70}  height={100}/>
    <p>Figma</p>
    </div>
    <i className="devicon-javascript-plain colored" />
 <br />
  </div>
  <h2>Front-End</h2>
  <div className={classes.tech}>
    <div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" width={125}  height={100}  />
    <p>Bootstrap</p>
    </div>
    <div>
    <img src="https://icongr.am/devicon/javascript-original.svg?size=100&color=currentColor" />
    <p>Javascript</p>
    </div>
    <div>
    <img src="https://icongr.am/devicon/react-original-wordmark.svg?size=100&color=f57575"  />
    <p>React</p>
    </div>
    <div>
    <img src="https://icongr.am/devicon/html5-original.svg?size=101&color=ffffff" />
    <p>Html5</p>
    </div>
    <div>
    <img src="https://icongr.am/devicon/css3-original.svg?size=101&color=ffffff" />
    <p>Css3</p>
    </div>
    <i className="devicon-bootstrap-plain-wordmark colored" />
<br />
  </div>
  <h2>Back-End</h2>
  <div className={classes.tech}>
    <div>
    <img src="https://icongr.am/devicon/express-original-wordmark.svg?size=101&color=f57575" />
    </div>
    <div>
    <img src="https://icongr.am/devicon/nodejs-original.svg?size=101&color=f57575" />
    <p>Node.js</p>
    </div>
    <div>
    <img src="https://icongr.am/devicon/mysql-plain-wordmark.svg?size=101&color=ffffff" />
    <p>MySQL</p>
    </div>
    <div>
    <img src="https://icongr.am/devicon/mongodb-plain-wordmark.svg?size=101&color=ffffff" />
    </div>
<br />
  </div>
  </div>
            </section>
          </div>
          
        </section>
        <div className={classes.fondo}>
    
<div>
<section id="contacto" className={classes.contacto} href="#contacto">
<h3 className={classes.sobremi1}>Contactanos</h3>
  <div className={classes.contenedorform}>
    <form className={classes.inputall}>
      <div className={classes.fitatotal}>
        <input type="text" placeholder="Nombre Completo *" className={classes.inputmitad} 
        onChange={(event)=>{
          setName(event.target.value)
        }} />
        <input type="email" placeholder="Dirección de Email" className={classes.inputmitad}
        onChange={(event)=>{
          setEmail(event.target.value)
        }} />
      </div>
      <div className={classes.fila}>
        <input type="text" placeholder="Asunto" className={classes.inputfull}
        onChange={(event)=>{
          setAsunto(event.target.value)
        }} />
      </div>
      <div className={classes.fila}>
        <textarea type="text" name id cols={30} rows={10} placeholder="Tu Mensaje..." className={classes.inputfull} 
        onChange={(event)=>{
          setMensaje(event.target.value)
        }}/>
      </div>
      <button onClick={handleSubmit} className={classes.btnenviar}>Enviar</button>
    </form>
  </div>
</section>

</div>
</div>
      </div>
<Header/> 
<Footer/>
    </div>
  )
}

export default inicio
