const express = require('express');
const router = express.Router();

// Import controller methods
const userController = require('../controllers/userController');

// Define routes
router.get('/username', userController.getUser);
router.get('/activity', userController.getActivity);
router.get('/chart', userController.getChart);

module.exports = router;
