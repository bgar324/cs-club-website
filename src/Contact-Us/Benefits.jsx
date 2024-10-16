import React from 'react'
import './Benefits.css'

const Benefits = ({title, description, image}) => {
  return (
    <>
      <div className="b-fit-masterdiv">
        <div className="b-title">
          {/* <img src = {image} alt="icon"/> */}
          <h4>{title}</h4>
        </div>
        <div className="b-description">
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}

export default Benefits