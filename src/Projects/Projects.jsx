import React from 'react'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import ProjectsContainer from './ProjectsContainer'
import './Projects.css'
import { Helmet } from 'react-helmet'

const Projects = () => {
  return(
    <>
    <Helmet>
      <title>Projects | CS Club at Mt. SAC</title>
    </Helmet>
    <Navbar />
    <div className="p-header">
      <h2>Past Projects</h2>
    </div>
    <ProjectsContainer
      projectName = "adsfs"
      projectImageSrc = "\static\images\chris.png"
      projectLink = "youtube.com"
    />

    <Footer />
    </>
  )
}

export default Projects