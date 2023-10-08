import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React  from 'react';
import Navbar from './components/Navbar.js';
import AboutUs from './components/aboutus.js';
import Home from './components/home.js'; 
import Resources from './components/Resources.js';
import Contact from './components/contact.js';

export default function App() {

  return (
    <BrowserRouter>


      <Navbar />
      // issues with route aboutus isnt showing info
      <Routes>
      
        <Route path="/home.js" element={<Home />} />
        
        <Route path="/aboutus.js" element={<AboutUs />} />
        
        <Route path="/Resources.js" element={<Resources />} />
        
        <Route path="/contact.js" element={<Contact />} />
        
      </Routes>
    
    </BrowserRouter>
  );

}
  