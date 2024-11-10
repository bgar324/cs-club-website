import React, { useEffect} from 'react';
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import EventContainer from './EventContainer'
import './events.css'
import { Helmet } from 'react-helmet'


const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            infoLink = "/foodbank"
            registerLink = "https://docs.google.com/forms/d/e/1FAIpQLSdlxrm0XRRa4iipwRsZ5by0ySOy65Rgiccym5OW-ndXoI-H8w/viewform"
          />

          <EventContainer 
            imagesrc = "\static\images\cscclubgameflyerv2.png"
            alt = "CS Movie Night Flyer"
            eventName = "Game Night"
            infoLink = "/night"
            // registerLink = "https://docs.google.com/forms/d/e/1FAIpQLSdlxrm0XRRa4iipwRsZ5by0ySOy65Rgiccym5OW-ndXoI-H8w/viewform"
          />

          <EventContainer 
            imagesrc = "\static\images\Women_of_Color_in_STEM.png"
            alt = "Women of Color in Stem Flyer"
            eventName = "Women of Color in STEM"
            infoLink = "/stem"
            // registerLink = "https://docs.google.com/forms/d/e/1FAIpQLSdlxrm0XRRa4iipwRsZ5by0ySOy65Rgiccym5OW-ndXoI-H8w/viewform"
          />

          <EventContainer 
            imagesrc = "\static\images\Nov_2024_MESA_Guest_Speaker_Jim_Herold.jpg"
            alt = "MESA Guest Speaker"
            eventName = "Jim Herold Guest Speaker"
            infoLink = "/mesa"
            registerLink = "https://forms.office.com/pages/responsepage.aspx?id=8ktNzJ4KQEKu3qfR1oj5NfaMcBznXHtFpUoFBwrvxcZURDZDNkdOSFlWSzRSVFVJQTFNTzY3TEJaSy4u&origin=QRCode&route=shorturl"
          />

          <EventContainer 
            imagesrc = "\static\images\cs club stem flyer.png"
            alt = "STEMForOthers Event"
            eventName = "STEMForOthers Project Event"
            infoLink = "/stem4"
            registerLink = "https://docs.google.com/forms/d/1co43OjyqbYITjJ-jFDf5GFe_C-NSr_Cf3WtjOpc9oa0/edit"
          />
          <EventContainer 
            imagesrc = "\static\images\smacs.png"
            alt = "Hackathon Prep"
            eventName = "Hackathon Prep (SMACS)"
            infoLink = "/smacs"
            registerLink = "https://smacs.vercel.app/"
          />
        </div>
{/* 
        <div className="e-header-2">
          <h2>Past Events</h2>
        </div>

        {/* <div className="e-events">
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
        </div> */}

      </div>

      <Footer />
    </>
  )
}

export default Events