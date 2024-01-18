// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/:userId/settings', userController.getUserSettings);
router.put('/:userId/settings', userController.updateUserSettings);

module.exports = router;
