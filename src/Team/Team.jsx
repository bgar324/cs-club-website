import React from 'react'
import './team.css'
import Navbar from '../HomePage/Navbar'
import Person from './Person'
import Footer from '../HomePage/Footer'
import { Helmet } from 'react-helmet'

const Team = () => {
  return (
    <>
    <Helmet>
      <title>Team | CS Club at Mt. SAC</title>
    </Helmet>
    
    <Navbar />
    <div className="t-main-content">
       <div className="t-header">
        <img src = "/static/images/rubber duck.png" />
        <h2>Our Team</h2>
       </div>
        <p className = "t-main-p">Our officers make the amazing events and projects that we do possible. This page recognizes our entire team for their amazing work. </p>
      <div className="t-team-container">
        <Person 
          imagesrc="\static\images\rubber duck.png"
          name = "Benjamin Garcia"
          position = "Outreach Officer"
          year = "Class of 2027"
        />
        <Person 
          imagesrc="\static\images\rubber duck.png"
          name = "Benjamin Garcia"
          position = "Outreach Officer"
          year = "Class of 2027"
        />
        <Person 
          imagesrc="\static\images\rubber duck.png"
          name = "Benjamin Garcia"
          position = "Outreach Officer"
          year = "Class of 2027"
        />
      </div>

    </div>
    <Footer />
    </>
  )
}

export default Team