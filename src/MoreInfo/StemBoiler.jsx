import React from 'react'

const StemBoiler = () => {
  return (
    <div className="foodbank-boiler-master">
      <h1>Join us for Women of Color in STEM!</h1>
      <div className="foodbank-boiler-container">
        <img src = "static\images\Women_of_Color_in_STEM.png" />
        <div className="foodbank-boiler-info">
          <h1>Women of Color in STEM</h1>
          <h2>🗓️ Date: October 29, 2024</h2>
          <p>⏰ Time: 2:30pm (Check-In & Refreshments) | 3:00pm-5:00pm (Main Event)</p>
          <p>📍 Location: The Summit, Student Center 410 (3rd Floor)</p>
          <p>👥 Facilitated by: Naluce Ito Rocha Santana, Professor of Public Health & Biology, Mt. SAC.</p>
          <p>🎯 Organizer: The Equity Center</p>
          <h2>What to expect:</h2>
          <p>Come and celebrate the achievements of incredible women of color in STEM! We'll have an awesome lineup of speakers, including:</p>
          <ul>
            <li><b>Dr. Janel L. Ortiz,</b> Assistant Professor, Mathematics & Science at Cal Poly Pomona</li>
            <li><b>Grace Kassebaum,</b> Applied Mathematics, UCLA</li>
            <li><b>Miriam Abundez-Guerra,</b> Food Scientist, Beyond Meat</li>
            <li><b>Chelsea Amihere,</b> Software Engineer at Northrop Grumma</li>
          </ul>
          <h2>How to sign up: </h2>
          <p>No registration is needed!</p>
          <h2 className="jelq">For any questions and concerns, please contact us via email: <br />           
          <a href = "mailto: mtsac.csclub@gmail.com">📧 mtsac.csclub@gmail.com</a>
          <br />
          <a href = "mailto: equitycenter@mtsac.edu">📧equitycenter@mtsac.edu</a>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default StemBoiler