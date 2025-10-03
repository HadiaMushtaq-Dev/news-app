import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faThreads, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom'
import "./Comps.css"
function Footer() {
  return (
    <div className='footer'>
      <div className='footer1'>
        <p>Copyrights &copy; Globe News 2025 reserved</p>
        <div className='icons'>
          <Link to="">
        <FontAwesomeIcon icon={faWhatsapp} style={{color: "#2eaf1d", fontSize:'3rem'}} /></Link>
          <Link to="">  <FontAwesomeIcon icon={faInstagram} style={{color: "#bb1b9e", fontSize:'3rem'}} /></Link>
          <Link to="">  <FontAwesomeIcon icon={faThreads} style={{fontSize:'3rem'}}/></Link>
          <Link to=""> <FontAwesomeIcon icon={faFacebook} style={{color: "#1957c2", fontSize:'3rem'}} /></Link>
      
      
       

        </div>
      </div>
    </div>
  )
}

export default Footer
