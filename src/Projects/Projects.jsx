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
      <p>Check out the previous projects and workshops made by our past officers!</p>
    </div>
    <div className="p-mastercontainer">
      <ProjectsContainer
        projectName="Intro to Arduino"
        projectLink="https://docs.google.com/presentation/d/1ibq6mKTArqkUY7aMJD_wPrBJIE6gd7xQx00o1-9ZVcc/edit#slide=id.p"
      />
      <ProjectsContainer
        projectName="Intro to Computer Science"
        projectLink="https://docs.google.com/presentation/d/1qVwx4yZ5tW8dbVJDzh1pRuDjeKLZZMLt0PGaoFUd-n0/edit?usp=sharing"
      />
      <ProjectsContainer
        projectName="Citrus Hack 2019"
        projectLink="https://docs.google.com/presentation/d/1kvQQ9zwFHZ3iwAoByCs4mibPTC9Upagi8DU0oIBx3RY/edit?usp=sharing"
      />
      <ProjectsContainer
        projectName="Intro to Git and Github"
        projectLink="https://docs.google.com/presentation/d/1xuTi38wjr2_dkuBIDsY_mwUNmLzFm_gIkvDvZDcVCEQ/edit?usp=sharing"
      />
      <ProjectsContainer
        projectName="Resume Workshop"
        projectLink="https://docs.google.com/presentation/d/1K-zcJryfaTtuF6QDq6YsgikRWzYZ_2L1UAnH8GG_WBc/edit?usp=sharing"
      />
      <ProjectsContainer
        projectName="Intro to Java"
        projectLink="https://docs.google.com/presentation/d/1mkV-e8Umj3ohlOdyqsSIXpQAvhg5J3osSbl5Z_efK3c/edit#slide=id.p"
      />
      <ProjectsContainer
        projectName="Mt. Hacks 2019"
        projectLink="https://docs.google.com/presentation/d/16CZ6Xkcd68mVwhtWgw9XtgK--Ar2U6PZ1aphV6WcviA/edit#slide=id.p"
      />
      <ProjectsContainer
        projectName="App building with Mendix"
        projectLink="https://docs.google.com/presentation/d/1TDU9_XIL-FdNbVrhpzmsge8rzIhpQ-2KUVmxTZprgBQ/edit?usp=sharing"
      />
      <ProjectsContainer
        projectName="AI Briefing"
        projectLink="https://docs.google.com/presentation/d/19D-eFgYFcaV79_DuUVP9HVPauB9pX6LQ6jmz-KFvQpE/edit?usp=sharing"
      />
      <ProjectsContainer
        projectName="Web Development"
        projectLink="https://docs.google.com/presentation/d/1n_b8fKJWwiZZnUXX9GhMSezJvULtRHDlOmDYwAMhOrw/edit?usp=sharing"
      />
      <ProjectsContainer
        projectName="Introduction to Web Dev"
        projectLink="https://docs.google.com/presentation/d/1JWuLIgnXQyr_Ez8E3F6-4owPj42K8vZ3UtO_nMp2J3A/edit?usp=sharing"
      />

    </div>
    <Footer />
    </>
  )
}

export default Projects