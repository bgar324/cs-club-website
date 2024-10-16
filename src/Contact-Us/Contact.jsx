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

      <div className="join-us-page">
        <h1 className="join-us-title">Join the Mt. SAC Computer Science Club</h1>
      </div>

      <JoinUs 
      title = "How do I join?"
      description= "asfasdasdf"
      />

    <Footer />
    </>
  )
}

export default Contact