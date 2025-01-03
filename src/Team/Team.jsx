import React, { useEffect } from 'react';
import './team.css'
import Navbar from '../HomePage/Navbar'
import Person from './Person'
import Footer from '../HomePage/Footer'
import { Helmet } from 'react-helmet'

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <p className = "t-main-p">Our officers are the heart of our events and projects, making everything we do possible. This page recognizes their hard work—feel free to reach out to them anytime!</p>
      <div className="t-team-container">
        <Person 
          imagesrc="\static\images\bowen.png"
          name = "Bowen Wu"
          position = "President"
          year = "Class of 2027"
        />
        <Person 
          imagesrc="\static\images\siwoo.png"
          name = "Siwoo Chung"
          position = "Vice-President"
          year = "Class of ????"
        />
        <Person 
          imagesrc="\static\images\jessica.png"
          name = "Jessica Chen"
          position = "Secretary"
          year = "Class of ????"
        />
        <Person 
          imagesrc="\static\images\van.png"
          name = "Van Lai Sy"
          position = "Treasurer"
          year = "Class of ????"
        />
        <Person 
          imagesrc="\static\images\josh.png"
          name = "Joshua-Jaye Chan"
          position = "ICC Representative"
          year = "Class of ????"
        />
        <Person 
          imagesrc="\static\images\ben.png"
          name = "Benjamin Garcia"
          position = "Outreach Officer"
          year = "Class of 2027"
        />
        <Person 
          imagesrc="\static\images\natalie.png"
          name = "Natalie Guillen"
          position = "Workshop Officer"
          year = "Class of ????"
        />
        <Person 
          imagesrc="\static\images\amanda.png"
          name = "Amanda Chang"
          position = "Workshop Officer"
          year = "Class of 2028"
        />
        <Person 
          imagesrc="\static\images\chris.png"
          name = "Chris Theung"
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