const express = require('express');
const { getActivity } = require('../controllers/activityController');
const router = express.Router();

//Route to get activity data
router.get('/', getActivity);

module.exports = router;
