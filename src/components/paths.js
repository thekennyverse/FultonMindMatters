import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React  from 'react';
import Navbar from './Navbar';
import AboutUs from './aboutus';
import Home from './home'; 
import Resources from './resources';
import Contact from './contact';
import Login from './login';
import Registration from './registration';
import Family from './family';
import Finicial from './finicial';
import Shelter from './shelter';
import New from './new';
import Health from './health';
import Footer from './footer';

export default function Paths() {

  return (
    <BrowserRouter className="container">


      <Navbar />
      
      
      <Routes>
      
        <Route path="/home" element={<Home />} />
        
        <Route path="/aboutus" element={<AboutUs />} />
        
        <Route path="/resources" element={<Resources />} />
        
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Registration />} />

        <Route path="/family" element={<Family/>} />

           <Route path="/finicial" element={<Finicial/>} />

           <Route path="/shelter" element={<Shelter/>} />

           <Route path="/new" element={<New/>} />

           <Route path="/health" element={<Health/>} />


           
           
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );

}
  