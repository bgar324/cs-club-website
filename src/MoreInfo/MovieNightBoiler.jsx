import React from 'react'

const MovieNightBoiler = () => {
  return (
    <div className="foodbank-boiler-master">
    <h1>Join us for Movie Night!</h1>
    <div className="foodbank-boiler-container">
      <img src = "/static/images/cscclubgameflyerv2.png" />
      <div className="foodbank-boiler-info">
        <h1>Movie Night</h1>
        <h2>🗓️ Date: October 30, 2024</h2>
        <p>⏰ Time: 4 PM - 7 PM</p>
        <p>📍 Location: Founders Hall Conference Center, 10 Conference</p>
        <p>🎯 Organizer: Computer Science Club</p>
        <h2>What to expect:</h2>
        <ul>
          <li>🎮 Challenge your friends to classic video games or team up for multiplayer fun!</li>
          <li>🧩 Test your strategy skills with an array of exciting board games and puzzles!</li>
          <li>👾 Enjoy a various video and board games, for a full night of entertainment!</li>
        </ul>
        <h2>How to sign up: </h2>
        <p>TBA</p>
        <div className="foodbank-buttons">
          {/* <a href="https://docs.google.com/document/d/1kkGk-kT-zIjRwQsTZ-rccgbeG8NL0GBxXljpwBN3qy0/edit?tab=t.0#heading=h.o8i4jkrbfnc5" target="_blank" rel="noopener noreferrer" className="boilerLink">Details</a>
          <a href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdhuEFRf3Ehs0i22V9M2FdBmUY8fnplnRJ_Es9nZmdnRIoEKw/viewform?usp=send_form" target="_blank" rel="noopener noreferrer" className="boilerLink">Register</a> */}
        </div>
        <h2 className="jelq">For any questions and concerns, please contact us via email: <br />           
        <a href = "mailto: mtsac.csclub@gmail.com">📧 mtsac.csclub@gmail.com</a></h2>
      </div>
    </div>
  </div>
  )
}

export default MovieNightBoiler