import './about.css'
import Navbar from '../HomePage/Navbar'
import TextBoxes from './TextBoxes'
import { Helmet } from 'react-helmet'; 

import React from 'react'

const About = () => {
  return (
    <>
    <Helmet>
      <title>About | CS Club at Mt. SAC</title>
    </Helmet>

    <Navbar />
    <div className="first-box">
      <TextBoxes
        heading="What is our mission?"
        description="The mission for the Computer Science Club shall be to promote Computer Science student growth by way of developing leadership skills, encouraging experimentation and research, sharing of knowledge and otherwise peer support, provide opportunities expand their network, and most importantly: to make Computer Science fun and accessible to everyone." 
        image="\static\images\cs club logo.png"
      />
    </div>
    <TextBoxes
      heading="What is our mission?"
      description="The mission for the Computer Science Club shall be to promote Computer Science student growth by way of developing leadership skills, encouraging experimentation and research, sharing of knowledge and otherwise peer support, provide opportunities expand their network, and most importantly: to make Computer Science fun and accessible to everyone." 
      image="\static\images\cs club logo.png"
    />
    <TextBoxes
      heading="What is our mission?"
      description="The mission for the Computer Science Club shall be to promote Computer Science student growth by way of developing leadership skills, encouraging experimentation and research, sharing of knowledge and otherwise peer support, provide opportunities expand their network, and most importantly: to make Computer Science fun and accessible to everyone." 
      image="\static\images\cs club logo.png"
    />
    <TextBoxes
      heading="What is our mission?"
      description="The mission for the Computer Science Club shall be to promote Computer Science student growth by way of developing leadership skills, encouraging experimentation and research, sharing of knowledge and otherwise peer support, provide opportunities expand their network, and most importantly: to make Computer Science fun and accessible to everyone." 
      image="\static\images\cs club logo.png"
    />
    <TextBoxes
      heading="What is our mission?"
      description="The mission for the Computer Science Club shall be to promote Computer Science student growth by way of developing leadership skills, encouraging experimentation and research, sharing of knowledge and otherwise peer support, provide opportunities expand their network, and most importantly: to make Computer Science fun and accessible to everyone." 
      image="\static\images\cs club logo.png"
    />
    <TextBoxes
      heading="What is our mission?"
      description="The mission for the Computer Science Club shall be to promote Computer Science student growth by way of developing leadership skills, encouraging experimentation and research, sharing of knowledge and otherwise peer support, provide opportunities expand their network, and most importantly: to make Computer Science fun and accessible to everyone." 
      image="\static\images\cs club logo.png"
    />
    </>
  )
}

export default About