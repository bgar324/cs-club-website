import React from 'react'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import JoinUs from './JoinUs'
import Benefits from './Benefits'
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
        <h1 className="join-us-title">We're so excited that you want to join our amazing community!</h1>
      </div>
      
      <div className="j-comp-div">
        <JoinUs 
        title = "How do I join?"
        description= "Membership is open all year round, and all you need to do is join our <a href='https://discord.gg/sWpjfHVuuT'>Discord server.</a> Once you're in, you'll have access to all our events, resources, and opportunities. It's that easy—no formal sign-up or application required. We can't wait to see you there!"
        />

        <h1>Benefits</h1>
        <div className="benefits-section">
          <Benefits 
            title = "Connect"
            description = "with like minded students who share your passion for computer science and technology."
            // image =  "static/images/discord.svg"
          />

          <Benefits
          title = "Tutoring"
          description = "with our alumni and volunteers to help you succeed in your coursework and projects."
          />

          <Benefits
          title = "Collaborative"
          description = "coding opportunites where you can work on exciting projects with fellow members."
          />

          <Benefits
          title = "Participate"
          description = "in hackathons, where you can test your skills, solve real-world problems and showcase your talent."
          />

          <Benefits
          title = "Workshops"
          description = "and events designed to sharpen your skills and showcase new technologies."
          />

        </div>

      </div>
    <Footer />
    </>
  )
}

export default Contact