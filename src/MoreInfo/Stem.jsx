import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import StemBoiler from './StemBoiler'

const Stem = () => {
  return (
    <>
    <Helmet>
      <title>Women of Color in STEM | CS Club at Mt. SAC</title>
    </Helmet>
      <Navbar />
      <StemBoiler />
      <Footer />
    </>
  )
}

export default Stem