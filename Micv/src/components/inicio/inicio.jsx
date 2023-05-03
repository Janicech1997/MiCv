import React from 'react'
import Header from "../Layout/Header"
import Footer from "../Layout/Footer"
import classes from "../inicio/Inicio.module.css"

const inicio = () => {
  return (
    <div>
      <Header/>
      <div className={classes.inicio}>
      <main className={classes.main}>
  <div className={classes.infocontent}>
    <h1>Soy <span>Janice</span> Chen</h1>
    <p>conoceme más</p>
    <a download href="#"><button className={classes.downloadcv}>Download CV</button></a>
  </div>
  <img src="/fotocircular.png" alt />
</main>
</div>


      <Footer/>
    </div>
  )
}

export default inicio
