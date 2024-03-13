// Imports
const express = require('express');
const errorHandler = require('./middleware/errorhandler');
const connectDb = require('./config/dbConnection');
const app = express();
require('dotenv').config();

// Connections
connectDb();
const PORT = process.env.PORT || 5000;

// Routes and Middleware
app.use(express.json()); // Parse JSON
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use(errorHandler);

// Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});