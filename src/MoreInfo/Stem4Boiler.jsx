import React from 'react'

const Stem4Boiler = () => {
  return (
    <div className="foodbank-boiler-master">
    <h1>Join us at the STEMForOthers Event!</h1>
    <div className="foodbank-boiler-container">
      <img src = "/static/images/cs club stem flyer.png" />
      <div className="foodbank-boiler-info">
        <h1>LA Food Bank</h1>
        <h2>🗓️ Date: #nodatespecified</h2>
        <p>⏰ Time: #notimespecified</p>
        <p>📍 Location: Online </p>
        <p>👥 In Collaboration with: STEMplore</p>
        <p>🎯 Organizer: Computer Science Club & STEMplore</p>
        <h2>What to expect:</h2>
        <p>Check out the three groups to gain hands on coding experience!</p>
        <ul>
          <li>Frontend Development Group: Update or build the frontend for the STEMplore website, ensuring smooth user experience and navigation.</li>
          <li>Curriculum Group: Design 4-5 weeks worth of content for the Intermediate Java course.</li>
          <li>Translation Group: Translate the existing Introduction to Java Course in C++ and/or Python</li>
        </ul>
        <h2>How to sign up: </h2>
        <p>Fill out the registration form BEFORE Friday, October 25th 11:59PM and browse the event details below:</p>
        <div className="foodbank-buttons">
          <a href="https://docs.google.com/document/d/18WHupwJ1JHqdeEQvlnV4LLE38CSnTe-CgTpLuJXlTbU/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="boilerLink">Details</a>
          {/* <a href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdhuEFRf3Ehs0i22V9M2FdBmUY8fnplnRJ_Es9nZmdnRIoEKw/viewform?usp=send_form" target="_blank" rel="noopener noreferrer" className="boilerLink">Register</a> */}
          {/* <a href="https://www.cervistech.com/acts/console.php?console_id=0338&console_type=event_list&res_code=aMUkbD&ht=1" target="_blank" rel="noopener noreferrer" className="boilerLink">Profile Creation</a> */}
        </div>
        <h2 className="jelq">For any questions and concerns, please contact us via email: <br />           
        <a href = "mailto: mtsac.csclub@gmail.com">📧 mtsac.csclub@gmail.com</a></h2>
      </div>
    </div>
  </div>
  )
}

export default Stem4Boiler