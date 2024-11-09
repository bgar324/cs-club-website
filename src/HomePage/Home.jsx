import React from 'react';
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
      <div className="hero-header">
        <img src="public/static/images/Mt SAC Buildings_43.jpg" alt="Building 43" className="background-image"/>
        <img src="public/static/images/MtSAC (1).png" alt="Duck Logo" className="logo-image"/>
      </div>
      <Footer />
    </>
  );
}

export default Home;
