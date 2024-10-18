import React from 'react'
import './FoodBankBoiler.css'

const FoodBankBoiler = () => {
  return (
    <div className="foodbank-boiler-master">
      <h1>Join us at the LA Food Bank Event!</h1>
      <div className="foodbank-boiler-container">
        <img src = "/static/images/cs_food_bank_flyer.png" />
        <div className="foodbank-boiler-info">
          <h1>LA Food Bank</h1>
          <h2>🗓️ Date: November 2, 2024</h2>
          <p>⏰ Time: 9 AM - 1 PM</p>
          <p>📍 Location: Los Angeles Regional Food Bank, 2300 Pellissier Place, City of Industry, CA 90601</p>
          <p>👥 In Collaboration with: AGS</p>
          <p>🎯 Organizer: Computer Science Club & LA Food Bank</p>
          <h2>What to expect:</h2>
          <ul>
            <li>Tasks: Sorting, inspecting, cleaning, and repackaging donated food items from local food drives</li>
            <li>Working together to prepare essential food packages</li>
            <li>Making a positive impact while earning volunteer hours! ✨</li>
          </ul>
          <h2>How to sign up: </h2>
          <p>Fill out the registration form BEFORE Friday, October 25th 11:59PM and browse the event details below:</p>
          <div className="foodbank-buttons">
            <a href="https://docs.google.com/document/d/1kkGk-kT-zIjRwQsTZ-rccgbeG8NL0GBxXljpwBN3qy0/edit?tab=t.0#heading=h.o8i4jkrbfnc5" target="_blank" rel="noopener noreferrer" className="boilerLink">Details</a>
            <a href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdhuEFRf3Ehs0i22V9M2FdBmUY8fnplnRJ_Es9nZmdnRIoEKw/viewform?usp=send_form" target="_blank" rel="noopener noreferrer" className="boilerLink">Register</a>
            <a href="https://www.cervistech.com/acts/console.php?console_id=0338&console_type=event_list&res_code=aMUkbD&ht=1" target="_blank" rel="noopener noreferrer" className="boilerLink">Profile Creation</a>
          </div>
          <h2 className="jelq">For any questions and concerns, please contact us via email: <br />           
          <a href = "mailto: mtsac.csclub@gmail.com">📧 mtsac.csclub@gmail.com</a></h2>
        </div>
      </div>
    </div>
  )
}

export default FoodBankBoiler

