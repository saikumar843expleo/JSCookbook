const express = require('express');
const app = express();
const path = require('path');

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Routes
const indexRouter = require('./routes/index');
app.use('/api', indexRouter);

module.exports = app;