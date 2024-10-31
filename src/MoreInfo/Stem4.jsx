import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import Stem4Boiler from './Stem4Boiler'

const Stem4 = () => {
  return (
    <>
    <Helmet>
      <title>STEMForOthers | CS Club at Mt. SAC</title>
    </Helmet>
      <Navbar />
      <Stem4Boiler />
      <Footer />
    </>
  )
}

export default Stem4