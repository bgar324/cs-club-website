import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import MovieNightBoiler from './MovieNightBoiler'

const MovieNight = () => {
  return (
    <>
    <Helmet>
      <title>Movie Night | CS Club at Mt. SAC</title>
    </Helmet>
      <Navbar />
      <MovieNightBoiler />
      <Footer />
    </>
  )
}

export default MovieNight