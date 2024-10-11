import React from 'react'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import EventContainer from './EventContainer'
import './events.css'
import { Helmet } from 'react-helmet'

const Events = () => {
  return(
    <>
      <Helmet>
        <title>Events | CS Club at Mt. SAC</title>
      </Helmet>

      <Navbar />
      <div className="e-master-container">
        <div className="e-header">
          <h2>Upcoming Events</h2>
        </div>

        <div className="e-events">
          <EventContainer 
            imagesrc = "\static\images\cs_food_bank_flyer.png"
            alt = "CS Food Bank Flyer"
            eventName = "Food Bank"
            infoLink = "https://docs.google.com/document/d/1kkGk-kT-zIjRwQsTZ-rccgbeG8NL0GBxXljpwBN3qy0/edit?tab=t.0#heading=h.o8i4jkrbfnc5"
            registerLink = "https://docs.google.com/forms/d/e/1FAIpQLSdlxrm0XRRa4iipwRsZ5by0ySOy65Rgiccym5OW-ndXoI-H8w/viewform"
          />

          <EventContainer 
            imagesrc = "\static\images\cs_food_bank_flyer.png"
            alt = "CS Food Bank Flyer"
            eventName = "Food Bank"
            infoLink = "https://docs.google.com/document/d/1kkGk-kT-zIjRwQsTZ-rccgbeG8NL0GBxXljpwBN3qy0/edit?tab=t.0#heading=h.o8i4jkrbfnc5"
            registerLink = "https://docs.google.com/forms/d/e/1FAIpQLSdlxrm0XRRa4iipwRsZ5by0ySOy65Rgiccym5OW-ndXoI-H8w/viewform"
          />

          <EventContainer 
            imagesrc = "\static\images\cs_food_bank_flyer.png"
            alt = "CS Food Bank Flyer"
            eventName = "Food Bank"
            infoLink = "https://docs.google.com/document/d/1kkGk-kT-zIjRwQsTZ-rccgbeG8NL0GBxXljpwBN3qy0/edit?tab=t.0#heading=h.o8i4jkrbfnc5"
            registerLink = "https://docs.google.com/forms/d/e/1FAIpQLSdlxrm0XRRa4iipwRsZ5by0ySOy65Rgiccym5OW-ndXoI-H8w/viewform"
          />

          <EventContainer 
            imagesrc = "\static\images\cs_food_bank_flyer.png"
            alt = "CS Food Bank Flyer"
            eventName = "Food Bank"
            infoLink = "https://docs.google.com/document/d/1kkGk-kT-zIjRwQsTZ-rccgbeG8NL0GBxXljpwBN3qy0/edit?tab=t.0#heading=h.o8i4jkrbfnc5"
            registerLink = "https://docs.google.com/forms/d/e/1FAIpQLSdlxrm0XRRa4iipwRsZ5by0ySOy65Rgiccym5OW-ndXoI-H8w/viewform"
          />
        </div>

        <div className="e-header-2">
          <h2>Past Events</h2>
        </div>

        <div className="e-events">
          <EventContainer 
            imagesrc = "\static\images\cs_food_bank_flyer.png"
            alt = "CS Food Bank Flyer"
            eventName = "Food Bank"
            infoLink = "https://docs.google.com/document/d/1kkGk-kT-zIjRwQsTZ-rccgbeG8NL0GBxXljpwBN3qy0/edit?tab=t.0#heading=h.o8i4jkrbfnc5"
            registerLink = "https://docs.google.com/forms/d/e/1FAIpQLSdlxrm0XRRa4iipwRsZ5by0ySOy65Rgiccym5OW-ndXoI-H8w/viewform"
          />

          <EventContainer 
            imagesrc = "\static\images\cs_food_bank_flyer.png"
            alt = "CS Food Bank Flyer"
            eventName = "Food Bank"
            infoLink = "https://docs.google.com/document/d/1kkGk-kT-zIjRwQsTZ-rccgbeG8NL0GBxXljpwBN3qy0/edit?tab=t.0#heading=h.o8i4jkrbfnc5"
            registerLink = "https://docs.google.com/forms/d/e/1FAIpQLSdlxrm0XRRa4iipwRsZ5by0ySOy65Rgiccym5OW-ndXoI-H8w/viewform"
          />

          <EventContainer 
            imagesrc = "\static\images\cs_food_bank_flyer.png"
            alt = "CS Food Bank Flyer"
            eventName = "Food Bank"
            infoLink = "https://docs.google.com/document/d/1kkGk-kT-zIjRwQsTZ-rccgbeG8NL0GBxXljpwBN3qy0/edit?tab=t.0#heading=h.o8i4jkrbfnc5"
            registerLink = "https://docs.google.com/forms/d/e/1FAIpQLSdlxrm0XRRa4iipwRsZ5by0ySOy65Rgiccym5OW-ndXoI-H8w/viewform"
          />

          <EventContainer 
            imagesrc = "\static\images\cs_food_bank_flyer.png"
            alt = "CS Food Bank Flyer"
            eventName = "Food Bank"
            infoLink = "https://docs.google.com/document/d/1kkGk-kT-zIjRwQsTZ-rccgbeG8NL0GBxXljpwBN3qy0/edit?tab=t.0#heading=h.o8i4jkrbfnc5"
            registerLink = "https://docs.google.com/forms/d/e/1FAIpQLSdlxrm0XRRa4iipwRsZ5by0ySOy65Rgiccym5OW-ndXoI-H8w/viewform"
          />
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Events