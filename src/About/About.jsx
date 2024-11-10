import './about.css';
import Navbar from '../HomePage/Navbar';
import TextBoxes from './TextBoxes';
import Footer from '../HomePage/Footer';
import { Helmet } from 'react-helmet'; 
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About | CS Club at Mt. SAC</title>
      </Helmet>

      <Navbar />
      <div className="a-master-container">
          <TextBoxes
            heading="What is our mission?"
            description="Our Computer Science Club is dedicated to fostering a collaborative environment where students can learn, create, and innovate in the field of technology." 
            image="\static\images\rubber duck.png"
          />
          <TextBoxes
            heading="What do we value the most?"
            description="We prioritize collaboration, innovation, and continual learning. We believe in creating a space where students can work together, grow their coding skills, and build lasting professional networks." 
            image="\static\images\rubber duck.png"
          />
          <TextBoxes
            heading="What do we do?"
            description="Our club hosts weekly workshops on topics like web development, coding challenges, and group projects. We also organize events such as hackathons and invite guest speakers from the tech industry." 
            image="\static\images\rubber duck.png"
          />
          <TextBoxes
            heading="Why should you join us?"
            description="By joining, you'll have access to coding resources, real-world project experiences, and networking opportunities with industry professionals. It's a great way to meet others who share your passion for technology." 
            image="\static\images\rubber duck.png"
          />
          <TextBoxes
            heading="Who are our partners?"
            description="We collaborate with organizations like STEMForOthers to give students hands-on experience in real-world projects." 
            image="\static\images\rubber duck.png"
          />
          <TextBoxes
            heading="How do you contact us or get involved?"
            description="Interested in joining? Sign up here or contact us at [email]. We look forward to having you in our community!" 
            image="\static\images\rubber duck.png"
          />
      </div>
      
      <Footer />
    </>
  );
}

export default About;
