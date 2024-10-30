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
    <div className="p-mastercontainer">
      <ProjectsContainer
        projectName = "adsfs"
        projectImageSrc = "\static\images\cscclubgameflyerv2.png"
        projectLink = "youtube.com"
      />
      <ProjectsContainer
        projectName = "adsfs"
        projectImageSrc = "\static\images\cscclubgameflyerv2.png"
        projectLink = "youtube.com"
      />
      <ProjectsContainer
        projectName = "adsfs"
        projectImageSrc = "\static\images\cscclubgameflyerv2.png"
        projectLink = "youtube.com"
      />            <ProjectsContainer
      projectName = "adsfs"
      projectImageSrc = "\static\images\cscclubgameflyerv2.png"
      projectLink = "youtube.com"
    />      
          <ProjectsContainer
        projectName = "adsfs"
        projectImageSrc = "\static\images\cscclubgameflyerv2.png"
        projectLink = "youtube.com"
      />      
            <ProjectsContainer
        projectName = "adsfs"
        projectImageSrc = "\static\images\cscclubgameflyerv2.png"
        projectLink = "youtube.com"
      />      
            <ProjectsContainer
        projectName = "adsfs"
        projectImageSrc = "\static\images\cscclubgameflyerv2.png"
        projectLink = "youtube.com"
      />      
            <ProjectsContainer
        projectName = "adsfs"
        projectImageSrc = "\static\images\cscclubgameflyerv2.png"
        projectLink = "youtube.com"
      />      
    </div>

    <Footer />
    </>
  )
}

export default Projects