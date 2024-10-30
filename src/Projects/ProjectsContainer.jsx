import React from 'react';
import './ProjectsContainer.css';

const ProjectsContainer = ({ projectName, projectLink }) => {
  return (
    <div className="pc-master">
      <a href={projectLink} target="_blank" rel="noopener noreferrer" className="pc-link">
        <div className="pc-header">
          <h3>{projectName}</h3>
        </div>
        <div className="pc-content">
          <iframe
            src={`${projectLink.replace('/edit', '/preview')}`}
            title={`${projectName} presentation`}
            className="pc-iframe"
            allowFullScreen
          ></iframe>
        </div>
      </a>
    </div>
  );
};

export default ProjectsContainer;
