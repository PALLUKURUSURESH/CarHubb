const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  brand: { type: String, required: true },
  engine: { type: String, required: true },
  transmissionType: { 
    type: String, 
    enum: ["manual", "automatic"], 
    required: true 
  },
  driveType: { 
    type: String, 
    enum: ["front wheel drive", "rear wheel drive", "4wd", "all wheel drive"], 
    required: true 
  },
  bodyType: { 
    type: String, 
    enum: ["Sedan", "SUV", "Touring", "Off-roading", "mini-SUV"], 
    required: true 
  },
  category: { 
    type: String, 
    enum: ["family", "luxury", "value for money"], 
    required: true 
  },
  mileage: { type: Number, required: true },
  userReview: { type: String, required: true },
  imagePath: { type: String },  // Assuming this will store the image URL/path
});

module.exports = mongoose.model("Car", carSchema);
