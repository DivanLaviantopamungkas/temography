import React from 'react';
import {Routes, Route}  from 'react-router-dom'

import Navbarcom from './components/Navbarcom';
import Footercom from './components/Footercom';

import HomePage from './pages/HomePage';
import PricePages from './pages/PricePages';
import TestimonialPage from './pages/TestimonialPage';
import About from './pages/About';
import FaqPage from './pages/FaqPage';
import Gallerycom from './pages/Gallerycom';


function App() {
  return (
    <div>
      <Navbarcom />
      <main>
      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/price' Component={PricePages}/>
        <Route path='gallery' Component={Gallerycom}/>
        <Route path='/testimonial' Component={TestimonialPage}/>
        <Route path='/faq' Component={FaqPage}/>
        <Route path='/about' Component={About}/>
      </Routes>
      </main>


      <Footercom />
    </div>
  );
}

export default App;
