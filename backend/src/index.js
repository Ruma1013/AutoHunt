require("dotenv").config(); // Ensure dotenv is loaded first
console.log("DB Connection String:", process.env.DB); // Log DB connection string
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const connection = require("./db");
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

// Connect to the database
connection();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Serve React frontend files
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
