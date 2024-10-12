import React from 'react';
import './JoinUs.css'; // Import the CSS file

function PillContainer({ title, description }) {
  return (
    <div className="pill-container">
      <h3 className="pill-title">{title}</h3>
      <p className="pill-description">{description}</p>
    </div>
  );
}

function JoinUs() {
  return (
    <div className="join-us-page">
      <h1 className="join-us-title">Join the Mt. SAC Computer Science Club</h1>
      
      <PillContainer
        title="How to Become a Member"
        description="fillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertext"
      />

      <PillContainer
        title="Benefits of Joining"
        description="fillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertext"
      />

      <PillContainer
        title="Roles of the Higher-Ups"
        description="fillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertext"
      />

      <PillContainer
        title="Meeting Schedule"
        description="fillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertext"
      />

      <PillContainer
        title="Join Our Mailing List"
        description="fillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertextfillertext"
      />
    </div>
  );
}

export default JoinUs;
