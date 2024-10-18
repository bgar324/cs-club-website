import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import MesaBoiler from './MesaBoiler'

const Mesa = () => {
  return (
    <>
    <Helmet>
      <title>MESA Guest Speaker: Jim Herold | CS Club at Mt. SAC</title>
    </Helmet>
      <Navbar />
      <MesaBoiler />
      <Footer />
    </>
  )
}

export default Mesa