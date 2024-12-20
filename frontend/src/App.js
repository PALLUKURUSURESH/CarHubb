import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About'
import EmiCalculator from './component/EMI'
import Navbar from './component/NavBar'
import Brands from './component/Brands'

import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/emi' element={<EmiCalculator />} />
        <Route path='/brands' element={<Brands />}/>
      </Routes>
    </Router>
  );
};



export default App;
