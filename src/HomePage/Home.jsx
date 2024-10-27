import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx';
import './Home.css'
import { Helmet } from 'react-helmet'; 

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | CS Club at Mt. SAC</title>
      </Helmet>        
      <Navbar />
      <Footer />
    </>
  )
}

export default Home