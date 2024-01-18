// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/ping', (req, res) => {
  res.json({
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
