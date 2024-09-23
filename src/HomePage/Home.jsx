import React from 'react'
import Navbar from './Navbar.jsx'
import { Helmet } from 'react-helmet'; 

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | CS Club at Mt. SAC</title>
      </Helmet>

      <Navbar />
    </>
  )
}

export default Home