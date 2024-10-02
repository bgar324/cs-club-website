import React from 'react'
import './Person.css'

const Person = ({imagesrc, alt, name, position, year}) => {
  return (
    <>

      <div className="p-container">
        <img src={imagesrc} alt={alt} className="pfp" />
        <h2 className="name">{name}</h2>
        <p className="position">{position}</p>
        <p className="year">{year}</p>
      </div>

    </>
  )
}

export default Person