import React from 'react'
import Header from "../Layout/Header"
import Footer from "../Layout/Footer"
import classes from "../inicio/Inicio.module.css"
import { BsGithub, BsBehance, BsLinkedin } from "react-icons/bs";




const inicio = () => {
  return (
    <div>
      <Header/>
      <div className={classes.inicio}>
      <main className={classes.main}>
  <div className={classes.infocontent}>
    <h1>Me llamo <span className={classes.span}>Janice Chen</span></h1>
    <div className={classes.Iam}>
  <p>Soy</p>
  <b>
    <div className={classes.innerIam}>
      Diseñadora<br /> 
      Developer<br />
    </div>
  </b>
    <div className={classes.redes}>
      <span className={classes.redes}><ul className={classes.titulu}>
         <li><a href="https://github.com/Janicech1997" target="_blank"><BsGithub/></a></li>
         <li><a href="https://www.linkedin.com/in/janice-chen-31ab47152/" target="_blank"><BsLinkedin/></a></li>
         <li><a href="https://www.behance.net/janicechen1997" target="_blank"><BsBehance/></a></li>
      </ul></span>
    </div>
</div>
  </div>
  <img src="/fotocircular.png" alt />
</main>
<div>
</div>
</div>



      <Footer/>
    </div>
  )
}

export default inicio
