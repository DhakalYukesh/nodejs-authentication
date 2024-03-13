// Imports
const express = require('express');
const errorHandler = require('./middleware/errorhandler');
const app = express();
require('dotenv').config();

// Routes and Middleware
app.use(express.json()); // Parse JSON
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use(errorHandler);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});