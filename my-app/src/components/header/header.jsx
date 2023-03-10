import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/image/289041303_574836740898676_313316881736650336_n.jpg'
import HeaderSocial from './headersocial'
const header = () => {
  return (
    <header>
           <div className="container header_container">
               <h5>Hello I'm</h5>
               <h1>Prakash Gadal</h1>
               <h5 className= "text-light"> Software Engineer </h5>
               < CTA />
                <HeaderSocial/>
               <div className='me'>
                 < img src={ME} alt ="me" />
               </div>
               <a href="#contact" className='scroll__down'> Scroll Down</a>
               
           </div>

    </header>
  )
}

export default header