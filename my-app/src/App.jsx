import React from 'react'
import Header from './components/header/header'
import About from './components/aboutcomponent/About'
import Nav from './components/nav/nav'
import Experience from './components/experience/experience'
import Services from './components/services/services'
/*import Portfolio from './components/portfolio/portfolio'*/

import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
const App = () => {
    return (
        <>
           <Header />
           < Nav />
           < About />
           < Experience/>
           < Services />
          
          
           < Contact />
           < Footer/>
        </>
    )
}

export default App
