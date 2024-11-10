import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import MailingList from '../Contact-Us/MailingList.jsx'
import './Home.css';
import { Helmet } from 'react-helmet';
const Home = () => {
  return (
    <div className="holy-moly">
      <Helmet>
        <title>Home | CS Club at Mt. SAC</title>
      </Helmet>        
      <Navbar />
      <div className="home-master">
        <div className="hero-header">
          <img src="/static/images/Mt SAC Buildings_43.jpg" alt="Building 43" className="background-image"/>
          <img src="/static/images/MtSAC (1).png" alt="Duck Logo" className="logo-image"/>
        </div>

        <div className="what-is">
          <div className="what-is-text">
           <h2>What is Computer Science at Mt. SAC?</h2>
           <p>Computer science is the study of computers, computation, information, and automation, encompassing their design, development, and practical applications. It includes a focus on creating and testing software and systems, from websites (like this one!) to complex, automated solutions. Learn more at the <a href="https://www.mtsac.edu/math/" target="_blank">Math and Computer Science department</a> for coursework and career paths.</p>
           <p>To learn our origins and what we offer, check out the about page. </p>
           <Link to ="/about" className="hero-button">about</Link>
          </div>
          <img src = "\static\images\IMG_4719.png" className= "what-is-image" />
        </div>

        <div className="hero-header-2">
          <img src ="/static/images/banner2.png" className ="banner2"/>
        </div>

        <div className="etc">

          <div className="team-joinus">
            <div className="tj-text">
              <h2>Looking to get involved or be a part of our team?</h2>
              <div className="tj">
                <div className="tj1">
                  <p>While we are currently not taking applications for cabinet positions, including the roles of president and vice president, check out our current team — don't be afraid to reach out!</p>
                  <Link to ="/team" className="hero-button">team</Link>
                </div>
                <div className="tj1">
                  <p>Interested in learning more about the benefits of joining? Visit our Join Us page for an in-depth look at what we offer.</p>
                  <Link to ="/join-us" className="hero-button">join us</Link>
                </div>
              </div>
            </div>
            <img src = "\static\images\IMG_4859.jpg" className= "what-is-image special" />
          </div>

          <div className="team-joinus">
          <img src = "\static\images\IMG_2030.jpg" className= "what-is-image specialR" />
            <div className="tj-text">
              <h2>Check out our events and projects!</h2>
              <div className="tj">
                <div className="tj1">
                  <p>Curious about our technical projects and past work? Explore our projects page to catch up on all our workshop and meeting slides!</p>
                  <Link to ="/projects" className="hero-button">projects</Link>
                </div>
                <div className="tj1">
                  <p>Want to see what we're up to? Check out the events page to see upcoming & past events!</p>
                  <Link to ="/events" className="hero-button">events</Link>
                </div>
              </div>
            </div>

          </div>

        </div>
        
      </div>

      <MailingList />

      <Footer />
    </div>
  );
}

export default Home;
