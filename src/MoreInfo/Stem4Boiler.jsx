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
        <p>Register via the Google Form below. This opportunity is expected to run through Spring 2025, and we do have limited availability. So don't hesitate to register soon!</p>
        <div className="foodbank-buttons">
          <a href="https://docs.google.com/document/d/195NhKNvVbfgFuf5gY-G6w0cKrsjylnN_nY5o9WefhHI/edit?tab=t.0#heading=h.hxb2k0wc22om" target="_blank" rel="noopener noreferrer" className="boilerLink">Details</a>
          <a href="https://docs.google.com/forms/d/1co43OjyqbYITjJ-jFDf5GFe_C-NSr_Cf3WtjOpc9oa0/edit" target="_blank" rel="noopener noreferrer" className="boilerLink">Register</a>
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