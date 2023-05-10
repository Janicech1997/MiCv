import React from 'react';
import { BsGithub, BsBehance, BsLinkedin } from "react-icons/bs";
import classes from "../Layout/Footer.module.css"


const footer = () => {
  return (
   <footer>
  <div className={classes.footer}>
  <p class="copyright">Janice Chen © 2023</p>
<a href="https://github.com/Janicech1997" target="_blank" className={classes.footer1}><BsGithub/></a>
         <a href="https://www.linkedin.com/in/janice-chen-31ab47152/" target="_blank" className={classes.footer1}><BsLinkedin/></a>
        <a href="https://www.behance.net/janicechen1997" target="_blank" className={classes.footer1}><BsBehance/></a>
  </div>
</footer>



  )
}

export default footer
