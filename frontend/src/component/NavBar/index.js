import React from 'react';
import { Link } from 'react-router-dom';
import car from './images/carHub.jpg'
import './index.css'


export default function Navbar() {
 

  return (
    <div className='nav-container'>
        <nav className='nav-bar'>
        <Link to="/"><img src={car} alt="logo" className='icon'/></Link>
            <ul>
                
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/brands"><li>Browse By Brands</li></Link>
                <Link to="/emi"><li>EMI</li></Link>
                {/* <button type='button' className='btn-logout'>LogOut</button> */}
            </ul>
        </nav>
    </div>
  );
}