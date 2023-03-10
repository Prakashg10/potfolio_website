import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
const footer = () => {
  return (
  <footer>
  <a href="#" className='footer__logo'>PRAKASH</a>

  <ul className='permalinks'>
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Expeirience</a></li>
    <li><a href="#services">Services</a></li>
   
    <li><a href="#contact">Contact</a></li>
  </ul>

  <div className="footer__socials">
    <a href="https://www.facebook.com/"><FaFacebookF/></a>
   
  </div>

  
</footer>
  )
}

export default footer