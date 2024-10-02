import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './HomePage/Home';
import About from './About/About';
import Team from './Team/Team';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* events path here */}
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
