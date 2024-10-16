import React from 'react';
import './JoinUs.css'; 

function JoinUs({ title, description }) {
  return (
    <div className="j-p-masterdiv">
      <h3 className="pill-title">{title}</h3>
      <div className="pill-container">
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}

export default JoinUs;
