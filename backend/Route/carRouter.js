const express=require('express')
const router = express.Router();
const Car = require("../models/Car");


router.get('/api/cars/:brand', async (req, res) => {
    const { brand } = req.params;
    
    try {
      // Make sure brand is being passed correctly
      console.log("Brand received:", brand);
    //   const cars = await Car.find();
      const cars = await Car.find({ brand: brand.toUpperCase() });  // Ensure the brand is in the correct case
      if (!cars || cars.length === 0) {
        return res.status(404).json({ message: "No cars found for this brand" });
      }
      
      res.json(cars);
      console.log(cars)
    } catch (error) {
      console.error("Error fetching cars:", error);
      res.status(500).json({ message: "Error fetching cars data" });
    }
  });
  

  module.exports=router


  