import React from 'react'

const MesaBoiler = () => {
  return (
    <div className="foodbank-boiler-master">
      <h1>Join us for STEM Guest Speaker: Jim Herold!</h1>
      <div className="foodbank-boiler-container">
        <img src = "static\images\Nov_2024_MESA_Guest_Speaker_Jim_Herold.jpg" />
        <div className="foodbank-boiler-info">
          <h1>STEM Guest Speaker: Jim Herold</h1>
          <h2>🗓️ Date: October 29, 2024</h2>
          <p>⏰ Time: 10AM</p>
          <p>📍 Location: The Summit, Student Center 410 (3rd Floor)</p>
          <p>🎯 Organizer: MESA</p>
          <h2>What to expect:</h2>
          <p>Don’t miss this opportunity to learn from Dr. Jim Herold, Senior Software Engineer at Google! He’ll be sharing his journey through Computer Science at CPP and UCR, and offering invaluable advice for aspiring software engineers.
          </p>
          <h2>How to sign up: </h2>
          <p>Make sure to mark your calendars and RSVP for the MESA event. These are great opportunities to network, learn, and get inspired by professionals in the field. Let us know if you plan on attending!</p>
          <div className="foodbank-buttons">
            <a href="https://forms.office.com/pages/responsepage.aspx?id=8ktNzJ4KQEKu3qfR1oj5NfaMcBznXHtFpUoFBwrvxcZURDZDNkdOSFlWSzRSVFVJQTFNTzY3TEJaSy4u&origin=QRCode&route=shorturl" target="_blank" rel="noopener noreferrer" className="boilerLink">Register</a>
          </div>
          <h2 className="jelq">For any questions and concerns, please contact us via email: <br />           
          <a href = "mailto: mtsac.csclub@gmail.com">📧 mtsac.csclub@gmail.com</a>
          <br />
          <a href ="mailto: mary.bonaparte@mtsac.edu">📧mary.bonaparte@mtsac.edu</a></h2>
        </div>
      </div>
    </div>
  )
}

export default MesaBoiler