import React, { useState } from 'react';
import './Roles.css';

const data = {
  president: {
    title: "The President is responsible for: ",
    responsibility: [
      "Leading club meetings",
      "Overseeing club activities",
      "Supporting current officers"
    ]
  },
  vicePresident: {
    title: "The Vice President is responsible for: ",
    responsibility: [
      "Assuming duties in case of the absence of the President",
      "Being a direct aid to the President"
    ]
  },
  secretary: {
    title: "The Secretary is responsible for: ",
    responsibility: [
      "Recordkeeping all activities of the club",
      "In charge of all club correspondence"
    ]
  },
  treasurer: {
    title: "The Treasurer is responsible for: ",
    responsibility: [
      "Maintaining direct contact with club advisors in regards to club funds"
    ]
  },
  iccRep: {
    title: "The ICC Representative is responsible for: ",
    responsibility: [
      "Keeping records of all ICC-related activities and policies",
      "Deals with any Club Relation or Associate student-related activities"
    ]
  },
  outreach: {
    title: "The Outreach Officer is responsible for: ",
    responsibility: [
      "Club communications through social media platforms",
      "Producing relevant marketing materials that help promote the club"
    ]
  },
  workshop: {
    title: "The Workshop Officer is responsible for: ",
    responsibility: [
      "Planning, coordinating, and scheduling workshops on relevant topics",
      "Work with instructors, guest speakers, and advanced club members to lead workshops",
      "Advertise and promote workshops"
    ]
  }
};

const roleNames = {
  president: "President",
  vicePresident: "Vice President",
  secretary: "Secretary",
  treasurer: "Treasurer",
  iccRep: "ICC Representative",
  outreach: "Outreach Officer",
  workshop: "Workshop Officer"
};

const Roles = () => {
  const [activeSection, setActiveSection] = useState('president');

  return (
    <div className="roles-container">
      <div className="roles-buttons">
        {Object.keys(data).map((roleKey) => (
          <button
            key={roleKey}
            className={`role-button ${activeSection === roleKey ? 'active' : ''}`}
            onClick={() => setActiveSection(roleKey)}
          >
            {roleNames[roleKey]}
          </button>
        ))}
      </div>

      <div className="roles-details">
        <h2>{data[activeSection].title}</h2>
        <ul>
          {data[activeSection].responsibility.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Roles;
