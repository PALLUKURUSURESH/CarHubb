import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

// const carBrands = [
//   { name: 'Tata', logo: 'https://images.unsplash.com/photo-1619722087489-f0b1a6d3e909?w=150&h=150&fit=crop' },
//   { name: 'Mahindra', logo: 'https://images.unsplash.com/photo-1619722087489-f0b1a6d3e909?w=150&h=150&fit=crop' },
//   { name: 'BMW', logo: 'https://images.unsplash.com/photo-1619722087489-f0b1a6d3e909?w=150&h=150&fit=crop' },
//   { name: 'Mercedes', logo: 'https://images.unsplash.com/photo-1619722087489-f0b1a6d3e909?w=150&h=150&fit=crop' },
//   { name: 'Skoda', logo: 'https://images.unsplash.com/photo-1619722087489-f0b1a6d3e909?w=150&h=150&fit=crop' },
// ];

export default function Home() {
  return (
    <div className="relative">
      <div 
        className="home-container"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">
                The car you drive says a lot about you
              </h1>
              <p className="para">
                <spam className="one">Discover </spam>   your   perfect   ride   from   our   extensive   collection   of <spam className="two">Cars & Collectives..</spam>
              </p>
             <Link to="/about"> <button  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Explore Cars
              </button> </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="marquee-container">
      <div className="marquee-content">
      <p>Let's Explore About Cars and Get a fit car for You... </p>
      </div>
    </div>
      
    </div>
  );
}