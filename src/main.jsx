import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './HomePage/Home';
import About from './About/About';
import Team from './Team/Team';
import Projects from './Projects/Projects';
import Events from './Events/Events';
import Contact from './Contact-Us/Contact';
import Partners from './Partners/Partners';
import FoodBank from './MoreInfo/FoodBank';
import Mesa from './MoreInfo/Mesa';
import Stem from './MoreInfo/Stem';
import MovieNight from './MoreInfo/MovieNight';
import Stem4 from './MoreInfo/Stem4';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/join-us" element={<Contact />} /> 
        <Route path="/partners" element ={<Partners />} />

        {/* MoreInfo Routes */}
        <Route path ="/foodbank" element={<FoodBank />} />
        <Route path ="/mesa" element={<Mesa />} />
        <Route path ="/stem" element={<Stem />} />
        <Route path ="/night" element={<MovieNight />} />
        <Route path ="/stem4" element={<Stem4/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
