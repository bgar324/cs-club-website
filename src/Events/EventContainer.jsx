import React from 'react';
import { Link } from 'react-router-dom';
import './eventscontainer.css';

const EventContainer = ({ imagesrc, alt, eventName, infoLink, registerLink }) => {
  return (
    <div className="e-container">
      <div className="e-details">
        <img src={imagesrc} alt={alt} className="eventImage" />
        <div className="e-content">
          <h2 className="eventName">{eventName}</h2>
          <div className="buttonGroup">
            <Link to={infoLink} className="infoLink" target="_blank">More Info</Link>
            <a href={registerLink} target="_blank" rel="noopener noreferrer" className="registerLink">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventContainer;
