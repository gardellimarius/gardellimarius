import React from 'react'
import './Homepage.scss'
import About from '../../Layouts/About/About'
import Projects from '../../Layouts/Projects/Projects'
import Skills from '../../Layouts/Skills/Skills'
import Contact from '../../Layouts/Contact/Contact'
import Footer from '../../Layouts/Footer/Footer'


function Homepage() {

  return (
    <div className='container homepage-container'>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default Homepage;
