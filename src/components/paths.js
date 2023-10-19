import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React  from 'react';
import Navbar from './navbar';
import AboutUs from './aboutus';
import Home from './home'; 
import Resources from './resources';
import Contact from './contact';
import Login from './login';
import Registration from './registration';

export default function Paths() {

  return (
    <BrowserRouter>


      <Navbar />
      
      <Routes>
      
        <Route path="/home" element={<Home />} />
        
        <Route path="/aboutus" element={<AboutUs />} />
        
        <Route path="/resources" element={<Resources />} />
        
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Registration />} />
        
      </Routes>
    
    </BrowserRouter>
  );

}
  