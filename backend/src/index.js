const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const signupRoutes = require('./routes/signupRoutes');
const indexRoutes = require('./routes/indexRoutes');

const app = express();
const PORT = 3000; // or any port you prefer

// MongoDB connection
mongoose.connect('mongodb+srv://shankavisal:shankavisal@cluster0.mvsfcc1.mongodb.net/A', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});

app.use(cors());
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Serve React frontend files
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

// Use routes
app.use('/', indexRoutes);
app.use('/api', signupRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
