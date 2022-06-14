import React from 'react'
import ProjectDetails from '../../Layouts/ProjectDetails/ProjectDetails'
import './ProjectPage.scss'
import Contact from '../../Layouts/Contact/Contact'
import Footer from '../../Layouts/Footer/Footer'

function ProjectPage() {

  return (
    <div className='container'>
      <ProjectDetails />
      <Contact />
      <Footer />
    </div>
  );
}

export default ProjectPage;
