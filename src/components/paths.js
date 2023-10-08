import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React  from 'react';
import Navbar from './navbar';
import AboutUs from './aboutus';
import Home from './home'; 
import Resources from './resources';
import Contact from './contact';

export default function Paths() {

  return (
    <BrowserRouter>


      <Navbar />
      
      <Routes>
      
        <Route path="/home" element={<Home />} />
        
        <Route path="/aboutus" element={<AboutUs />} />
        
        <Route path="/resources" element={<Resources />} />
        
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    
    </BrowserRouter>
  );

}
  