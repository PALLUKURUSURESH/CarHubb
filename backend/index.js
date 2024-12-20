const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
dotenv.config();
const app = express();
const carRoutes = require("./Route/carRouter");
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

  app.use('/uploads', express.static('uploads'));
app.use("/api/cars", carRoutes)

// app.use(cors({
//     origin: 'http://localhost:5000',  // Update this with your frontend's URL if different
//   }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

