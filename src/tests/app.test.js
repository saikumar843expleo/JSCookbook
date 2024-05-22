const express = require('express');
const router = express.Router();

// Example route
router.get('/hello', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

module.exports = router;
