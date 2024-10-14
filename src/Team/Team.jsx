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
        {/* <img src = "/static/images/rubber duck.png" /> */}
        <h2>Our Team</h2>
       </div>
        <p className = "t-main-p">Our officers make the amazing events and projects that we do possible. This page recognizes our entire team for their amazing work. </p>
      <div className="t-team-container">
        <Person 
          imagesrc="\static\images\rubber duck.png"
          name = "Bowen *lastName*"
          position = "President"
          year = "Class of ????"
        />
        <Person 
          imagesrc="\static\images\rubber duck.png"
          name = "Siwoo *lastName*"
          position = "Vice-President"
          year = "Class of ????"
        />
        <Person 
          imagesrc="\static\images\rubber duck.png"
          name = "Jessica *lastName*"
          position = "Secretary"
          year = "Class of ????"
        />
        <Person 
          imagesrc="\static\images\rubber duck.png"
          name = "Van *lastName*"
          position = "Treasurer"
          year = "Class of ????"
        />
        <Person 
          imagesrc="\static\images\rubber duck.png"
          name = "Josh *lastName*"
          position = "ICC Representative"
          year = "Class of ????"
        />
        <Person 
          imagesrc="\static\images\rubber duck.png"
          name = "Benjamin Garcia"
          position = "Outreach Officer"
          year = "Class of 2027"
        />
        <Person 
          imagesrc="\static\images\rubber duck.png"
          name = "Natalie *lastName*"
          position = "Outreach Officer"
          year = "Class of ????"
        />
        <Person 
          imagesrc="\static\images\rubber duck.png"
          name = "Amanda *lastName*"
          position = "Workshop Officer"
          year = "Class of ????"
        />
        <Person 
          imagesrc="\static\images\rubber duck.png"
          name = "Chris *lastName*"
          position = "Workshop Officer"
          year = "Class of ????"
        />
      </div>

    </div>
    <Footer />
    </>
  )
}

export default Team