import React from 'react'
import './textboxes.css'

const TextBoxes = ({heading, description, image}) => {
  return (
    <>
    <div className="container">
      <div className="text-container">
        <div className="heading-text">
          <h2>{heading}</h2>
        </div>
        <div className="description-text">
          <p>{description}</p>
        </div>
      </div>
      <div className="image-container">
        <img src={image} />
      </div>
    </div>
    </>
  )
}

export default TextBoxes