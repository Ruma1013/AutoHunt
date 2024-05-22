const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

// Function to calculate car valuation (dummy logic for example)
const calculateValuation = (car) => {
    const { brand, model, year, bodyType, transmission, fuel } = car;

    // Your valuation calculation logic here
    if (brand === "Toyota" && transmission === "Auto") {
        return 5300000;
    } else if (brand === "Toyota" && transmission === "Manual") {
        return 5000000;
    } else if (brand === "Nissan") {
        return 3500000;
    } else if (brand === "Mazda") {
        return 3000000;
    } else if (brand === "Suzuki" && model === "Alto") {
        return 4800000;
    } else if (brand === "Suzuki" && model === "WagonR") {
        return 5200000;
    } else {
        return "Unknown valuation"; // Default value for other cases
    }
};

// POST route to handle car valuation submissions
router.post('/car-valuation', async (req, res) => {
    try {
        const { brand, model, year, bodyType, transmission, fuel } = req.body;
        
        // Calculate valuation
        const valuation = calculateValuation({ brand, model, year, bodyType, transmission, fuel });

        // Create a new car object
        const car = new Car({ brand, model, year, bodyType, transmission, fuel, valuation });

        // Save the car object to the database
        await car.save();

        // Respond with the valuation value
        res.status(201).json({ valuation });
    } catch (error) {
        console.error('Error handling car valuation:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
