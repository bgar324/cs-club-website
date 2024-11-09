import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './Home.css';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | CS Club at Mt. SAC</title>
      </Helmet>        
      <Navbar />
      <div className="home-master">
        <div className="hero-header">
          <img src="public/static/images/Mt SAC Buildings_43.jpg" alt="Building 43" className="background-image"/>
          <img src="public/static/images/MtSAC (1).png" alt="Duck Logo" className="logo-image"/>
        </div>

        <div className="what-is">
          <div className="what-is-text">
           <h2>What is Computer Science at Mt. SAC?</h2>
           <p>Computer science is the study of computers, computation, information, and automation, encompassing their design, development, and practical applications. It includes a focus on creating and testing software and systems, from websites (like this one!) to complex, automated solutions. Learn more at the <a href="https://www.mtsac.edu/math/" target="_blank">Math and Computer Science department</a> for coursework and career paths.</p>
           <p>To learn our origins and what we offer, check out the about page. </p>
           <Link to ="/about" className="hero-button">about</Link>
           {/* ADD ICONS HYPERLINKS HERE */}
          </div>
          <img src = "public\static\images\IMG_4719.png" className= "what-is-image" />
        </div>
      </div>

      <div className="hero-header-2">
        <img src ="public/static/images/banner2.png" className ="banner2"/>
      </div>

      <div className="etc-text">
        
      </div>

      
      <Footer />
    </>
  );
}

export default Home;
