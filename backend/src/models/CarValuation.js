const mongoose = require('mongoose');

const carValuationSchema = new mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    bodyType: String,
    transmission: String,
    fuel: String
});

const CarValuation = mongoose.model('CarValuation', carValuationSchema);

module.exports = CarValuation;
