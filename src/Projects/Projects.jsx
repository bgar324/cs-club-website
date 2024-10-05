import React from 'react'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import { Helmet } from 'react-helmet'

const Projects = () => {
  return(
    <>
    <Helmet>
      <title>Open Source | CS Club at Mt. SAC</title>
    </Helmet>
    <Navbar />

    <Footer />
    </>
  )
}

export default Projects