import React from 'react'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import FoodBankBoiler from './FoodBankBoiler'
import { Helmet } from 'react-helmet'

const FoodBank = () => {
  return (
    <>
    <Helmet>
      <title>Food Bank | CS Club at Mt. SAC</title>
    </Helmet>
      <Navbar />
      <FoodBankBoiler />
      <Footer />
    </>
  )
}

export default FoodBank