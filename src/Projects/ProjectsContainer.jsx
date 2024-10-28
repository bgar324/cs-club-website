import React from 'react';
import './ProjectsContainer.css';

const ProjectsContainer = ({ projectName, projectImageSrc, projectLink }) => {
  return (
    <a href={projectLink} target="_blank" rel="noopener noreferrer" className="pc-link">
    <div className="pc-master">
        <div className="pc-header">
          <h3>{projectName}</h3>
        </div>
        <div className="pc-image">
          <img src={projectImageSrc} alt={`${projectName} thumbnail`} />
        </div>
    </div>
    </a>
  );
};
export default ProjectsContainer;
