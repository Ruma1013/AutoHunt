const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    bodyType: { type: String, required: true },
    transmission: { type: String, required: true },
    fuel: { type: String, required: true },
    valuation: { type: Number, required: true },
}, { timestamps: true });

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
