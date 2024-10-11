import React from 'react';
import './eventscontainer.css';

const EventContainer = ({ imagesrc, alt, eventName, infoLink, registerLink }) => {
  return (
    <div className="e-container">
      <div className="e-details">
        <img src={imagesrc} alt={alt} className="eventImage" />
        <div className="e-content">
          <h2 className="eventName">{eventName}</h2>
          <div className="buttonGroup">
            <a href={infoLink} target="_blank" className="infoLink">More Info</a>
            <a href={registerLink} target="_blank" className="registerLink">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventContainer;
