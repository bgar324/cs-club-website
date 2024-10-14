import React from 'react';
import './JoinUs.css'; 

function JoinUs({ title, description }) {
  return (
    <div className="pill-container">
      <h3 className="pill-title">{title}</h3>
      <p className="pill-description">{description}</p>
    </div>
  );
}

export default JoinUs;
