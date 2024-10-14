import React from 'react'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import JoinUs from './JoinUs'
import './contact.css'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return(
    <>
    <Helmet>
      <title>Join Us | CS Club at Mt. SAC</title>
    </Helmet>
    <Navbar />

    <JoinUs 
     title = "asdfiosfad"
     description= "asfasdasdf"
    />

    <Footer />
    </>
  )
}

export default Contact