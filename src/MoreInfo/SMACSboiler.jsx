import React from 'react'

const SMACSboiler = () => {
  return (
    <div className="foodbank-boiler-master">
    <h1>Join us at the SMACS Hackathon Prep Event!</h1>
    <div className="foodbank-boiler-container">
      <img src = "/static/images/smacs.png" />
      <div className="foodbank-boiler-info">
        <h1>Hackathon Prep</h1>
        <h2>🗓️ Date: October 23, 2024</h2>
        <p>⏰ Time: 5 PM - 6 PM</p>
        <p>📍 Location: Building 60 - 1605</p>
        <p>🎯 Organizer: SMACS</p>
        <h2>What to expect:</h2>
        <ul>
          <li>🔎 Explore project ideas that suit your interests.</li>
          <li>💻 Group discussions to brainstorm and refine your ideas.</li>
          <li>📚 Tech advice on resources and tools to help you succeed.</li>
          <li>🙌 Mentorship and support from our talented club members.</li>
        </ul>
        <p>All skill levels are welcome! 🌟 So come with your ideas, or just bring your enthusiasm and get inspired!</p>
        <h2>How to sign up: </h2>
        <p>Fill out the registration form BEFORE Friday, October 25th 11:59PM and browse the event details below:</p>
        <div className="foodbank-buttons">
          <a href="https://smacs.vercel.app/" target="_blank" rel="noopener noreferrer" className="boilerLink">Register</a>
        </div>
        <h2 className="jelq">For any questions and concerns, please contact us via email: <br />           
        <a href = "mailto: mtsac.csclub@gmail.com">📧 mtsac.csclub@gmail.com</a></h2>
      </div>
    </div>
  </div>
  )
}

export default SMACSboiler