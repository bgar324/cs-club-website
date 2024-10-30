import React from 'react';
import './ProjectsContainer.css';

const ProjectsContainer = ({ projectName, projectImageSrc, projectLink }) => {
  return (
    <>
    <div className="pc-master">
      <a href={projectLink} targe="t_blank" rel="noopener noreferrer" className="pc-link">
        <div className="pc-header">
          <h3>{projectName}</h3>
        </div>
        <div className="pc-image">
          <img src={projectImageSrc} alt={`${projectName} thumbnail`} />
        </div>
      </a>
    </div>
    </>
  );
};
export default ProjectsContainer;