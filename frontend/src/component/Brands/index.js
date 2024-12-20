// import React from "react";
// import audi from './logos/audi.png';
// import bmw from './logos/bmw.png';
// import mahindra from './logos/Mahindra.jpg'
// import mercedes from './logos/Mercedes-Benz.jpg'
// import skoda from './logos/Skoda.jpg'
// import tata from './logos/Tata.jpg'
// import hundai from './logos/hyundai.png'
// import toyota from './logos/toyota.png'
// import suzuki from './logos/Suzuki.jpg'

// import './index.css'

// const carBrands = [
//   { name: 'Tata', logo: tata },
//   { name: 'Mahindra', logo: mahindra },
//   { name: 'hundai', logo: hundai },
//   { name: 'toyota', logo: toyota },
//   { name: 'bmw', logo: bmw },
//   { name: 'mercedes', logo: mercedes },
//   { name: 'skoda', logo: skoda },
//   { name: 'audi', logo: audi },
//   { name: 'suzuki', logo: suzuki }
  
// ];

// const Brands = () => {
//   return (
//     <div className="brands-container">
//       <div className="brand">
//         {carBrands.map((each) => (
//           <div key={each.name} className="car">
//             <img
//               src={each.logo}
//               alt={each.name}
//               className="brand-logo"
//             />
//             <p>{each.name}</p>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// };

// export default Brands;


import React, { useState } from "react";
import axios from "axios";
import audi from './logos/audi.png';
import bmw from './logos/bmw.png';
import mahindra from './logos/Mahindra.jpg';
import mercedes from './logos/Mercedes-Benz.jpg';
import skoda from './logos/Skoda.jpg';
import tata from './logos/Tata.jpg';
import hundai from './logos/hyundai.png';
import toyota from './logos/toyota.png';
import suzuki from './logos/Suzuki.jpg';

import './index.css';

const carBrands = [
  { name: 'Tata', logo: tata },
  { name: 'Mahindra', logo: mahindra },
  { name: 'hundai', logo: hundai },
  { name: 'toyota', logo: toyota },
  { name: 'bmw', logo: bmw },
  { name: 'mercedes', logo: mercedes },
  { name: 'skoda', logo: skoda },
  { name: 'audi', logo: audi },
  { name: 'suzuki', logo: suzuki }
];

const Brands = () => {
  const [brandData, setBrandData] = useState(null); // State to hold the brand's car data

  // Handle when a brand logo is clicked
  const handleBrandClick = async (brand) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/cars/api/cars/${brand.toLowerCase()}`);
      setBrandData(response.data); // Set the fetched car data to the state
    } catch (error) {
      console.error("Error fetching brand data:", error);
      setBrandData(null); // Reset brandData if there's an error
    }
  };

  return (
    <div className="brands-container">
      <div className="brand">
        {carBrands.map((each) => (
          <div key={each.name} className="car" onClick={() => handleBrandClick(each.name)}>
            <img
              src={each.logo}
              alt={each.name}
              className="brand-logo"
            />
            <p>{each.name}</p>
          </div>
        ))}
      </div>

      {/* Display fetched brand data if available */}
      {brandData && (
        <>
        <h2>{brandData[0]?.brand}</h2>
        <div className="brand-details">
          {brandData.map(car => (
            <div key={car._id} className="car-card">
              {/* <img src={car.imagePath} alt={car.name} className="car-image" /> */}
              <img src={`http://localhost:5000${car.imagePath}`} alt={car.name} className="car-image" />
              <p>Name: {car.name}</p>
              <p>Price: {car.price}</p>
              <p>Engine: {car.engine}</p>
              <p>Transmission: {car.transmissionType}</p>
              <p>Drive Type: {car.driveType}</p>
              <p>Body Type: {car.bodyType}</p>
              <p>Category: {car.category}</p>
              <p>Mileage: {car.mileage} kmpl</p>
              <p>User Review: {car.userReview}</p>
            </div>
          ))}
        </div>
     </>
      )}
    </div>
  );
};

export default Brands;

